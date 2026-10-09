/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function SafetyTips() {
  const { t } = useTranslation();
  
  return (
    <>
      <AuthNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
                    <i className="fas fa-exclamation-triangle text-orange-400 mr-4"></i>
                    {t('safety.title')}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {t('safety.subtitle')}
                  </p>
                  <p className="mt-2 text-md text-blueGray-300">
                    {t('safety.lastUpdated')}
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
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-10">

                    <div className="text-blueGray-600 leading-relaxed">
                      
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                          {t('safety.commitment.title')}
                        </h2>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('safety.commitment.items.privacy')}</li>
                          <li>{t('safety.commitment.items.noStorage')}</li>
                          <li>{t('safety.commitment.items.tools')}</li>
                          <li>{t('safety.commitment.items.ageLimit')}</li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          {t('safety.respectfulBehavior.title')}
                        </h2>
                        
                        <p className="mb-4 font-semibold">{t('safety.respectfulBehavior.expectation')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('safety.respectfulBehavior.items.kind')}</li>
                          <li>{t('safety.respectfulBehavior.items.language')}</li>
                          <li>{t('safety.respectfulBehavior.items.laws')}</li>
                          <li>{t('safety.respectfulBehavior.items.genuine')}</li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-ban text-red-500 mr-2"></i>
                          {t('safety.prohibitedConduct.title')}
                        </h2>
                        
                        <div className="bg-red-50 p-4 rounded-lg mb-4">
                          <p className="text-red-700 font-semibold mb-3">{t('safety.prohibitedConduct.warning')}</p>
                        </div>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('safety.prohibitedConduct.items.harassment')}</li>
                          <li>{t('safety.prohibitedConduct.items.hateful')}</li>
                          <li>{t('safety.prohibitedConduct.items.impersonation')}</li>
                          <li>{t('safety.prohibitedConduct.items.personalData')}</li>
                          <li>{t('safety.prohibitedConduct.items.explicit')}</li>
                          <li>{t('safety.prohibitedConduct.items.scamming')}</li>
                          <li>{t('safety.prohibitedConduct.items.offPlatform')}</li>
                          <li>{t('safety.prohibitedConduct.items.tracking')}</li>
                        </ul>
                        
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <p className="text-orange-700 font-semibold">
                            <i className="fas fa-exclamation-triangle mr-2"></i>
                            {t('safety.prohibitedConduct.consequence')}
                          </p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-brain text-purple-500 mr-2"></i>
                          {t('safety.commonSense.title')}
                        </h2>
                        
                        <p className="mb-4 font-semibold">{t('safety.commonSense.intro')}</p>
                        
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-blueGray-600 mb-3 flex items-center">
                            <i className="fas fa-comments text-lightBlue-500 mr-2"></i>
                            {t('safety.commonSense.chatting.title')}
                          </h3>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>{t('safety.commonSense.chatting.items.noPersonalInfo')}</li>
                            <li>{t('safety.commonSense.chatting.items.cautious')}</li>
                            <li>{t('safety.commonSense.chatting.items.noPressure')}</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-blueGray-600 mb-3 flex items-center">
                            <i className="fas fa-flag text-red-500 mr-2"></i>
                            {t('safety.commonSense.redFlags.title')}
                          </h3>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>{t('safety.commonSense.redFlags.items.quickLove')}</li>
                            <li>{t('safety.commonSense.redFlags.items.moneyRequests')}</li>
                            <li>{t('safety.commonSense.redFlags.items.strangeLinks')}</li>
                            <li>{t('safety.commonSense.redFlags.items.emergencyStories')}</li>
                          </ul>
                          
                          <div className="bg-red-50 p-4 rounded-lg">
                            <p className="text-red-700 font-semibold">
                              <i className="fas fa-exclamation-triangle mr-2"></i>
                              {t('safety.commonSense.redFlags.advice')}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-emergency text-red-500 mr-2"></i>
                          {t('safety.reportBlock.title')}
                        </h2>
                        
                        <p className="mb-4 font-semibold">{t('safety.reportBlock.intro')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>{t('safety.reportBlock.reasons.uncomfortable')}</li>
                          <li>{t('safety.reportBlock.reasons.violates')}</li>
                          <li>{t('safety.reportBlock.reasons.suspicious')}</li>
                        </ul>
                        
                        <div className="bg-lightBlue-50 p-4 rounded-lg mb-4">
                          <p className="text-lightBlue-700 font-semibold">
                            <i className="fas fa-shield-alt mr-2"></i>
                            {t('safety.reportBlock.instruction')}
                          </p>
                        </div>
                        
                        <p className="text-blueGray-600 font-medium">{t('safety.reportBlock.anonymity')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-globe text-blue-500 mr-2"></i>
                          {t('safety.meetingInPerson.title')}
                        </h2>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                          <p className="text-yellow-700 font-semibold">
                            {t('safety.meetingInPerson.disclaimer')}
                          </p>
                        </div>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('safety.meetingInPerson.safetyTips.publicPlaces')}</li>
                          <li>{t('safety.meetingInPerson.safetyTips.tellFriend')}</li>
                          <li>{t('safety.meetingInPerson.safetyTips.shareLocation')}</li>
                          <li>{t('safety.meetingInPerson.safetyTips.noRides')}</li>
                          <li>{t('safety.meetingInPerson.safetyTips.staySober')}</li>
                          <li>{t('safety.meetingInPerson.safetyTips.chargePhone')}</li>
                          <li>{t('safety.meetingInPerson.safetyTips.ownTransport')}</li>
                        </ul>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-green-700 font-semibold">
                            <i className="fas fa-info-circle mr-2"></i>
                            {t('safety.meetingInPerson.reminder')}
                          </p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-gavel text-indigo-500 mr-2"></i>
                          {t('safety.enforcement.title')}
                        </h2>
                        
                        <p className="mb-4 font-semibold">{t('safety.enforcement.intro')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('safety.enforcement.actions.suspend')}</li>
                          <li>{t('safety.enforcement.actions.ban')}</li>
                          <li>{t('safety.enforcement.actions.lawEnforcement')}</li>
                          <li>{t('safety.enforcement.actions.verification')}</li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-hands-helping text-purple-500 mr-2"></i>
                          {t('safety.appeals.title')}
                        </h2>
                        
                        <p className="mb-4">{t('safety.appeals.intro')}</p>
                        <div className="bg-blueGray-50 p-4 rounded-lg mb-6">
                          <p className="text-blueGray-700 font-semibold">
                            <i className="fas fa-envelope mr-2"></i>
                            {t('safety.appeals.contact.email')}
                          </p>
                          <p className="text-blueGray-700 font-semibold mt-2">
                            <i className="fas fa-globe mr-2"></i>
                            {t('safety.appeals.contact.website')}
                          </p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-compass text-teal-500 mr-2"></i>
                          {t('safety.finalThoughts.title')}
                        </h2>
                        
                        <div className="bg-gradient-to-r from-lightBlue-50 to-purple-50 p-6 rounded-lg">
                          <p className="text-blueGray-700 font-semibold text-lg leading-relaxed">
                            {t('safety.finalThoughts.message')}
                          </p>
                        </div>
                      </div>

                      <div className="text-center mt-12">
                        <Link
                          to="/"
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                        >
                          <i className="fas fa-home mr-2"></i>
                          {t('safety.navigation.backToHome')}
                        </Link>
                        <Link
                          to="/download"
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          <i className="fas fa-download mr-2"></i>
                          {t('safety.navigation.downloadApp')}
                        </Link>
                      </div>
                    </div>
                  </div>
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
