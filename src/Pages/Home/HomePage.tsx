import React from "react";
import { View, Text } from "reso-ui";

import "./HomePage.scss";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {
    t,
    i18n: { language }
  } = useTranslation();
  return (
    <View pt={8} rootClassName="App">
      <header className="App-header">
        <Text Element="p">Current language: {language}</Text>
        <img src="logo512.png" className="App-logo" alt="logo" />
        <Text Element="p" mt={8} size={9}>
          {t("home_page.header")}
        </Text>
      </header>
    </View>
  );
};

export default HomePage;
