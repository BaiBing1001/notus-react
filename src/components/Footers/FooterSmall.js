import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterSmall(props) {
  const { t } = useTranslation();
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                {t("footer.copyright", { year: new Date().getFullYear() })}
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link
                    to="/terms-of-use"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    {t("footer.termsConditions")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
