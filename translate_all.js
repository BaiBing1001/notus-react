/**
 * Translation Generator — Merge Mode + Fix Mode
 * Reads translations/english.json and adds ONLY missing keys to each language file.
 * Existing translations are preserved untouched.
 *
 * Usage:
 *   node translate_all.js <YOUR_API_KEY>                    ← merge missing keys
 *   node translate_all.js <YOUR_API_KEY> french spanish      ← merge for specific languages
 *   node translate_all.js <YOUR_API_KEY> --fix               ← force-fix known bad translations
 *   node translate_all.js <YOUR_API_KEY> --fix french        ← fix one language only
 *   node translate_all.js --website --dry-run                ← check website locale keys without writing
 *   node translate_all.js <YOUR_API_KEY> --website            ← translate corrected website copy in all locales
 *   node translate_all.js <YOUR_API_KEY> --website fr de      ← translate selected website locales
 *   node translate_all.js --website-all --dry-run
 *   node translate_all.js --website-all fr
 *   node translate_all.js --website-all
 * Website modes refresh existing strings; --website-all targets every English string.
 * Use GOOGLE_TRANSLATE_KEY in the environment for translation runs without a CLI key.
 * Or:
 *   set GOOGLE_TRANSLATE_KEY=<YOUR_API_KEY> && node translate_all.js
 *
 * Get a free API key at: https://console.cloud.google.com/apis/library/translate.googleapis.com
 * The free tier covers 500,000 chars/month.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { parseFragment } = require('parse5');

// ─── Config ───────────────────────────────────────────────────────────────────

const TRANSLATIONS_DIR = path.join(__dirname, 'translations');
const ENGLISH_FILE = path.join(TRANSLATIONS_DIR, 'english.json');
const WEBSITE_LOCALES_DIR = path.join(__dirname, 'src', 'locales');
const BATCH_SIZE = 50;   // items per API request (Google allows up to 128)
const BATCH_DELAY_MS = 250; // ms between batches to stay within rate limits
const LANG_DELAY_MS = 500;  // ms between languages

const WEBSITE_COPY_PATHS = [
  'legal.privacyPolicy.subtitle',
  'legal.privacyPolicy.dataUses.provide',
  'legal.privacyPolicy.sharingTypes.users',
  'safety.meetingInPerson.disclaimer',
];

// filename (without .json) → Google Translate language code
const LANGUAGES = {
  arabic:           'ar',
  bengali:          'bn',
  chineseSimplified:'zh-CN',
  chineseTraditional:'zh-TW',
  czech:            'cs',
  danish:           'da',
  dutch:            'nl',
  finnish:          'fi',
  french:           'fr',
  german:           'de',
  greek:            'el',
  hindi:            'hi',
  hungarian:        'hu',
  indonesian:       'id',
  italian:          'it',
  japanese:         'ja',
  korean:           'ko',
  malaysian:        'ms',
  norwegian:        'no',
  polish:           'pl',
  portuguese:       'pt',
  romanian:         'ro',
  russian:          'ru',
  spanish:          'es',
  swedish:          'sv',
  thai:             'th',
  turkish:          'tr',
  urdu:             'ur',
  vietnamese:       'vi',
};

const firstArg = process.argv[2];
const CLI_API_KEY = firstArg && !firstArg.startsWith('--') && !(firstArg in LANGUAGES)
  ? firstArg
  : null;
const API_KEY = CLI_API_KEY || process.env.GOOGLE_TRANSLATE_KEY;

// ─── Fix keys (targeted re-translation with context hints) ────────────────────
// Run with: node translate_all.js API_KEY --fix
// Values prefixed with "(context)" use context-enriched translation;
// values without a parenthetical are set verbatim (no API call).

const FIX_KEYS = {
  // Universal abbreviations — set verbatim, no translation needed
  'HomeMap-DistanceUnit':           'km',
  'HomeMap-DurationUnit':           'min',

  // Wrong word sense — context hints guide Google Translate
  'Interest-Gaming':                '(video games hobby, not gambling) Gaming',
  'Interest-Fitness':               '(physical fitness exercise hobby, NOT suitability or aptitude) Fitness',
  'Notifications-NewMatches':       '(new connections in dating app, not sports) New Matches',
  'Chat-IntroTitle':                '(your dating app connections list, not sports) Your Matches',
  'ScreenIntro-Slide2Title':        '(your dating app connections list, not sports) Your Matches',
  'Decline':                        '(refuse or reject an invitation) Decline',
  'Chat-DeclineButton':             '(refuse or reject an invitation) Decline',
  'ReceivingSlide-DeclineButton':   '(refuse or reject an invitation) Decline',
  'Save':                           '(save data or file button, NOT rescuing a person) Save',
  'EditProfile-SaveButton':         '(save data or file button, NOT rescuing a person) Save',
  'Saving':                         '(saving/storing data to server, NOT saving money) Saving...',
  'Filters-Saving':                 '(saving settings to server, NOT saving money) Saving...',
  'Back':                           '(go back navigation button, NOT the back side of an object) Back',
  'ProfileDetail-OnlineStatus':     '(user is currently active online) Active now',
  'HomeMap-ShakeCompleteTitle':     '(phone shake gesture completed, not a milkshake) Shake Complete! \uD83C\uDF89',

  // Profile field labels
  'EditProfile-BioLabel':           '(short biography text section in user profile, NOT biology school subject) Bio',
  'MaskCreate-PositionLabel':       '(position or location of an avatar piece to adjust, NOT job title or rank) Position',

  // Zodiac signs — must not be translated as diseases
  'Zodiac-Cancer':                  '(Cancer zodiac astrology horoscope sign, NOT the cancer disease) Cancer',

  // Financial/legal bond → romantic relationship bond
  'ReceivingSlide-AcceptButton':    '(accept a romantic partner bonding request) Accept Bond',
  'ChatConversation-BondedAlert':   '(couple who bonded together in app, not a bank account) Bonded Account',
  'EditProfile-BondedAlert':        '(couple who bonded together in app, not a bank account) Bonded Account',
  'UserInfo-BondedAlert':           '(couple who bonded together in app, not a bank account) Bonded Account',
  'QrScan-InvalidCodeMessage':      '(couple bonding QR code) Invalid or expired bonding code.',
  'Bonding-Step4Text':              '(romantic couple bond, not a financial bond) Each person pays once when confirming the bond. No subscription required.',
  'Bonding-ConfirmInfo4':           '(romantic couple bond, not financial) If in 3 days bonding is not confirmed, it will be cancelled',
  'Bonding-NoPurchaseOption':       '(couple bonding feature purchase) Bonding purchase option not available. Please try again later.',
  'Bonding-CancelBondError':        '(cancel couple bonding request) Failed to cancel bonding request.',
  'Bonding-BreakBondError':         '(break romantic couple bond) Failed to break bond.',
  'Bonding-CompleteBondError':      '(complete romantic couple bonding) Failed to complete bonding.',
  'Bonding-ConfirmBondError':       '(confirm romantic couple bond) Failed to confirm bonding.',

  // %{count} was treated as a person's name instead of a number
  'HomeMap-NearbyPersonFound':      '(count is a number of people detected) Found %{count} person via Bluetooth',
  'HomeMap-NearbyPeopleFound':      '(count is a number of people detected) Found %{count} people via Bluetooth',
  'HomeMap-HiddenUsersPrompt':      '(count is the number of hidden people at a place) %{count} more people are here — use a Discovery to see them',
  'HomeMap-BLEConfirmTitle':         '(confirmation title asking whether to additionally enable nearby Bluetooth discovery) Nearby Bluetooth discovery?',
  'HomeMap-BLEConfirmDescription':   '(explains that Location Mode works without Bluetooth and Bluetooth adds close-range discovery) Location Mode shows people at this place. Turn on Bluetooth only if you also want to discover people close around you.',

  // "60s" was translated as the 1960s decade
  'ScreenIntro-ProximityTimerText': '(grace period is 60 seconds, translate fully) Leaving proximity... Grace period: 60 seconds',

  // Singular time formats — strip redundant article/number before %{count}
  'ProfileDetail-MinuteAgoFormat':  '(X minutes ago time display) %{count} min ago',
  'ProfileDetail-HourAgoFormat':    '(X hours ago time display) %{count} hr ago',
  'ProfileDetail-DayAgoFormat':     '(X days ago time display) %{count} day ago',
  'ProfileDetail-ProximityVeryClose':'(coarse proximity label for a person within about 20 meters) Very close',
  'ProfileDetail-ProximityNearby':  '(coarse proximity label for a nearby person, without exact distance) Nearby',
  'ProfileDetail-ProximityInPlace': '(coarse proximity label meaning a person is at the same venue, without exact position) In this place',

  // Plural time formats — strip redundant "a few/vài/quelques" word inserted before or after %{count}
  'ProfileDetail-MinutesAgoFormat': '(X minutes ago time display) %{count} minutes ago',
  'ProfileDetail-HoursAgoFormat':   '(X hours ago time display) %{count} hours ago',
  'ProfileDetail-DaysAgoFormat':    '(X days ago time display) %{count} days ago',

  // "match" translated as sports match instead of dating connection
  'ChatConversation-LDRAlreadyEnabledMsg': '(this dating match connection) Long Distance Chat is already enabled for this match.',
  'ChatConversation-MatchNotFound':        '(dating app match connection) Match ID not found',

  // "Block" translated as physical cube/block instead of blocking a user
  'Block':                          '(block or ban a user on a social platform, NOT a physical cube or city block) Block',

  // "Switch" translated as hardware light-switch instead of action
  'HomeMap-SwitchButton':           '(button to change or switch to a different app mode) Change',

  // "Dismiss" translated as firing someone instead of closing a banner
  'HomeMap-Dismiss':                '(close or hide a notification banner, NOT firing an employee) Close',

  // "End Time" translated as historical era instead of clock time
  'Notifications-EndTime':          '(the clock time when quiet hours end, NOT a historical era or period) End Time',

  // Section title "About" treated as preposition "about/concerning"
  'ProfileDetail-AboutTitle':       '(About Me section title in a user profile, NOT the preposition about) About',

  // Verify hint uses car turn-signal vocabulary instead of head gesture
  'Verify-HintLeft':                '(slowly turn your head to the left until the on-screen indicator advances to the next step) Slowly turn left until the indicator advances',
  'Verify-HintRight':               '(now slowly turn your head to the right until the on-screen indicator advances) Now slowly turn right',

  // Gender options
  'Gender-Woman':                   '(woman gender selection option, use a polite respectful word) Woman',

  // "Action" interest translated as activity/active-state instead of action genre
  'Interest-Action':                '(action movies and entertainment genre as a hobby interest, NOT an activity or task) Action',

  // Online status with English "away" remaining untranslated
  'ChatConversation-OnlineNearby':  '(user is online and is nearby at this distance) Online • %{distance}m away',

  // Report form and LDR error — context-sensitive phrases
  'ReportModal-OtherPlaceholder':   '(placeholder text in a report form for describing why a user is being reported) Describe what happened and include any helpful details',
  'ChatConversation-LDRError':      '(error message when enabling long distance chat feature in a dating app) Failed to enable Long Distance Chat. Please try again.',

  // Discovery / Night Pass rename — ticket→discovery, special ticket→night pass
  'Premium-TicketsTab':             '(tab label for buying venue discovery passes in a social dating app) Discoveries',
  'Premium-TicketsTitle':           '(section heading for discovery pass purchase options) Discovery Passes',
  'Premium-TicketsSubtitle':        '(subtitle explaining discovery passes in a social dating app) Use discoveries to explore people at nearby places.',
  'Premium-Ticket1':                '(single venue discovery pass purchase option in a social app) Single Discovery',
  'Premium-Ticket1Desc':            '(description for a single discovery pass to explore one venue) Explore one place',
  'Premium-Ticket3':                '(3-pack venue discovery passes purchase option) 3 Discoveries',
  'Premium-Ticket5':                '(5-pack venue discovery passes purchase option, best value) 5 Discoveries',
  'Premium-SpecialTicket':          '(24-hour unlimited venue discovery pass for going out at night, NOT a transport pass) Night Pass',
  'Premium-SpecialTicketDesc':      '(description for 24-hour unlimited night pass in a social dating app) Unlimited discoveries for 24 hours — perfect for a night out',
  'Premium-NightPassFeaturesTitle': '(heading above the subset of premium features unlocked by buying a temporary Night Pass, as opposed to a full subscription) What Night Pass Unlocks',
  'HomeMap-NoTicketsTitle':         '(user has used all their venue discovery passes in a social app) No Discoveries Left',
  'HomeMap-NoTicketsMessage':       "(message shown when a user runs out of discovery passes) You've used all your free discoveries. Get more to keep exploring.",
  'HomeMap-BuyMore':                '(button to purchase more venue discovery passes) Get More',
  'HomeMap-UseTicketTitle':         '(confirmation dialog title before spending a venue discovery pass) Use a Discovery?',
  'HomeMap-UseTicketMessage':       '(asks user to spend one discovery pass to see all people at a named venue) Use 1 discovery to see everyone at "%{areaName}"? You have %{count} left.',
  'HomeMap-UseTicketButton':        '(button confirming spending a discovery pass to explore a venue) Discover',
  'HomeMap-WatchAdMessage':         '(instruction to watch ads to earn discovery passes, count is number of ads required) Watch %{count} ad(s) to earn a Discovery.\n\nProgress: %{current}/%{required}',
  'HomeMap-TicketEarnedTitle':      "(success notification when a user earns a discovery pass by watching ads) \uD83C\uDF89 Discovery Earned!",
  'HomeMap-TicketEarnedMessage':    '(success message showing the user earned a discovery pass and their new total count) You earned a Discovery! You now have %{count}.',
  'HomeMap-UseTicketNow':           '(button to immediately spend a just-earned discovery pass to join a venue) Discover Now',
  'HomeMap-KeepGoingMessage':       '(encouragement showing how many more ads the user must watch to earn the next discovery pass) Watch %{count} more ad(s) to earn your Discovery.',
  'HomeMap-UseSpecialTicketTitle':  '(dialog title to activate a 24-hour unlimited night pass, NOT a transport pass) Activate Night Pass?',
  'HomeMap-UseSpecialTicketMessage':'(confirmation for activating the night pass, count is remaining night passes) Activate your Night Pass for unlimited discoveries for 24 hours at any place. You have %{count} remaining.',
  'HomeMap-DailyLimitMessage':      "(shown when user reaches their daily invite limit, suggests Night Pass or Premium as upgrades) You've reached your daily invite limit. Activate a Night Pass or upgrade to Premium for unlimited connections.",
  'HomeMap-DailyCancelLimitTitle':  '(shown when user reaches daily undo/cancel limit for sent invitations) Daily Undo Limit Reached',
  'HomeMap-DailyCancelLimitMessage':"(shown when user reaches daily cancel limit for sent invitations, suggests night pass) You've reached your daily undo limit. Activate a Night Pass or upgrade to Premium for unlimited undos.",
  'HomeMap-NightPassUpsellTitle':   '(title for an upsell offering a Night Pass for the current evening) Unlock More Tonight',
  'HomeMap-NightPassUpsellBody':    '(description of Night Pass benefits in a social app) Get unlimited discoveries, invites, and avatar creation for 24 hours.',
  'HomeMap-NightPassUpsellCTA':     '(button to purchase the branded Night Pass product) Get Night Pass',
  'HomeMap-NormalBoosterTitle':     '(label for the discovery/venue-access tier option inside the join area modal in a social app) Discovery',
  'HomeMap-NormalBoosterTickets':   '(shows how many venue discovery passes the user currently has) You have %{count} discoveries',
  'HomeMap-SpecialBoosterTitle':    '(label for the 24-hour unlimited night pass tier option in the join area modal) Night Pass',
  'HomeMap-SpecialBoosterTickets':  '(shows night pass availability with count of remaining night passes) Night Pass ready (%{count} remaining)',
  'HomeMap-SpecialBoosterActivePass':'(status label shown when a 24-hour night pass is currently active and in use) 24hr pass active',
  'BlockedUsers-BlockedDaysAgo':     '(shows how many days ago a user was blocked, with d as the abbreviated day unit) Blocked %{count}d ago',
  'HomeMap-NormalBoosterWatchAds': '(instruction to watch ads to earn a venue discovery pass, count is number of ads required, NOT earning cash) Watch %{count} ad(s) to earn a Discovery',
};

// Strips "(context hint) " prefix — handles both ASCII () and full-width Chinese/Japanese （）
const CONTEXT_RE = /^\s*[\(（].*?[\)）]\s*/;

// ─── Placeholder protection ────────────────────────────────────────────────────
// i18n-js uses %{varName} syntax. We replace these with tokens the translator
// won't touch, then restore them after translation.

// Protect interpolation placeholders and product names that must remain consistent
// across the app, store listings, analytics, and support content.
const PROTECTED_TEXT_RE = /\{\{[^}]+\}\}|%\{[^}]+\}|%@|Night Pass|Premium|Ringdy|Bluetooth|BLE|LDR/g;
const PROTECTED_TOKEN_RE = /%\{__spot_protected_(\d+)__(?:\})?/g;

function protectPlaceholders(text) {
  const map = [];
  const protected_ = text.replace(PROTECTED_TEXT_RE, (match) => {
    const token = `%{__spot_protected_${map.length}__}`;
    map.push(match);
    return token;
  });
  return { protected: protected_, map };
}

function restorePlaceholders(text, map) {
  return text.replace(PROTECTED_TOKEN_RE, (_, i) => map[parseInt(i, 10)] ?? _);
}

function escapeTranslationHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\n/g, '<br>');
}

function protectWebsiteText(text) {
  const map = [];
  let previousEnd = 0;
  let html = '';
  for (const match of text.matchAll(PROTECTED_TEXT_RE)) {
    html += escapeTranslationHtml(text.slice(previousEnd, match.index));
    const tokenIndex = map.length;
    map.push(match[0]);
    html += `<span translate="no" class="notranslate" data-protected-index="${tokenIndex}">${escapeTranslationHtml(match[0])}</span>`;
    previousEnd = match.index + match[0].length;
  }
  html += escapeTranslationHtml(text.slice(previousEnd));
  return { html, map };
}

function restoreWebsiteText(html, map, location) {
  const seen = new Set();
  const fail = () => {
    throw new Error(`Protected text was altered for ${location}; file not updated.`);
  };
  const readNode = (node) => {
    if (node.nodeName === '#text') return node.value;
    if (node.nodeName === '#comment') return '';
    if (node.tagName === 'br') return '\n';
    const tokenAttribute = node.attrs?.find(attribute => attribute.name === 'data-protected-index');
    if (tokenAttribute) {
      if (node.tagName !== 'span' || !/^\d+$/.test(tokenAttribute.value)) fail();
      const tokenIndex = Number(tokenAttribute.value);
      if (tokenIndex >= map.length || seen.has(tokenIndex)) fail();
      if (node.childNodes.some(child => child.nodeName !== '#text')) fail();
      const content = node.childNodes.map(child => child.value).join('');
      if (content !== map[tokenIndex]) fail();
      seen.add(tokenIndex);
      return map[tokenIndex];
    }
    return (node.childNodes || []).map(readNode).join('');
  };
  const restored = readNode(parseFragment(html));
  if (seen.size !== map.length) fail();
  return restored;
}

// ─── HTML entity decode ────────────────────────────────────────────────────────
// Google Translate sometimes returns HTML entities even in text mode.

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

// ─── API call ──────────────────────────────────────────────────────────────────

function translateBatch(texts, targetLang, format = 'text') {
  return new Promise((resolve, reject) => {
    const params = texts
      .map(t => `q=${encodeURIComponent(t)}`)
      .join('&');
    const body = `${params}&target=${targetLang}&source=en&format=${format}&key=${API_KEY}`;

    const options = {
      hostname: 'translation.googleapis.com',
      path: '/language/translate/v2',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      let raw = '';
      res.on('data', chunk => { raw += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(raw);
          if (parsed.error) {
            reject(new Error(`API Error ${parsed.error.code}: ${parsed.error.message}`));
            return;
          }
          const results = parsed.data.translations.map(t => format === 'html' ? t.translatedText : decodeEntities(t.translatedText));
          resolve(results);
        } catch (e) {
          reject(new Error(`Parse error: ${e.message}\nRaw: ${raw.slice(0, 200)}`));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ─── Per-language translation ──────────────────────────────────────────────────

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateLanguage(langFile, langCode, allKeys, allValues) {
  const outputPath = path.join(TRANSLATIONS_DIR, `${langFile}.json`);

  // Load existing translations so we don't overwrite or re-translate them
  let existing = {};
  if (fs.existsSync(outputPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
    } catch (e) {
      console.warn(`  ⚠️  Could not parse ${langFile}.json, starting fresh`);
    }
  }

  // Only translate keys absent from the existing file
  const missingIndices = allKeys.reduce((acc, k, i) => {
    if (!(k in existing)) acc.push(i);
    return acc;
  }, []);

  if (missingIndices.length === 0) {
    console.log(`✅ ${langFile.padEnd(20)} already up-to-date (0 new keys)`);
    return;
  }

  const missingKeys   = missingIndices.map(i => allKeys[i]);
  const missingValues = missingIndices.map(i => allValues[i]);
  process.stdout.write(`\n🌍 ${langFile.padEnd(20)} (${langCode.padEnd(5)}) +${missingKeys.length} keys `);

  // Protect placeholders, translate, restore
  const protected_ = missingValues.map(protectPlaceholders);
  const textsToTranslate = protected_.map(p => p.protected);
  const translated = [];
  const totalBatches = Math.ceil(textsToTranslate.length / BATCH_SIZE);

  for (let i = 0; i < textsToTranslate.length; i += BATCH_SIZE) {
    const batch = textsToTranslate.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    try {
      const results = await translateBatch(batch, langCode);
      for (let j = 0; j < results.length; j++) {
        translated.push(restorePlaceholders(results[j], protected_[i + j].map));
      }
      process.stdout.write(`${batchNum}/${totalBatches} `);
      if (i + BATCH_SIZE < textsToTranslate.length) await sleep(BATCH_DELAY_MS);
    } catch (err) {
      console.error(`\n  ❌ Batch ${batchNum} failed: ${err.message}`);
      // Fall back to English for this batch
      for (let j = 0; j < batch.length; j++) translated.push(missingValues[i + j]);
    }
  }

  // Build translated map for new keys
  const newTranslations = {};
  missingKeys.forEach((k, i) => { newTranslations[k] = translated[i]; });

  // Merge: follow english.json key order; existing wins, new fills the gaps
  const merged = {};
  allKeys.forEach(k => { merged[k] = k in existing ? existing[k] : newTranslations[k]; });

  fs.writeFileSync(outputPath, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`✅`);
}

function getNestedValue(object, dottedPath) {
  return dottedPath.split('.').reduce((value, key) => value?.[key], object);
}

function collectStringPaths(object, prefix) {
  if (typeof object === 'string') return [prefix];
  if (!object || typeof object !== 'object' || Array.isArray(object)) return [];
  return Object.entries(object).flatMap(([key, value]) =>
    collectStringPaths(value, prefix ? `${prefix}.${key}` : key)
  );
}

function setNestedValue(object, dottedPath, value) {
  const keys = dottedPath.split('.');
  const leafKey = keys.pop();
  const parent = keys.reduce((current, key) => {
    if (!current[key] || typeof current[key] !== 'object') current[key] = {};
    return current[key];
  }, object);
  parent[leafKey] = value;
}

async function translateWebsiteLocale(localeFile, targetLang, english, copyPaths, dryRun) {
  const localePath = path.join(WEBSITE_LOCALES_DIR, localeFile);
  const locale = JSON.parse(fs.readFileSync(localePath, 'utf8'));
  const missingPaths = copyPaths.filter(path =>
    typeof getNestedValue(locale, path) !== 'string'
  );

  if (dryRun) {
    const englishMatches = copyPaths.filter(path =>
      getNestedValue(locale, path) === getNestedValue(english, path)
    );
    console.log(`  ${localeFile}: ready (${copyPaths.length} keys; ${missingPaths.length} missing; ${englishMatches.length} identical to English)`);
    return;
  }

  const sourceValues = copyPaths.map(path => getNestedValue(english, path));
  const protectedValues = sourceValues.map(protectWebsiteText);
  const translatedValues = [];
  for (let offset = 0; offset < protectedValues.length; offset += BATCH_SIZE) {
    const batch = protectedValues.slice(offset, offset + BATCH_SIZE);
    const results = await translateBatch(batch.map(value => value.html), targetLang, 'html');
    if (results.length !== batch.length || results.some(value => typeof value !== 'string' || !value.trim())) {
      throw new Error(`Invalid translation response for ${localeFile}; file not updated.`);
    }
    results.forEach((html, index) => {
      translatedValues.push(restoreWebsiteText(
        html,
        batch[index].map,
        `${localeFile}: ${copyPaths[offset + index]}`
      ));
    });
    if (offset + BATCH_SIZE < protectedValues.length) await sleep(BATCH_DELAY_MS);
  }

  copyPaths.forEach((path, index) => {
    setNestedValue(locale, path, translatedValues[index]);
  });

  fs.writeFileSync(localePath, JSON.stringify(locale, null, 2) + '\n', 'utf8');
  console.log(`  ${localeFile}: translated ${copyPaths.length} keys`);
}

async function translateWebsiteLocales(localeFilters, dryRun, fullWebsite = false) {
  const englishPath = path.join(WEBSITE_LOCALES_DIR, 'en.json');
  const english = JSON.parse(fs.readFileSync(englishPath, 'utf8'));
  const subscriptionPaths = collectStringPaths(english.subscription, 'subscription');
  if (subscriptionPaths.length === 0) {
    throw new Error('English website subscription strings are missing.');
  }
  const copyPaths = fullWebsite
    ? collectStringPaths(english, '')
    : [...new Set([...WEBSITE_COPY_PATHS, ...subscriptionPaths])];
  const localeFiles = fs.readdirSync(WEBSITE_LOCALES_DIR)
    .filter(file => file.endsWith('.json') && file !== 'en.json')
    .sort();
  const selectedLocales = localeFilters.length > 0
    ? localeFiles.filter(file => localeFilters.includes(path.basename(file, '.json')))
    : localeFiles;
  const unknownLocales = localeFilters.filter(locale =>
    !localeFiles.includes(`${locale}.json`)
  );

  if (unknownLocales.length > 0) {
    throw new Error(`Unknown website locale(s): ${unknownLocales.join(', ')}`);
  }

  if (selectedLocales.length === 0) {
    throw new Error('No website locale files found to translate.');
  }

  copyPaths.forEach(copyPath => {
    if (typeof getNestedValue(english, copyPath) !== 'string') {
      throw new Error(`English website copy is missing key: ${copyPath}`);
    }
  });

  console.log(`${dryRun ? 'Dry run:' : 'Translating'} ${copyPaths.length} website keys in ${selectedLocales.length} locale(s).`);
  console.log(`${fullWebsite ? 'Full website' : 'Subscription'} coverage: ${fullWebsite ? copyPaths.length : subscriptionPaths.length} English string keys targeted; existing values will be refreshed.`);
  if (dryRun) {
    if (fullWebsite) {
      console.log(`Sections: ${Object.keys(english).join(', ')}`);
    } else {
      console.log(`Keys: ${copyPaths.join(', ')}`);
    }
  }

  for (const localeFile of selectedLocales) {
    const locale = path.basename(localeFile, '.json');
    const targetLang = locale === 'zh' ? 'zh-CN' : locale;
    await translateWebsiteLocale(localeFile, targetLang, english, copyPaths, dryRun);
    if (!dryRun) await sleep(LANG_DELAY_MS);
  }
}

// ─── Fix mode: force-retranslate known bad keys ─────────────────────────────

async function fixLanguage(langFile, langCode) {
  const outputPath = path.join(TRANSLATIONS_DIR, `${langFile}.json`);
  let existing = {};
  if (fs.existsSync(outputPath)) {
    try { existing = JSON.parse(fs.readFileSync(outputPath, 'utf8')); }
    catch (e) { console.warn(`  ⚠️  Could not parse ${langFile}.json`); return; }
  }

  const fixKeys   = Object.keys(FIX_KEYS);
  const fixValues = Object.values(FIX_KEYS);

  // Verbatim keys are set directly; context-hinted keys go through the API
  const verbatimKeys  = fixKeys.filter((_, i) => !fixValues[i].startsWith('('));
  const translateKeys = fixKeys.filter((_, i) =>  fixValues[i].startsWith('('));
  const translateVals = translateKeys.map(k => FIX_KEYS[k]);

  process.stdout.write(`\n🔧 ${langFile.padEnd(20)} (${langCode.padEnd(5)}) ${verbatimKeys.length} verbatim + ${translateKeys.length} via API `);

  // Translate context-hinted values
  const translatedMap = {};
  if (translateKeys.length > 0) {
    const protected_ = translateVals.map(protectPlaceholders);
    const textsToTranslate = protected_.map(p => p.protected);
    const allTranslated = [];
    const totalBatches = Math.ceil(textsToTranslate.length / BATCH_SIZE);

    for (let i = 0; i < textsToTranslate.length; i += BATCH_SIZE) {
      const batch = textsToTranslate.slice(i, i + BATCH_SIZE);
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      try {
        const results = await translateBatch(batch, langCode);
        for (let j = 0; j < results.length; j++) {
          // Strip the translated context hint prefix "(\u2026) " from the result
          const raw = restorePlaceholders(results[j], protected_[i + j].map);
          allTranslated.push(raw.replace(CONTEXT_RE, ''));
        }
        process.stdout.write(`${batchNum}/${totalBatches} `);
        if (i + BATCH_SIZE < textsToTranslate.length) await sleep(BATCH_DELAY_MS);
      } catch (err) {
        console.error(`\n  ❌ Batch ${batchNum} failed: ${err.message}`);
        // Fall back: strip context hint from English value
        for (let j = 0; j < batch.length; j++) {
          allTranslated.push(translateVals[i + j].replace(CONTEXT_RE, ''));
        }
      }
    }
    translateKeys.forEach((k, i) => { translatedMap[k] = allTranslated[i]; });
  }

  // Apply all fixes: verbatim first, then API-translated
  verbatimKeys.forEach(k => { existing[k] = FIX_KEYS[k]; });
  Object.assign(existing, translatedMap);

  fs.writeFileSync(outputPath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅`);
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(CLI_API_KEY ? 3 : 2);
  const isFixMode = args.includes('--fix');
  const isFullWebsiteMode = args.includes('--website-all');
  const isWebsiteMode = args.includes('--website') || isFullWebsiteMode;
  const isDryRun = args.includes('--dry-run');
  const langFilter = args.filter(arg => !['--fix', '--website', '--website-all', '--dry-run'].includes(arg));

  if (isDryRun && !isWebsiteMode) {
    console.error('❌  --dry-run can only be used with --website or --website-all.');
    process.exit(1);
  }

  if (isWebsiteMode && isFixMode) {
    console.error('❌  --website and --fix are separate modes and cannot be combined.');
    process.exit(1);
  }

  if (isWebsiteMode) {
    if (!API_KEY && !isDryRun) {
      console.error('❌  No API key provided. Set GOOGLE_TRANSLATE_KEY or pass your Google Translate API key.');
      process.exit(1);
    }
    await translateWebsiteLocales(langFilter, isDryRun, isFullWebsiteMode);
    return;
  }

  if (!API_KEY) {
    console.error('❌  No API key provided.');
    console.error('   Usage:  node translate_all.js YOUR_GOOGLE_TRANSLATE_API_KEY');
    console.error('   Fix:    node translate_all.js YOUR_API_KEY --fix');
    console.error('   Or set: GOOGLE_TRANSLATE_KEY=your_key  node translate_all.js');
    console.error('\n   Get a free key at:');
    console.error('   https://console.cloud.google.com/apis/library/translate.googleapis.com');
    process.exit(1);
  }

  const nativeLangFilter = args.filter(arg => arg !== '--fix');
  const langsToRun = nativeLangFilter.length > 0
    ? Object.entries(LANGUAGES).filter(([name]) => nativeLangFilter.includes(name))
    : Object.entries(LANGUAGES);

  if (nativeLangFilter.length > 0) {
    console.log(`   🎯 Targeting only: ${nativeLangFilter.join(', ')}\n`);
  }

  if (isFixMode) {
    console.log(`\n🔧 Fix mode — force-correcting ${Object.keys(FIX_KEYS).length} known bad keys in ${langsToRun.length} language(s)`);
    console.log(`   Verbatim: ${Object.keys(FIX_KEYS).filter(k => !FIX_KEYS[k].startsWith('(')).length} keys | API-translated: ${Object.keys(FIX_KEYS).filter(k => FIX_KEYS[k].startsWith('(')).length} keys\n`);

    for (const [langFile, langCode] of langsToRun) {
      await fixLanguage(langFile, langCode);
      await sleep(LANG_DELAY_MS);
    }

    console.log(`\n\n✅  Fix mode complete. ${langsToRun.length} language file(s) updated.`);
    console.log(`   Tip: run without --fix to continue adding any still-missing keys.`);
    return;
  }

  // Normal merge mode
  console.log('📖 Reading english.json...');
  const english = JSON.parse(fs.readFileSync(ENGLISH_FILE, 'utf8'));
  const keys = Object.keys(english);
  const values = Object.values(english);

  const totalLangs = Object.keys(LANGUAGES).length;
  console.log(`   ${keys.length} keys in english.json | ${totalLangs} languages`);
  console.log(`   Merge mode: only missing keys will be translated and added.\n`);

  for (const [langFile, langCode] of langsToRun) {
    await translateLanguage(langFile, langCode, keys, values);
    await sleep(LANG_DELAY_MS);
  }

  console.log(`\n\n✅  ${langsToRun.length} language file(s) written to translations/`);
}

main().catch(err => {
  console.error('\nFatal:', err.message);
  process.exit(1);
});
