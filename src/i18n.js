import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import arTranslations from './locales/ar.json';
import bnTranslations from './locales/bn.json';
import csTranslations from './locales/cs.json';
import daTranslations from './locales/da.json';
import deTranslations from './locales/de.json';
import elTranslations from './locales/el.json';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import fiTranslations from './locales/fi.json';
import frTranslations from './locales/fr.json';
import hiTranslations from './locales/hi.json';
import huTranslations from './locales/hu.json';
import idTranslations from './locales/id.json';
import itTranslations from './locales/it.json';
import jaTranslations from './locales/ja.json';
import koTranslations from './locales/ko.json';
import msTranslations from './locales/ms.json';
import nlTranslations from './locales/nl.json';
import noTranslations from './locales/no.json';
import plTranslations from './locales/pl.json';
import ptTranslations from './locales/pt.json';
import roTranslations from './locales/ro.json';
import ruTranslations from './locales/ru.json';
import svTranslations from './locales/sv.json';
import thTranslations from './locales/th.json';
import trTranslations from './locales/tr.json';
import urTranslations from './locales/ur.json';
import viTranslations from './locales/vi.json';
import zhTranslations from './locales/zh.json';
import zhTWTranslations from './locales/zh-TW.json';

// Translation resources
const resources = {
  ar: {
    translation: arTranslations
  },
  bn: {
    translation: bnTranslations
  },
  cs: {
    translation: csTranslations
  },
  da: {
    translation: daTranslations
  },
  de: {
    translation: deTranslations
  },
  el: {
    translation: elTranslations
  },
  en: {
    translation: enTranslations
  },
  es: {
    translation: esTranslations
  },
  fi: {
    translation: fiTranslations
  },
  fr: {
    translation: frTranslations
  },
  hi: {
    translation: hiTranslations
  },
  hu: {
    translation: huTranslations
  },
  id: {
    translation: idTranslations
  },
  it: {
    translation: itTranslations
  },
  ja: {
    translation: jaTranslations
  },
  ko: {
    translation: koTranslations
  },
  ms: {
    translation: msTranslations
  },
  nl: {
    translation: nlTranslations
  },
  no: {
    translation: noTranslations
  },
  pl: {
    translation: plTranslations
  },
  pt: {
    translation: ptTranslations
  },
  ro: {
    translation: roTranslations
  },
  ru: {
    translation: ruTranslations
  },
  sv: {
    translation: svTranslations
  },
  th: {
    translation: thTranslations
  },
  tr: {
    translation: trTranslations
  },
  ur: {
    translation: urTranslations
  },
  vi: {
    translation: viTranslations
  },
  zh: {
    translation: zhTranslations
  },
  'zh-TW': {
    translation: zhTWTranslations
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;
