/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function TermsOfUse() {
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
                "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
                    <i className="fas fa-file-contract text-lightBlue-400 mr-4"></i>
                    {t('legal.termsOfUse.title')}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {t('legal.termsOfUse.subtitle')}
                  </p>
                  <p className="mt-2 text-md text-blueGray-300">
                    {t('legal.termsOfUse.lastUpdated')}
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
                      <p className="mb-8 text-lg">
                        {t('legal.termsOfUse.introduction')}
                      </p>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-info-circle text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.sections.interpretationTitle')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.sections.interpretationSubtitle')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.sections.interpretationText')}</p>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.sections.definitionsSubtitle')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.sections.definitionsText')}</p>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.application')}</strong> {t('legal.termsOfUse.sections.definitions.application')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.applicationStore')}</strong> {t('legal.termsOfUse.sections.definitions.applicationStore')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.affiliate')}</strong> {t('legal.termsOfUse.sections.definitions.affiliate')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.account')}</strong> {t('legal.termsOfUse.sections.definitions.account')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.country')}</strong> {t('legal.termsOfUse.sections.definitions.country')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.company')}</strong> {t('legal.termsOfUse.sections.definitions.company')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.content')}</strong> {t('legal.termsOfUse.sections.definitions.content')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.device')}</strong> {t('legal.termsOfUse.sections.definitions.device')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.feedback')}</strong> {t('legal.termsOfUse.sections.definitions.feedback')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.freeTrial')}</strong> {t('legal.termsOfUse.sections.definitions.freeTrial')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.goods')}</strong> {t('legal.termsOfUse.sections.definitions.goods')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.inAppPurchase')}</strong> {t('legal.termsOfUse.sections.definitions.inAppPurchase')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.orders')}</strong> {t('legal.termsOfUse.sections.definitions.orders')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.promotions')}</strong> {t('legal.termsOfUse.sections.definitions.promotions')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.service')}</strong> {t('legal.termsOfUse.sections.definitions.service')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.subscriptions')}</strong> {t('legal.termsOfUse.sections.definitions.subscriptions')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.termsAndConditions')}</strong> {t('legal.termsOfUse.sections.definitions.termsAndConditions')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.thirdPartySocialMedia')}</strong> {t('legal.termsOfUse.sections.definitions.thirdPartySocialMedia')}</li>
                          <li><strong>{t('legal.termsOfUse.sections.definitionLabels.you')}</strong> {t('legal.termsOfUse.sections.definitions.you')}</li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-handshake text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.acknowledgment.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.acknowledgment.description1')}</p>
                        
                        <p className="mb-4">{t('legal.termsOfUse.acknowledgment.description2')}</p>
                        
                        <p className="mb-4">{t('legal.termsOfUse.acknowledgment.description3')}</p>
                        
                        <p className="mb-4">{t('legal.termsOfUse.acknowledgment.description4')}</p>
                        
                        <p className="mb-4">{t('legal.termsOfUse.acknowledgment.description5')}</p>
                        
                        <div className="bg-lightBlue-50 p-4 rounded-lg mb-6">
                          <p className="text-lightBlue-700 font-semibold">
                            <i className="fas fa-bluetooth-b mr-2"></i>
                            <strong>{t('legal.termsOfUse.acknowledgment.bluetoothTitle')}:</strong> {t('legal.termsOfUse.acknowledgment.bluetoothNotice')}
                          </p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-shopping-bag text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.orders.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.termsOfUse.orders.introduction')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.orders.yourInformation.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.orders.yourInformation.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.orders.yourInformation.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.orders.yourInformation.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.orders.cancellation.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.orders.cancellation.description1')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                          <li>{t('legal.termsOfUse.orders.cancellation.reasons.availability')}</li>
                          <li>{t('legal.termsOfUse.orders.cancellation.reasons.errors')}</li>
                          <li>{t('legal.termsOfUse.orders.cancellation.reasons.orderErrors')}</li>
                        </ul>
                        <p className="mb-6">{t('legal.termsOfUse.orders.cancellation.description2')}</p>

                        <h4 className="text-lg font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.orders.cancellation.yourRights.title')}</h4>
                        <p className="mb-4">{t('legal.termsOfUse.orders.cancellation.yourRights.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.orders.cancellation.yourRights.description2')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.orders.cancellation.yourRights.description3')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.orders.cancellation.yourRights.description4')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.orders.cancellation.yourRights.description5')}</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.termsOfUse.orders.cancellation.yourRights.exceptions.personalized')}</li>
                          <li>{t('legal.termsOfUse.orders.cancellation.yourRights.exceptions.perishable')}</li>
                          <li>{t('legal.termsOfUse.orders.cancellation.yourRights.exceptions.hygiene')}</li>
                          <li>{t('legal.termsOfUse.orders.cancellation.yourRights.exceptions.mixed')}</li>
                          <li>{t('legal.termsOfUse.orders.cancellation.yourRights.exceptions.digital')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.orders.availability.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.orders.availability.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.orders.availability.description2')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.orders.pricing.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.orders.pricing.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.orders.pricing.description2')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.orders.payments.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.orders.payments.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.orders.payments.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-crown text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.subscriptions.title')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.subscriptions.period.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.period.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.subscriptions.period.description2')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.subscriptions.cancellations.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.cancellations.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.subscriptions.cancellations.description2')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.subscriptions.billing.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.billing.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.billing.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.subscriptions.billing.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.subscriptions.feeChanges.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.feeChanges.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.feeChanges.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.subscriptions.feeChanges.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.subscriptions.refunds.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.refunds.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.refunds.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.subscriptions.refunds.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.subscriptions.freeTrial.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.freeTrial.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.freeTrial.description2')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.subscriptions.freeTrial.description3')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.subscriptions.freeTrial.description4')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-shopping-cart text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.inAppPurchases.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.inAppPurchases.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.inAppPurchases.description2')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.inAppPurchases.description3')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.inAppPurchases.description4')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-trophy text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.promotions.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.promotions.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.promotions.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-user-circle text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.userAccounts.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.userAccounts.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.userAccounts.description2')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.userAccounts.description3')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.userAccounts.description4')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-shield-alt text-orange-500 mr-2"></i>
                          {t('legal.termsOfUse.userConduct.title')}
                        </h2>
                        
                        <div className="bg-orange-50 p-4 rounded-lg mb-4">
                          <p className="text-orange-700 font-semibold mb-3">{t('legal.termsOfUse.userConduct.zeroTolerance.title')}</p>
                          <p className="text-orange-700">{t('legal.termsOfUse.userConduct.zeroTolerance.description')}</p>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                          <p className="text-yellow-700 font-semibold mb-3">
                            <i className="fas fa-exclamation-triangle mr-2"></i>
                            {t('legal.termsOfUse.userConduct.safetyDisclaimer.title')}
                          </p>
                          <p className="text-yellow-700">{t('legal.termsOfUse.userConduct.safetyDisclaimer.description')}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-edit text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.content.title')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.content.yourRight.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.content.yourRight.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.content.yourRight.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.content.yourRight.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.content.restrictions.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.content.restrictions.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.content.restrictions.description2')}</p>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.unlawful')}</li>
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.discriminatory')}</li>
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.spam')}</li>
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.malware')}</li>
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.infringing')}</li>
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.impersonating')}</li>
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.privacy')}</li>
                          <li>{t('legal.termsOfUse.content.restrictions.prohibitedContent.false')}</li>
                        </ul>

                        <p className="mb-6">{t('legal.termsOfUse.content.restrictions.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.content.backups.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.content.backups.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.content.backups.description2')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.content.backups.description3')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.content.backups.description4')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-copyright text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.copyright.title')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.copyright.intellectualProperty.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.copyright.intellectualProperty.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.copyright.intellectualProperty.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.copyright.intellectualProperty.description3')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.copyright.dmca.title')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.copyright.dmca.description')}</p>
                        
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                          <li>{t('legal.termsOfUse.copyright.dmca.requirements.signature')}</li>
                          <li>{t('legal.termsOfUse.copyright.dmca.requirements.description')}</li>
                          <li>{t('legal.termsOfUse.copyright.dmca.requirements.identification')}</li>
                          <li>{t('legal.termsOfUse.copyright.dmca.requirements.contact')}</li>
                          <li>{t('legal.termsOfUse.copyright.dmca.requirements.goodFaith')}</li>
                          <li>{t('legal.termsOfUse.copyright.dmca.requirements.accuracy')}</li>
                        </ul>
                      <p className="mb-4">{t('legal.termsOfUse.copyright.dmca.contact')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-trademark text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.intellectualProperty.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.intellectualProperty.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.intellectualProperty.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.intellectualProperty.description3')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-comments text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.feedback.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.termsOfUse.feedback.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-external-link-alt text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.links.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.links.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.links.description2')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.links.description3')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-ban text-red-500 mr-2"></i>
                          {t('legal.termsOfUse.termination.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.termination.description1')}</p>
                        <p className="mb-4">{t('legal.termsOfUse.termination.description2')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.termination.dataDeletion.title')}</h3>
                        <p className="mb-6">{t('legal.termsOfUse.termination.dataDeletion.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-exclamation-triangle text-orange-500 mr-2"></i>
                          {t('legal.termsOfUse.liability.title')}
                        </h2>
                        
                        <div className="bg-orange-50 p-4 rounded-lg mb-4">
                          <p className="text-orange-700 font-semibold mb-3">{t('legal.termsOfUse.liability.importantNotice')}</p>
                          <p className="text-orange-700">{t('legal.termsOfUse.liability.notice')}</p>
                        </div>
                        
                        <p className="mb-4">{t('legal.termsOfUse.liability.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.liability.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-info-circle text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.disclaimer.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.disclaimer.description1')}</p>
                        
                        <p className="mb-4">{t('legal.termsOfUse.disclaimer.description2')}</p>
                        
                        <p className="mb-4">{t('legal.termsOfUse.disclaimer.description3')}</p>
                        
                        <p className="mb-6">{t('legal.termsOfUse.disclaimer.description4')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-gavel text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.governingLaw.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.termsOfUse.governingLaw.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-handshake text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.disputes.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.termsOfUse.disputes.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-flag text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.euUsers.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.termsOfUse.euUsers.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-flag-usa text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.usLegal.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.termsOfUse.usLegal.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-balance-scale text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.severability.title')}
                        </h2>
                        
                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.severability.severabilityTitle')}</h3>
                        <p className="mb-4">{t('legal.termsOfUse.severability.severabilityDescription')}</p>

                        <h3 className="text-xl font-semibold text-blueGray-600 mb-3">{t('legal.termsOfUse.severability.waiverTitle')}</h3>
                        <p className="mb-6">{t('legal.termsOfUse.severability.waiverDescription')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-language text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.translation.title')}
                        </h2>
                        
                        <p className="mb-6">{t('legal.termsOfUse.translation.description')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-edit text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.changes.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.changes.description1')}</p>
                        <p className="mb-6">{t('legal.termsOfUse.changes.description2')}</p>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blueGray-700 mb-4">
                          <i className="fas fa-envelope text-lightBlue-500 mr-2"></i>
                          {t('legal.termsOfUse.contact.title')}
                        </h2>
                        
                        <p className="mb-4">{t('legal.termsOfUse.contact.description')}</p>
                        <ul className="list-disc pl-6 mb-6">
                          <li>{t('legal.termsOfUse.contact.email')}</li>
                          <li>{t('legal.termsOfUse.contact.support')}</li>
                          <li>{t('legal.termsOfUse.contact.website')}</li>
                        </ul>
                      </div>

                      <div className="text-center mt-12">
                        <Link
                          to="/"
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                        >
                          <i className="fas fa-home mr-2"></i>
                          {t('legal.termsOfUse.backToHome')}
                        </Link>
                        <Link
                          to="/privacy-policy"
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          <i className="fas fa-user-shield mr-2"></i>
                          {t('legal.termsOfUse.privacyPolicy')}
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
