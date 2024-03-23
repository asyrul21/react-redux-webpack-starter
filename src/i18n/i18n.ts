import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// locales
import EN from "./locales/en.json";
import MS from "./locales/ms.json";
import { Locale } from "./types";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        ...EN
      },
      ms: {
        ...MS
      }
    },
    lng: Locale.en,
    fallbackLng: Locale.en
  });
