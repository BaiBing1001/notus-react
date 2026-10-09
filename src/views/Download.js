import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import appIcon from "assets/img/icon.png";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Download() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
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
                  <h1 className="text-white font-semibold text-5xl flex flex-wrap items-center justify-center gap-4">
                    <img src={appIcon} alt="" width="80" height="80" className="flex-shrink-0 object-contain" />
                    <span>{t('download.title')}</span>
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {t('download.subtitle')}
                  </p>
                  <div className="mt-12 flex justify-center gap-8 flex-wrap sm:flex-nowrap">
                    {/* Google Play Store */}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.baibing.spot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="attention-action bg-black text-white font-bold px-6 py-4 mr-4 rounded-lg shadow-lg hover:shadow-xl outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center mb-4 sm:mb-0"
                    >
                      <i className="fab fa-google-play text-2xl mr-3"></i>
                      <div className="text-left">
                        <div className="text-xs">{t('download.getItOn')}</div>
                        <div className="text-lg font-bold">{t('download.googlePlay')}</div>
                      </div>
                    </a>
                    
                    {/* Apple App Store — TODO: replace with the real App Store listing URL once published */}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="attention-action bg-black text-white font-bold px-6 py-4 ml-4 rounded-lg shadow-lg hover:shadow-xl outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center mb-4 sm:mb-0"
                    >
                      <i className="fab fa-apple text-2xl mr-3"></i>
                      <div className="text-left">
                        <div className="text-xs">{t('download.downloadOn')}</div>
                        <div className="text-lg font-bold">{t('download.appStore')}</div>
                      </div>
                    </a>
                  </div>
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
            <div className="flex flex-wrap justify-center text-center mb-16">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-4xl font-semibold pt-12">{t('download.whatYouGet')}</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  {t('download.subtitle')}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap">
              {/* Android Section */}
              <div className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blueGray-800">
                      <i className="fab fa-android text-2xl"></i>
                    </div>
                    <h6 className="text-2xl font-semibold mb-4">{t('download.android.title')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {t('download.android.description')}
                    </p>
                    <div className="text-left mt-6">
                      <h6 className="text-lg font-semibold mb-2">{t('download.android.featuresTitle')}</h6>
                      <ul className="list-none">
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.android.features.bluetooth')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.android.features.background')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.android.features.notifications')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.android.features.offline')}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8 mb-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.baibing.spot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="attention-action bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                      >
                        <i className="fab fa-google-play mr-2"></i>
                        {t('download.android.downloadButton')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* iOS Section */}
              <div className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blueGray-800">
                      <i className="fab fa-apple text-2xl"></i>
                    </div>
                    <h6 className="text-2xl font-semibold mb-4">{t('download.ios.title')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {t('download.ios.description')}
                    </p>
                    <div className="text-left mt-6">
                      <h6 className="text-lg font-semibold mb-2">{t('download.ios.featuresTitle')}</h6>
                      <ul className="list-none">
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.ios.features.bluetooth')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.ios.features.background')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.ios.features.privacy')}</span>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 mr-3">
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="text-sm text-blueGray-500">{t('download.ios.features.universal')}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8 mb-4">
                      {/* TODO: replace with the real App Store listing URL once published */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="attention-action bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                      >
                        <i className="fab fa-apple mr-2"></i>
                        {t('download.ios.downloadButton')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Requirements */}
            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-mobile-alt text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {t('download.requirements')}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {t('download.systemDescription')}
                </p>
                <div className="mt-6">
                  <div className="mb-4">
                    <h6 className="text-lg font-semibold">{t('download.androidRequirements')}</h6>
                    <ul className="list-disc list-inside text-blueGray-600 mt-2">
                      <li>{t('download.androidReq1')}</li>
                      <li>{t('download.androidReq2')}</li>
                      <li>{t('download.androidReq3')}</li>
                      <li>{t('download.androidReq4')}</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-lg font-semibold">{t('download.iosRequirements')}</h6>
                    <ul className="list-disc list-inside text-blueGray-600 mt-2">
                      <li>{t('download.iosReq1')}</li>
                      <li>{t('download.iosReq2')}</li>
                      <li>{t('download.iosReq3')}</li>
                      <li>{t('download.iosReq4')}</li>
                    </ul>
                  </div>
                </div>
                <Link to="/features" className="font-bold text-blueGray-700 mt-8">
                  {t('download.learnMoreFeatures')}
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="Mobile phones showing the Ringdy app"
                    src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
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
                      {t('download.crossPlatformTitle')}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {t('download.crossPlatformCompatibilityDesc')}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
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
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 text-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-semibold mb-4">{t('download.qrCode.title')}</h4>
                  <p className="text-blueGray-500 mb-6">
                    {t('download.qrCode.description')}
                  </p>
                  {/* Placeholder for QR code - you can replace with actual QR code */}
                  <div className="w-48 h-48 mx-auto bg-blueGray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <i className="fas fa-qrcode text-6xl text-blueGray-400 mb-2"></i>
                      <p className="text-sm text-blueGray-500">{t('download.qrCode.placeholder')}</p>
                    </div>
                  </div>
                  <p className="text-xs text-blueGray-400">
                    {t('download.qrCode.instruction')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-download text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">{t('download.installation.title')}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {t('download.installation.description')}
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            1
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            {t('download.installation.step1')}
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            2
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            {t('download.installation.step2')}
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            3
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            {t('download.installation.step3')}
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pb-20 relative block bg-blueGray-800">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  {t('download.callToAction.title')}
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  {t('download.callToAction.description')}
                </p>
                <div className="mt-8 flex justify-center gap-6 flex-wrap">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="attention-action bg-white text-blueGray active:bg-green-600 font-bold uppercase text-sm px-6 py-3 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  >
                    <i className="fab fa-google-play mr-2"></i>
                    {t('download.callToAction.googlePlay')}
                  </a>
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="attention-action bg-white text-blueGray active:bg-blueGray-400 font-bold uppercase text-sm px-6 py-3 ml-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  >
                    <i className="fab fa-apple mr-2"></i>
                    {t('download.callToAction.appStore')}
                  </a>
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
