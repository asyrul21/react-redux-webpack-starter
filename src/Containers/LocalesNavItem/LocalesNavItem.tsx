import React from "react";
import { useTranslation } from "react-i18next";
import { NavItem } from "reso-ui";
import { Locale } from "../../i18n/types";

const LocalesNavItem = () => {
  const {
    i18n: { changeLanguage, language }
  } = useTranslation();

  const handleClickLocale = (loc: Locale) => {
    changeLanguage(loc);
  };
  return (
    <NavItem
      renderCustomNavItem={({ theme, active }) => {
        return (
          <div className="navItem_base">
            {Object.values(Locale).map((lang, idx) => {
              if (idx === Object.values(Locale).length - 1) {
                return (
                  <a
                    key={`app_locale_selector_${lang}`}
                    role="button"
                    onClick={() => {
                      handleClickLocale(lang);
                    }}
                    style={{
                      fontWeight: language === lang ? "bold" : "normal"
                    }}
                  >
                    {lang}
                  </a>
                );
              }
              return (
                <>
                  <a
                    key={`app_locale_selector_${lang}`}
                    role="button"
                    onClick={() => {
                      handleClickLocale(lang);
                    }}
                    style={{
                      fontWeight: language === lang ? "bold" : "normal"
                    }}
                  >
                    {lang}
                  </a>{" "}
                  {" | "}
                </>
              );
            })}
          </div>
        );
      }}
    ></NavItem>
  );
};

export default LocalesNavItem;
