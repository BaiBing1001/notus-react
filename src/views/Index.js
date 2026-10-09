/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// Import images
import patternReact from "assets/img/pattern_react.png";
import connectDot from "assets/img/connect-2.png";
import componentBtn from "assets/img/component-btn.png";
import componentProfileCard from "assets/img/component-profile-card.png";
import componentInfoCard from "assets/img/component-info-card.png";
import componentInfo2 from "assets/img/component-info-2.png";
import componentMenu from "assets/img/component-menu.png";
import componentBtnPink from "assets/img/component-btn-pink.png";
import angular from "assets/img/angular.jpg";
import bootstrap from "assets/img/bootstrap.jpg";
import sketch from "assets/img/sketch.jpg";
import react from "assets/img/react.jpg";
import vue from "assets/img/vue.jpg";
import documentation from "assets/img/documentation.png";
import login from "assets/img/login.jpg";
import profile from "assets/img/profile.jpg";
import landing from "assets/img/landing.jpg";

export default function Index() {
  const { t } = useTranslation();
  
  // Hide hero image on iPad and mobile
  const hideImageOnMobile = `
    @media (max-width: 1023px) {
      .hero-connect-image {
        display: none !important;
      }
    }
  `;
  
  return (
    <>
      <style>{hideImageOnMobile}</style>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-bold text-5xl text-blueGray-600 mb-4">
                {t('hero.title').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index === 0 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-blueGray-500">
                {t('hero.subtitle')}
              </p>
              <div className="mt-12">
                <Link
                  to="/features"
                  className="attention-action get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <i className="fas fa-rocket mr-2"></i>
                  {t('hero.discoverFeatures')}
                </Link>
                <Link
                  to="/download"
                  className="attention-action download-app ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <i className="fas fa-download mr-2"></i>
                  {t('hero.downloadApp')}
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-blueGray-400">
                <div className="flex items-center p-2">
                  <i className="fas fa-user-secret text-2xl mr-2 text-lightBlue-500"></i>
                  <span className="text-sm font-semibold">{t('hero.anonymousAvatars')}</span>
                </div>
                <div className="flex items-center p-2">
                  <i className="fas fa-clock text-2xl mr-2 text-green-500"></i>
                  <span className="text-sm font-semibold">{t('hero.autoExpiry')}</span>
                </div>
                <div className="flex items-center p-2">
                  <i className="fas fa-shield-alt text-2xl mr-2 text-purple-500"></i>
                  <span className="text-sm font-semibold">{t('hero.privacyFirst')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px hero-connect-image"
          src={connectDot}
          // src={patternReact}
          alt="Network connectivity pattern with interconnected nodes showing multi-point connections"
        />
      </section>

      <section id="features" className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="attention-card relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="Young people socializing and connecting with phones at a vibrant gathering"
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
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
                    {t('features.proximityTitle')}
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    {t('features.proximityDescription')}
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-user-secret"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        {t('features.avatarsTitle')}
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        {t('features.avatarsDescription')}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-clock"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        {t('features.expiringTitle')}
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        {t('features.expiringDescription')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-eye-slash"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">{t('features.revealTitle')}</h6>
                      <p className="mb-4 text-blueGray-500">
                        {t('features.revealDescription')}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-bluetooth-b"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        {t('features.bluetoothTitle')}
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        {t('features.bluetoothDescription')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-mobile-alt text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {t('features.keyFeaturesTitle')}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {t('features.keyFeaturesDescription')}
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.autoDiscovery')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.chatMessaging')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.fileSharing')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.profiles')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.privacyControls')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.offlineMode')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.crossPlatform')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('features.tags.lowPower')}
                </span>
              </div>
              <Link
                to="/download"
                className="attention-action font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                {t('features.downloadNow')}{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </Link>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="attention-card relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 mt-48 md:mt-0">
                <img
                  alt="People using Ringdy for auto-discovery at a social event"
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
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
                    {t('useCases.actionTitle')}
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    {t('useCases.actionDescription')}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <div className="attention-card bg-lightBlue-500 shadow-lg rounded-lg text-center p-8">
                    <div className="text-white text-4xl mb-4">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      {t('useCases.campusTitle')}
                    </p>
                    <p className="text-sm text-lightBlue-200 mt-2">
                      {t('useCases.campusDescription')}
                    </p>
                  </div>
                  <div className="attention-card bg-blueGray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-white text-4xl mb-4">
                      <i className="fas fa-users"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      {t('useCases.eventTitle')}
                    </p>
                    <p className="text-sm text-white-800 mt-2">
                      {t('useCases.eventDescription')}
                    </p>
                  </div>
                  <div className="attention-card bg-purple-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-white text-4xl mb-4">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      {t('useCases.businessTitle')}
                    </p>
                    <p className="text-sm text-purple-200 mt-2">
                      {t('useCases.businessDescription')}
                    </p>
                  </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div className="attention-card bg-orange-500 shadow-lg rounded-lg text-center p-8">
                    <div className="text-white text-4xl mb-4">
                      <i className="fas fa-coffee"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      {t('useCases.cafeTitle')}
                    </p>
                    <p className="text-sm text-orange-200 mt-2">
                      {t('useCases.cafeDescription')}
                    </p>
                  </div>
                  <div className="attention-card bg-red-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-white text-4xl mb-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      {t('useCases.localTitle')}
                    </p>
                    <p className="text-sm text-red-200 mt-2">
                      {t('useCases.localDescription')}
                    </p>
                  </div>
                  <div className="attention-card bg-indigo-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-white text-4xl mb-4">
                      <i className="fas fa-gamepad"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      {t('useCases.gamingTitle')}
                    </p>
                    <p className="text-sm text-indigo-200 mt-2">
                      {t('useCases.gamingDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-bluetooth-b text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {t('useCases.perfectTitle')}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {t('useCases.perfectDescription')}
                {t('useCases.perfectDescriptionContinued')}
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {t('useCases.approachDescription')}
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.studyGroups')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.events')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.coworking')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.gaming')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.travel')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.shopping')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.fitness')}
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  {t('useCases.tags.social')}
                </span>
              </div>
              <Link
                to="/download"
                className="attention-action font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                {t('useCases.tryItNow')}{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-heart text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  {t('community.whyLoveTitle')}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  {t('community.whyLoveDescription')}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-lock"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('community.privacyProtection')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-bolt"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('community.instantConnection')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-battery-full"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          {t('community.lowPowerConsumption')}
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="Group of friends socializing and networking with phones at a vibrant social gathering"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">{t('community.experienceTitle')}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              {t('community.experienceDescription')}
              {t('community.experienceDescriptionContinued')}
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    {t('community.anonymousProfiles')}
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="People creating anonymous profiles and connecting socially with phones"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    {t('community.chatInterface')}
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Friends actively chatting and socializing with phones in a lively setting"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    {t('community.nearbyDiscovery')}
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Young people discovering and connecting at an energetic social event with phones"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                {t('community.joinTitle')}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                {t('community.joinDescription1')}
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                {t('community.joinDescription2')}
              </p>
              <Link
                to="/download"
                className="attention-action github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-lightBlue-700 uppercase text-sm shadow hover:shadow-lg"
              >
                <i className="fas fa-download mr-2"></i>
                {t('community.downloadNow')}
              </Link>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fas fa-podcast text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
              </p>
              <h3 className="font-semibold text-3xl">
                {t('featurePage.cta.title')}
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                {t('featurePage.cta.description')}
              </p>
              <div className="sm:flex sm:justify-center flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  to="/download"
                  className="bg-blueGray-800 text-white font-bold px-8 py-4 rounded-lg outline-none focus:outline-none shadow-lg hover:shadow-xl ease-linear transition-all duration-150 text-center"
                >
                  <i className="fab fa-apple text-lg mr-2"></i>
                  Download for iOS
                </Link>
                <Link
                  to="/download"
                  className="bg-blueGray-800 text-white font-bold px-8 py-4 mt-4 rounded-lg outline-none focus:outline-none shadow-lg hover:shadow-xl ease-linear transition-all duration-150 text-center"
                >
                  <i className="fab fa-google-play text-lg mr-2"></i>
                  Download for Android
                </Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
