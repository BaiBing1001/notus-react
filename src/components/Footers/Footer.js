import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import appIcon from "assets/img/icon.png";
import { COMPANY_NAME } from "../../constants/company.js";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Link to="/" className="inline-flex items-center mb-4 font-bold text-xl text-blueGray-700">
                <img src={appIcon} alt="" width="28" height="28" className="mr-2 flex-shrink-0 object-contain" />
                Ringdy
              </Link>
              <h4 className="text-3xl font-semibold">{t('footer.keepInTouch')}</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                {t('footer.findUsOn')}
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  href="mailto:support@ringdy.com"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center inline-flex align-center rounded-full outline-none focus:outline-none mr-2"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <address className="not-italic text-sm text-blueGray-600 mt-2">
                <span className="block font-semibold">{COMPANY_NAME}</span>
                <span className="block">{t('footer.companyAddress')}</span>
              </address>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    {t('footer.usefulLinks')}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/features"
                      >
                        {t('navbar.features')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/subscription"
                      >
                        {t('navbar.subscription')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/download"
                      >
                        {t('navbar.download')}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    {t('footer.otherResources')}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/terms-of-use"
                      >
                        {t('footer.termsConditions')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/privacy-policy"
                      >
                        {t('footer.privacyPolicy')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/safety-tips"
                      >
                        {t('navbar.safetyTips')}
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="mailto:support@ringdy.com"
                      >
                        {t('footer.contactUs')}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                {t('footer.copyright', { year: new Date().getFullYear() })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
