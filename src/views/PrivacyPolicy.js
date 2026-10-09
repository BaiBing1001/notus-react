/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PrivacyPolicy() {
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
                "url('https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
                    <i className="fas fa-user-shield text-lightBlue-400 mr-4"></i>
                    {t('legal.privacyPolicy.title')}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {t('legal.privacyPolicy.subtitle')}
                  </p>
                  <p className="mt-2 text-md text-blueGray-300">
                    {t('legal.privacyPolicy.lastUpdated')}
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
                      <p className="mb-6 text-lg">
                        {t('legal.privacyPolicy.introduction')}
                      </p>
                      <p className="mb-8 text-lg">
                        {t('legal.privacyPolicy.agreement')}
                      </p>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-info-circle text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.sections.interpretationTitle')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.sections.interpretationSubtitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.interpretationText')}</p>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.sections.definitionsSubtitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.definitionsText')}</p>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.account')}</strong> {t('legal.privacyPolicy.sections.definitions.account')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.affiliate')}</strong> {t('legal.privacyPolicy.sections.definitions.affiliate')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.application')}</strong> {t('legal.privacyPolicy.sections.definitions.application')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.business')}</strong> {t('legal.privacyPolicy.sections.definitions.business')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.ccpaCpra')}</strong> {t('legal.privacyPolicy.sections.definitions.ccpaCpra')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.company')}</strong> {t('legal.privacyPolicy.sections.definitions.company')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.consumer')}</strong> {t('legal.privacyPolicy.sections.definitions.consumer')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.country')}</strong> {t('legal.privacyPolicy.sections.definitions.country')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.dataController')}</strong> {t('legal.privacyPolicy.sections.definitions.dataController')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.device')}</strong> {t('legal.privacyPolicy.sections.definitions.device')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.doNotTrack')}</strong> {t('legal.privacyPolicy.sections.definitions.doNotTrack')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.gdpr')}</strong> {t('legal.privacyPolicy.sections.definitions.gdpr')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.personalData')}</strong> {t('legal.privacyPolicy.sections.definitions.personalData')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.service')}</strong> {t('legal.privacyPolicy.sections.definitions.service')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.serviceProvider')}</strong> {t('legal.privacyPolicy.sections.definitions.serviceProvider')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.thirdPartySocialMedia')}</strong> {t('legal.privacyPolicy.sections.definitions.thirdPartySocialMedia')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.usageData')}</strong> {t('legal.privacyPolicy.sections.definitions.usageData')}</li>
                          <li><strong>{t('legal.privacyPolicy.sections.definitionLabels.you')}</strong> {t('legal.privacyPolicy.sections.definitions.you')}</li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-database text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.sections.dataCollectionTitle')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.sections.dataTypesTitle')}</h3>
                        
                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.sections.personalDataTitle')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.personalDataDescription')}</p>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                          <li>{t('legal.privacyPolicy.dataTypes.email')}</li>
                          <li>{t('legal.privacyPolicy.dataTypes.name')}</li>
                          <li>{t('legal.privacyPolicy.dataTypes.phone')}</li>
                          <li>{t('legal.privacyPolicy.dataTypes.address')}</li>
                          <li>{t('legal.privacyPolicy.dataTypes.usageData')}</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.sections.usageDataTitle')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.usageDataDescription1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.usageDataDescription2')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.sections.usageDataDescription3')}</p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.sections.thirdPartyTitle')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.thirdPartyDescription1')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          <li>{t('legal.privacyPolicy.socialMedia.google')}</li>
                          <li>{t('legal.privacyPolicy.socialMedia.facebook')}</li>
                          <li>{t('legal.privacyPolicy.socialMedia.apple')}</li>
                        </ul>
                        <p className="mb-6">{t('legal.privacyPolicy.sections.thirdPartyDescription2')}</p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.sections.appDataTitle')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.appDataDescription1')}</p>
                        
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          <li>{t('legal.privacyPolicy.appPermissions.location')}</li>
                          <li>{t('legal.privacyPolicy.appPermissions.bluetooth')}</li>
                          <li>{t('legal.privacyPolicy.appPermissions.camera')}</li>
                          <li>{t('legal.privacyPolicy.appPermissions.contacts')}</li>
                        </ul>

                        <p className="mb-6">{t('legal.privacyPolicy.sections.appDataDescription2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-cogs text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.sections.dataUseTitle')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.sections.dataUseDescription')}</p>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.privacyPolicy.dataUses.provide')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.account')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.contract')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.contact')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.offers')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.requests')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.content')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.business')}</li>
                          <li>{t('legal.privacyPolicy.dataUses.other')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.sections.sharingTitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.sections.sharingDescription')}</p>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.privacyPolicy.sharingTypes.providers')}</li>
                          <li>{t('legal.privacyPolicy.sharingTypes.transfers')}</li>
                          <li>{t('legal.privacyPolicy.sharingTypes.affiliates')}</li>
                          <li>{t('legal.privacyPolicy.sharingTypes.partners')}</li>
                          <li>{t('legal.privacyPolicy.sharingTypes.users')}</li>
                          <li>{t('legal.privacyPolicy.sharingTypes.consent')}</li>
                        </ul>

                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-clock text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.sections.retentionTitle')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.retention.description1')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.retention.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-globe text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.transfer.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.transfer.description1')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.transfer.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-trash text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.deletion.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.deletion.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.deletion.description2')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.deletion.description3')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-balance-scale text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.disclosure.title')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.disclosure.businessTitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.disclosure.businessDescription')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.disclosure.lawTitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.disclosure.lawDescription')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.disclosure.legalTitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.disclosure.legalDescription')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.privacyPolicy.disclosure.legalReasons.comply')}</li>
                          <li>{t('legal.privacyPolicy.disclosure.legalReasons.protect')}</li>
                          <li>{t('legal.privacyPolicy.disclosure.legalReasons.prevent')}</li>
                          <li>{t('legal.privacyPolicy.disclosure.legalReasons.safety')}</li>
                          <li>{t('legal.privacyPolicy.disclosure.legalReasons.liability')}</li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-shield-alt text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.security.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.privacyPolicy.security.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-chart-line text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.detailedInfo.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.privacyPolicy.detailedInfo.description')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.detailedInfo.analyticsTitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.detailedInfo.analyticsDescription')}</p>
                        
                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.analytics.googleAnalytics.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.analytics.googleAnalytics.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.analytics.googleAnalytics.description2')} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://policies.google.com/privacy</a></p>
                        <p className="mb-4">{t('legal.privacyPolicy.analytics.googleAnalytics.description3')} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://policies.google.com/privacy</a></p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.analytics.firebase.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.analytics.firebase.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.analytics.firebase.description2')} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://policies.google.com/privacy</a></p>
                        <p className="mb-4">{t('legal.privacyPolicy.analytics.firebase.description3')} <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://support.google.com/analytics/answer/6004245</a></p>
                        <p className="mb-6">{t('legal.privacyPolicy.analytics.firebase.description4')} <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://policies.google.com/technologies/partner-sites</a></p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.advertising.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.advertising.description')}</p>
                        
                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.advertising.googleAdSense.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.advertising.googleAdSense.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.advertising.googleAdSense.description2')} <a href="http://www.google.com/ads/preferences/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.google.com/ads/preferences/</a></p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.advertising.adMob.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.advertising.adMob.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.advertising.adMob.description2')} <a href="https://support.google.com/ads/answer/2662922?hl=en" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://support.google.com/ads/answer/2662922?hl=en</a></p>
                        <p className="mb-6">{t('legal.privacyPolicy.advertising.adMob.description3')} <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://policies.google.com/technologies/partner-sites</a> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://policies.google.com/privacy</a></p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.payments.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.payments.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.payments.description2')}</p>
                        
                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.payments.appleStore.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.payments.appleStore.description')} <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://www.apple.com/legal/privacy/en-ww/</a></p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.payments.googlePlay.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.payments.googlePlay.description')} <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://www.google.com/policies/privacy/</a></p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.payments.stripe.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.payments.stripe.description')} <a href="https://stripe.com/us/privacy" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://stripe.com/us/privacy</a></p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.payments.payPal.title')}</h4>
                        <p className="mb-6">{t('legal.privacyPolicy.payments.payPal.description')} <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://www.paypal.com/webapps/mpp/ua/privacy-full</a></p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-bullseye text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.behavioralRemarketing.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.privacyPolicy.behavioralRemarketing.description')}</p>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.vendorsDescription1')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          <li>{t('legal.privacyPolicy.behavioralRemarketing.purposes.measure')}</li>
                          <li>{t('legal.privacyPolicy.behavioralRemarketing.purposes.show')}</li>
                          <li>{t('legal.privacyPolicy.behavioralRemarketing.purposes.analyze')}</li>
                        </ul>

                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.vendorsDescription2')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>{t('legal.privacyPolicy.behavioralRemarketing.optOutTools.nai')} <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.networkadvertising.org/choices/</a></li>
                          <li>{t('legal.privacyPolicy.behavioralRemarketing.optOutTools.edaa')} <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.youronlinechoices.com/</a></li>
                          <li>{t('legal.privacyPolicy.behavioralRemarketing.optOutTools.daa')} <a href="http://optout.aboutads.info/?c=2&lang=EN" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://optout.aboutads.info/?c=2&lang=EN</a></li>
                        </ul>

                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.mobileOptOut')}</p>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.dataSharing')}</p>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.vendorsIntro')}</p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.behavioralRemarketing.googleAds.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.googleAds.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.googleAds.description2')} <a href="http://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.google.com/settings/ads</a></p>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.googleAds.description3')} <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://tools.google.com/dlpage/gaoptout</a></p>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.googleAds.description4')} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://policies.google.com/privacy</a></p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.behavioralRemarketing.facebook.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.facebook.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.facebook.description2')} <a href="https://www.facebook.com/help/516147308587266" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://www.facebook.com/help/516147308587266</a></p>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.facebook.description3')} <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://www.facebook.com/help/568137493302217</a></p>
                        <p className="mb-4">{t('legal.privacyPolicy.behavioralRemarketing.facebook.description4')} <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.aboutads.info/choices/</a>, <a href="http://youradchoices.ca/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://youradchoices.ca/</a>, <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.youronlinechoices.eu/</a></p>
                        <p className="mb-6">{t('legal.privacyPolicy.behavioralRemarketing.facebook.description5')} <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">https://www.facebook.com/privacy/explanation</a></p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-gavel text-blue-500 mr-2"></i>
                          {t('legal.privacyPolicy.gdpr.title')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.gdpr.legalBasis.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.gdpr.legalBasis.description')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.privacyPolicy.gdpr.legalBasis.consent')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.legalBasis.contract')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.legalBasis.legal')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.legalBasis.vital')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.legalBasis.public')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.legalBasis.legitimate')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.gdpr.rights.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.gdpr.rights.description')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.privacyPolicy.gdpr.rights.access')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.rights.correction')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.rights.object')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.rights.erasure')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.rights.transfer')}</li>
                          <li>{t('legal.privacyPolicy.gdpr.rights.withdraw')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.gdpr.exercising.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.gdpr.exercising.description1')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.gdpr.exercising.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-flag-usa text-red-500 mr-2"></i>
                          {t('legal.privacyPolicy.ccpa.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.introduction')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.categoriesTitle')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.categoriesDescription1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.categoriesDescription2')}</p>

                        <div className="mb-6 space-y-4">
                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.identifiers.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.identifiers.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-green-600">{t('legal.privacyPolicy.ccpa.categories.identifiers.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.personalInfo.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.personalInfo.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-green-600">{t('legal.privacyPolicy.ccpa.categories.personalInfo.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.protected.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.protected.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-red-600">{t('legal.privacyPolicy.ccpa.categories.protected.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.commercial.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.commercial.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-green-600">{t('legal.privacyPolicy.ccpa.categories.commercial.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.biometric.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.biometric.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-red-600">{t('legal.privacyPolicy.ccpa.categories.biometric.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.internet.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.internet.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-green-600">{t('legal.privacyPolicy.ccpa.categories.internet.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.geolocation.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.geolocation.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-green-600">{t('legal.privacyPolicy.ccpa.categories.geolocation.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.sensory.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.sensory.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-red-600">{t('legal.privacyPolicy.ccpa.categories.sensory.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.professional.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.professional.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-red-600">{t('legal.privacyPolicy.ccpa.categories.professional.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.education.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.education.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-red-600">{t('legal.privacyPolicy.ccpa.categories.education.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.inferences.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.inferences.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-red-600">{t('legal.privacyPolicy.ccpa.categories.inferences.collected')}</span></p>
                          </div>

                          <div className="bg-blueGray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blueGray-700 mb-2">{t('legal.privacyPolicy.ccpa.categories.sensitive.title')}</h4>
                            <p className="text-sm mb-2"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.examples')}</strong> {t('legal.privacyPolicy.ccpa.categories.sensitive.examples')}</p>
                            <p className="text-sm"><strong>{t('legal.privacyPolicy.ccpa.categoryLabels.collected')}</strong> <span className="text-green-600">{t('legal.privacyPolicy.ccpa.categories.sensitive.collected')}</span></p>
                          </div>
                        </div>

                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.exclusions.description')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                          <li>{t('legal.privacyPolicy.ccpa.exclusions.publicRecords')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.exclusions.deidentified')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.exclusions.excludedScope')}
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>{t('legal.privacyPolicy.ccpa.exclusions.hipaa')}</li>
                              <li>{t('legal.privacyPolicy.ccpa.exclusions.sectorSpecific')}</li>
                            </ul>
                          </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.sources.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.sources.description')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li><strong>{t('legal.privacyPolicy.ccpa.sources.directlyFromYou')}</strong> {t('legal.privacyPolicy.ccpa.sources.directlyDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.sources.indirectlyFromYou')}</strong> {t('legal.privacyPolicy.ccpa.sources.indirectlyDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.sources.automaticallyFromYou')}</strong> {t('legal.privacyPolicy.ccpa.sources.automaticallyDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.sources.fromServiceProviders')}</strong> {t('legal.privacyPolicy.ccpa.sources.serviceProvidersDescription')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.usage.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.usage.description')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>{t('legal.privacyPolicy.ccpa.usage.operateService')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.usage.provideSupport')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.usage.fulfillReason')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.usage.lawEnforcement')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.usage.asDescribed')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.usage.administrative')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.usage.securityIncidents')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.usage.otherUses')}</li>
                        </ul>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.usage.noteExamples')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.usage.additionalCategories')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.ccpaDisclosure.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.ccpaDisclosure.description')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          <li>{t('legal.privacyPolicy.ccpa.ccpaDisclosure.categoryA')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.ccpaDisclosure.categoryB')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.ccpaDisclosure.categoryD')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.ccpaDisclosure.categoryF')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.ccpaDisclosure.categoryG')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.ccpaDisclosure.categoryL')}</li>
                        </ul>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.ccpaDisclosure.noteCategories')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.ccpaDisclosure.contractRequirement')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.sharing.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.sharing.description')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                          <li>{t('legal.privacyPolicy.ccpa.sharing.recipients.serviceProviders')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sharing.recipients.paymentProcessors')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sharing.recipients.affiliates')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sharing.recipients.businessPartners')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sharing.recipients.authorizedVendors')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.sale.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.sale.definition')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.sale.doNotSell')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.sale.description')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          <li>{t('legal.privacyPolicy.ccpa.sale.sharedCategories.categoryA')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sale.sharedCategories.categoryB')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sale.sharedCategories.categoryD')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sale.sharedCategories.categoryF')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sale.sharedCategories.categoryG')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.sale.sharedCategories.categoryL')}</li>
                        </ul>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.saleNote.categoriesListed')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.minorsUnder16.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.minorsUnder16.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.minorsUnder16.description2')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.minorsUnder16.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.userRights.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.userRights.description')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3">
                          <li><strong>{t('legal.privacyPolicy.ccpa.userRights.rightToNotice')}</strong> {t('legal.privacyPolicy.ccpa.userRights.rightToNoticeDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.rights.rightToKnowAccess')}</strong> {t('legal.privacyPolicy.ccpa.rights.rightToKnowAccessDescription')}
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>{t('legal.privacyPolicy.ccpa.userRights.disclosureItems.categoriesCollected')}</li>
                              <li>{t('legal.privacyPolicy.ccpa.userRights.disclosureItems.sources')}</li>
                              <li>{t('legal.privacyPolicy.ccpa.userRights.disclosureItems.purposes')}</li>
                              <li>{t('legal.privacyPolicy.ccpa.userRights.disclosureItems.thirdParties')}</li>
                              <li>{t('legal.privacyPolicy.ccpa.userRights.disclosureItems.specificPieces')}</li>
                              <li>{t('legal.privacyPolicy.ccpa.userRights.disclosureItems.soldDisclosed')}</li>
                            </ul>
                          </li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.userRights.rightToOptOut')}</strong> {t('legal.privacyPolicy.ccpa.userRights.rightToOptOutDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.userRights.rightToCorrect')}</strong> {t('legal.privacyPolicy.ccpa.userRights.rightToCorrectDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.userRights.rightToLimit')}</strong> {t('legal.privacyPolicy.ccpa.userRights.rightToLimitDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.userRights.rightToDelete')}</strong> {t('legal.privacyPolicy.ccpa.userRights.rightToDeleteDescription')}</li>
                          <li><strong>{t('legal.privacyPolicy.ccpa.userRights.rightNonDiscrimination')}</strong> {t('legal.privacyPolicy.ccpa.userRights.rightNonDiscriminationDescription')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.exercisingRights.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.exercisingRights.intro')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.exercisingRights.authorization')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.exercisingRights.requestRequirements')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.privacyPolicy.ccpa.exercisingRights.requirements.verify')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.exercisingRights.requirements.describe')}</li>
                        </ul>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.exercisingRights.verification')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.exercisingRights.response')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.exercisingRights.dataPortability')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.doNotSell.title')}</h3>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.doNotSell.definition')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.doNotSell.policy')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.doNotSell.optOutRight')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.doNotSell.serviceProviders')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.doNotSell.browserNote')}</p>
                        
                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.ccpa.doNotSell.websiteTitle')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.doNotSell.websiteInstructions')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.optOutPlatforms.description')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>{t('legal.privacyPolicy.ccpa.optOutPlatforms.nai')} <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.networkadvertising.org/choices/</a></li>
                          <li>{t('legal.privacyPolicy.ccpa.optOutPlatforms.edaa')} <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://www.youronlinechoices.com/</a></li>
                          <li>{t('legal.privacyPolicy.ccpa.optOutPlatforms.daa')} <a href="http://optout.aboutads.info/?c=2&lang=EN" target="_blank" rel="noopener noreferrer" className="text-lightBlue-500 hover:text-lightBlue-600">http://optout.aboutads.info/?c=2&lang=EN</a></li>
                        </ul>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.optOutPlatforms.cookieNote')}</p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-2">{t('legal.privacyPolicy.ccpa.mobileOptOut.title')}</h4>
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.mobileOptOut.description')}</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          <li>{t('legal.privacyPolicy.ccpa.mobileOptOut.androidAds')}</li>
                          <li>{t('legal.privacyPolicy.ccpa.mobileOptOut.iosTracking')}</li>
                        </ul>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.mobileOptOut.locationNote')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.privacyPolicy.ccpa.sensitiveInfo.title')}</h3>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.sensitiveInfo.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-eye-slash text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.ccpa.caloppa.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.ccpa.caloppaPolicy.doNotTrackResponse')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.ccpa.caloppaPolicy.thirdPartyTracking')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-sun text-yellow-500 mr-2"></i>
                          {t('legal.privacyPolicy.shineTheLight.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.shineTheLight.description1')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.shineTheLight.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-child text-purple-500 mr-2"></i>
                          {t('legal.privacyPolicy.minorUsers.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.minorUsers.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.minorUsers.description2')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.minorUsers.description3')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-child text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.childrenPrivacy.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.childrenPrivacy.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.childrenPrivacy.description2')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.childrenPrivacy.description3')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-link text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.linksToOtherWebsites.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.privacyPolicy.linksToOtherWebsites.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-edit text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.changes.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.changes.description1')}</p>
                        <p className="mb-4">{t('legal.privacyPolicy.changes.description2')}</p>
                        <p className="mb-6">{t('legal.privacyPolicy.changes.description3')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-envelope text-lightBlue-500 mr-2"></i>
                          {t('legal.privacyPolicy.contact.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.privacyPolicy.contact.description')}</p>
                        <ul className="list-disc pl-6 mb-6">
                          <li>{t('legal.privacyPolicy.contact.email')}</li>
                          <li>{t('legal.privacyPolicy.contact.website')}</li>
                          <li>{t('legal.privacyPolicy.contact.mail')}</li>
                        </ul>
                      </div>

                      <div className="text-center mt-12">
                        <Link
                          to="/"
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          <i className="fas fa-home mr-2"></i>
                          {t('legal.privacyPolicy.backToHome')}
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
