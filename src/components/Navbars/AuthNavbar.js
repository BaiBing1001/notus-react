/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import appIcon from "assets/img/icon.png";

// components

// import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

// Custom scrollbar styles for the language dropdown
const dropdownScrollStyles = `
  .language-dropdown-scroll::-webkit-scrollbar {
    width: 6px;
  }
  
  .language-dropdown-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  .language-dropdown-scroll::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px;
  }
  
  .language-dropdown-scroll::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
  }
  
  .language-dropdown-scroll {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 #f1f1f1;
  }
`;

export default function Navbar(props) {
  const { t, i18n } = useTranslation();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = React.useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);

  // Click outside to close dropdowns
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setLegalDropdownOpen(false);
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <style>{dropdownScrollStyles}</style>
      <nav className="attention-nav top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              <img src={appIcon} alt="" width="32" height="32" className="mr-2 flex-shrink-0 object-contain" />
              Ringdy
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/features"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-cogs text-lg leading-lg mr-2" />{" "}
                  {t('navbar.features')}
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/subscription"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-crown text-lg leading-lg mr-2" />{" "}
                  {t('navbar.subscription')}
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/download"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-download text-lg leading-lg mr-2" />{" "}
                  {t('navbar.download')}
                </Link>
              </li>
              <li className="flex items-center dropdown-container" style={{ position: 'relative' }}>
                <button
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-gavel text-lg leading-lg mr-2" />{" "}
                  {t('navbar.legal')}
                  <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${legalDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {/* Legal Dropdown */}
                {legalDropdownOpen && (
                  <div 
                    className="bg-white shadow-lg rounded-lg py-2 min-w-48 z-50 border border-blueGray-200"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      marginTop: '8px'
                    }}
                  >
                    <Link
                      to="/privacy-policy"
                      className="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
                      onClick={() => setLegalDropdownOpen(false)}
                    >
                      <i className="fas fa-user-shield mr-2"></i>
                      {t('navbar.privacyPolicy')}
                    </Link>
                    <Link
                      to="/terms-of-use"
                      className="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
                      onClick={() => setLegalDropdownOpen(false)}
                    >
                      <i className="fas fa-file-contract mr-2"></i>
                      {t('navbar.termsOfUse')}
                    </Link>
                    <Link
                      to="/safety-tips"
                      className="block px-4 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100"
                      onClick={() => setLegalDropdownOpen(false)}
                    >
                      <i className="fas fa-exclamation-triangle mr-2"></i>
                      {t('navbar.safetyTips')}
                    </Link>
                  </div>
                )}
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* Language Selector */}
              <li className="flex items-center dropdown-container" style={{ position: 'relative' }}>
                <button
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-globe text-lg leading-lg mr-2" />{" "}
                  {i18n.language.toUpperCase()}
                  <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {/* Language Dropdown */}
                {languageDropdownOpen && (
                  <div 
                    className="bg-white shadow-lg rounded-lg py-2 min-w-48 z-50 border border-blueGray-200 language-dropdown-scroll"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: '0',
                      marginTop: '8px',
                      maxHeight: '240px',
                      overflowY: 'auto',
                      overflowX: 'hidden',
                      scrollBehavior: 'smooth',
                      WebkitOverflowScrolling: 'touch'
                    }}
                    onClick={(e) => e.stopPropagation()}
                    onWheel={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'en' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇺🇸 English
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('es');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'es' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇪🇸 Español
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('fr');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'fr' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇫🇷 Français
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('zh');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'zh' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇨🇳 中文 (简体)
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('zh-TW');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'zh-TW' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇹🇼 中文 (繁體)
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('de');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'de' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇩🇪 Deutsch
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ja');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'ja' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇯🇵 日本語
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ko');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'ko' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇰🇷 한국어
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('pt');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'pt' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇵🇹 Português
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ru');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'ru' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇷🇺 Русский
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ar');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'ar' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇸🇦 العربية
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('hi');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'hi' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇮🇳 हिन्दी
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('vi');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'vi' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇻🇳 Tiếng Việt
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('bn');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'bn' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇧🇩 বাংলা
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('cs');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'cs' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇨🇿 Čeština
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('da');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'da' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇩🇰 Dansk
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('el');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'el' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇬🇷 Ελληνικά
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('fi');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'fi' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇫🇮 Suomi
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('hu');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'hu' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇭🇺 Magyar
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('id');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'id' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇮🇩 Bahasa Indonesia
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('it');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'it' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇮🇹 Italiano
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ms');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'ms' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇲🇾 Bahasa Melayu
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('nl');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'nl' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇳🇱 Nederlands
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('no');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'no' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇳🇴 Norsk
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('pl');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'pl' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇵🇱 Polski
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ro');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'ro' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇷🇴 Română
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('sv');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'sv' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇸🇪 Svenska
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('th');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'th' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇹🇭 ไทย
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('tr');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'tr' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇹🇷 Türkçe
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ur');
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blueGray-100 ${i18n.language === 'ur' ? 'text-lightBlue-500 font-semibold' : 'text-blueGray-700'}`}
                    >
                      🇵🇰 اردو
                    </button>
                  </div>
                )}
              </li>
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
