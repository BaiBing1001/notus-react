import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

const CURRENCY_BY_REGION = {
  AD: "EUR", AE: "AED", AR: "ARS", AT: "EUR", AU: "AUD", BE: "EUR",
  BG: "BGN", BH: "BHD", BR: "BRL", CA: "CAD", CH: "CHF", CL: "CLP",
  CN: "CNY", CO: "COP", CY: "EUR", CZ: "CZK", DE: "EUR", DK: "DKK",
  EE: "EUR", EG: "EGP", ES: "EUR", FI: "EUR", FR: "EUR", GB: "GBP",
  GR: "EUR", HK: "HKD", HR: "EUR", HU: "HUF", ID: "IDR", IE: "EUR",
  IL: "ILS", IN: "INR", IS: "ISK", IT: "EUR", JP: "JPY", KR: "KRW",
  KW: "KWD", LK: "LKR", LT: "EUR", LU: "EUR", LV: "EUR", MA: "MAD",
  MC: "EUR", MX: "MXN", MY: "MYR", NL: "EUR", NO: "NOK", NZ: "NZD",
  OM: "OMR", PE: "PEN", PH: "PHP", PK: "PKR", PL: "PLN", PT: "EUR",
  QA: "QAR", RO: "RON", RU: "RUB", SA: "SAR", SE: "SEK", SG: "SGD",
  SI: "EUR", SK: "EUR", TH: "THB", TR: "TRY", TW: "TWD", UA: "UAH",
  US: "USD", VN: "VND", ZA: "ZAR",
};

function formatLocalPrice(usdAmount, currency, rates, locale) {
  const rate = currency === "USD" ? 1 : rates?.[currency];
  const displayCurrency = typeof rate === "number" ? currency : "USD";
  const amount = displayCurrency === "USD" ? usdAmount : usdAmount * rate;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: displayCurrency,
  }).format(amount);
}

export default function Subscription() {
  const { t, i18n } = useTranslation();
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://open.er-api.com/v6/latest/USD", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Exchange rate request failed");
        return response.json();
      })
      .then((data) => {
        if (data.result === "success" && data.rates) {
          setExchangeRates(data.rates);
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") setExchangeRates(null);
      });

    return () => controller.abort();
  }, []);

  const activeLanguage = i18n.resolvedLanguage || i18n.language || "en";
  const browserLocale = typeof navigator !== "undefined"
    ? navigator.languages?.[0] || navigator.language || "en-US"
    : "en-US";
  const priceLocale = /-[A-Za-z]{2}(?:-|$)/.test(activeLanguage) ? activeLanguage : browserLocale;
  const region = priceLocale.split("-").find((part) => /^[A-Za-z]{2}$/.test(part))?.toUpperCase();
  const currency = CURRENCY_BY_REGION[region] || "USD";
  const formatPrice = (usdAmount) => formatLocalPrice(usdAmount, currency, exchangeRates, activeLanguage);
  
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    {t('subscription.title')}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {t('subscription.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              {/* Yearly Plan - Best Value */}
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center order-3">
                <div className="attention-card relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {t('subscription.bestValue')}
                    </span>
                  </div>
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-400">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <h6 className="text-xl font-semibold mb-1">{t('subscription.yearlyTitle')}</h6>
                    <div className="text-4xl font-bold text-amber-600 mb-4">
                      {formatPrice(35.99)}
                      <span className="block text-sm font-normal text-blueGray-500">{t('subscription.yearlyPeriod')}</span>
                    </div>
                    <p className="mt-2 mb-4 text-blueGray-500 text-sm">
                      {t('subscription.yearlyDescription')}
                    </p>
                    <div className="border-t border-blueGray-200 pt-4">
                      <ul className="list-none text-left">
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedConnections')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedAreaAccess')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.premiumAvatars')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.customAvatar')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 mr-2"><i className="fas fa-check"></i></span>
                            <span className="text-sm text-blueGray-500">{t('subscription.features.unlimitedUndo')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 mr-2"><i className="fas fa-check"></i></span>
                            <span className="text-sm text-blueGray-500">{t('subscription.features.profilePriority')}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="mt-6 bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      {t('subscription.chooseYearly')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Monthly Plan - Most Popular */}
              <div className="w-full md:w-4/12 px-4 text-center order-1">
                <div className="attention-card relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-xl rounded-lg border-2 border-lightBlue-500">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lightBlue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {t('subscription.mostPopular')}
                    </span>
                  </div>
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-500">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <h6 className="text-xl font-semibold mb-1">{t('subscription.monthlyTitle')}</h6>
                    <div className="text-4xl font-bold text-lightBlue-600 mb-4">
                      {formatPrice(5.99)}
                      <span className="block text-sm font-normal text-blueGray-500">{t('subscription.monthlyPeriod')}</span>
                    </div>
                    <p className="mt-2 mb-4 text-blueGray-500 text-sm">
                      {t('subscription.monthlyDescription')}
                    </p>
                    <div className="border-t border-blueGray-200 pt-4">
                      <ul className="list-none text-left">
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedConnections')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedAreaAccess')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedUndo')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.profilePriority')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-2"><i className="fas fa-check"></i></span>
                            <span className="text-sm text-blueGray-500">{t('subscription.features.premiumAvatars')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-2"><i className="fas fa-check"></i></span>
                            <span className="text-sm text-blueGray-500">{t('subscription.features.customAvatar')}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="mt-6 bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      {t('subscription.chooseMonthly')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Six Month Plan */}
              <div className="pt-6 w-full md:w-4/12 px-4 text-center order-2">
                <div className="attention-card relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-crown"></i>
                    </div>
                    <h6 className="text-xl font-semibold mb-1">{t('subscription.sixMonthTitle')}</h6>
                    <div className="text-4xl font-bold text-emerald-600 mb-4">
                      {formatPrice(21.99)}
                      <span className="block text-sm font-normal text-blueGray-500">{t('subscription.sixMonthPeriod')}</span>
                    </div>
                    <p className="mt-2 mb-4 text-blueGray-500 text-sm">
                      {t('subscription.sixMonthDescription')}
                    </p>
                    <div className="border-t border-blueGray-200 pt-4">
                      <ul className="list-none text-left">
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedConnections')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedAreaAccess')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.unlimitedUndo')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-2">
                                <i className="fas fa-check"></i>
                              </span>
                            </div>
                            <div>
                              <span className="text-sm text-blueGray-500">
                                {t('subscription.features.profilePriority')}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-2"><i className="fas fa-check"></i></span>
                            <span className="text-sm text-blueGray-500">{t('subscription.features.premiumAvatars')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-2"><i className="fas fa-check"></i></span>
                            <span className="text-sm text-blueGray-500">{t('subscription.features.customAvatar')}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="mt-6 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      {t('subscription.chooseSixMonth')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="w-full text-center text-sm text-blueGray-500 mt-2">
              {t('subscription.priceDisclaimer')}
            </p>

            {/* Features Details Section */}
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-star text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {t('subscription.featuresTitle')}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {t('subscription.featuresDescription')}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-user-friends"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('subscription.features.unlimitedConnectionsDesc')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-filter"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('subscription.features.unlimitedAreaAccessDesc')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-map-marker-alt"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('subscription.features.unlimitedUndoDesc')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-redo"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('subscription.features.profilePriorityDesc')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-face-smile"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('subscription.features.premiumAvatarsDesc')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-wand-magic-sparkles"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('subscription.features.customAvatarDesc')}
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="Premium Features"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {t('subscription.enhancedNetworking')}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {t('subscription.enhancedNetworkingDesc')}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Passes Section */}
        <section className="pb-20 bg-blueGray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-4xl font-semibold pt-12">{t('subscription.tickets.title')}</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  {t('subscription.tickets.subtitle')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="attention-card relative flex flex-col bg-white mb-4 shadow-lg rounded-lg border border-blueGray-200">
                <div className="px-6 py-6 flex-auto">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-lightBlue-100">
                    <i className="fas fa-ticket-alt"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{t('subscription.tickets.single')}</h3>
                  <p className="text-3xl font-bold text-lightBlue-600 mb-3">{formatPrice(0.99)}</p>
                  <p className="text-sm text-blueGray-500 mb-5">{t('subscription.tickets.singleDesc')}</p>
                  <ul className="border-t border-blueGray-200 pt-4 text-sm text-blueGray-600">
                    <li className="flex items-start"><i className="fas fa-check text-lightBlue-500 mr-2 mt-1"></i>{t('subscription.tickets.venueAccessFeature')}</li>
                  </ul>
                </div>
              </div>

              <div className="attention-card relative flex flex-col bg-white mb-4 shadow-lg rounded-lg border border-blueGray-200">
                <div className="px-6 py-6 flex-auto">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-lightBlue-100">
                    <i className="fas fa-ticket-alt"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{t('subscription.tickets.pack3')}</h3>
                  <p className="text-3xl font-bold text-lightBlue-600 mb-3">{formatPrice(1.99)}</p>
                  <p className="text-sm text-blueGray-500 mb-5">{t('subscription.tickets.pack3Desc')}</p>
                  <ul className="border-t border-blueGray-200 pt-4 text-sm text-blueGray-600">
                    <li className="flex items-start"><i className="fas fa-check text-lightBlue-500 mr-2 mt-1"></i>{t('subscription.tickets.venueAccessFeature')}</li>
                  </ul>
                </div>
              </div>

              <div className="attention-card relative flex flex-col bg-white mb-4 shadow-xl rounded-lg border-2 border-lightBlue-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-lightBlue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">{t('subscription.tickets.bestValue')}</span>
                </div>
                <div className="px-6 py-8 flex-auto">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-lightBlue-100">
                    <i className="fas fa-ticket-alt"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{t('subscription.tickets.pack5')}</h3>
                  <p className="text-3xl font-bold text-lightBlue-600 mb-3">{formatPrice(2.99)}</p>
                  <p className="text-sm text-blueGray-500 mb-5">{t('subscription.tickets.pack5Desc')}</p>
                  <ul className="border-t border-blueGray-200 pt-4 text-sm text-blueGray-600">
                    <li className="flex items-start"><i className="fas fa-check text-lightBlue-500 mr-2 mt-1"></i>{t('subscription.tickets.venueAccessFeature')}</li>
                  </ul>
                </div>
              </div>

              <div className="attention-card relative flex flex-col bg-white mb-4 shadow-lg rounded-lg border border-orange-200">
                <div className="px-6 py-6 flex-auto">
                  <div className="text-orange-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-orange-100">
                    <i className="fas fa-moon"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{t('subscription.tickets.specialTicket')}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-3">{formatPrice(1.99)}</p>
                  <p className="text-sm text-blueGray-500 mb-5">{t('subscription.tickets.specialTicketDesc')}</p>
                  <ul className="border-t border-blueGray-200 pt-4 text-sm text-blueGray-600 space-y-2">
                    <li className="flex items-start"><i className="fas fa-check text-orange-500 mr-2 mt-1"></i>{t('subscription.features.unlimitedConnections')}</li>
                    <li className="flex items-start"><i className="fas fa-check text-orange-500 mr-2 mt-1"></i>{t('subscription.features.unlimitedUndo')}</li>
                    <li className="flex items-start"><i className="fas fa-check text-orange-500 mr-2 mt-1"></i>{t('subscription.features.customAvatar')}</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-blueGray-500 mt-2">{t('subscription.priceDisclaimer')}</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-16">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-4xl font-semibold">{t('subscription.faqTitle')}</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  {t('subscription.faqDescription')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h4 className="text-lg font-semibold mb-4">{t('subscription.faq.cancelTitle')}</h4>
                  <p className="text-blueGray-500 leading-relaxed">
                    {t('subscription.faq.cancelAnswer')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h4 className="text-lg font-semibold mb-4">{t('subscription.faq.unlimitedTitle')}</h4>
                  <p className="text-blueGray-500 leading-relaxed">
                    {t('subscription.faq.unlimitedAnswer')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h4 className="text-lg font-semibold mb-4">{t('subscription.faq.areaTitle')}</h4>
                  <p className="text-blueGray-500 leading-relaxed">
                    {t('subscription.faq.areaAnswer')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h4 className="text-lg font-semibold mb-4">{t('subscription.faq.ticketsTitle')}</h4>
                  <p className="text-blueGray-500 leading-relaxed">
                    {t('subscription.faq.ticketsAnswer')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h4 className="text-lg font-semibold mb-4">{t('subscription.faq.nightPassTitle')}</h4>
                  <p className="text-blueGray-500 leading-relaxed">
                    {t('subscription.faq.nightPassAnswer')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h4 className="text-lg font-semibold mb-4">{t('subscription.faq.paymentTitle')}</h4>
                  <p className="text-blueGray-500 leading-relaxed">
                    {t('subscription.faq.paymentAnswer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
