import React from "react";
import { View, Text } from "reso-ui";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <View pt={8} rootClassName="App">
      <header className="App-header">
        <img src="logo512.png" className="App-logo" alt="logo" />
        <Text Element="p" mt={8} size={9}>
          Hello World
        </Text>
      </header>
    </View>
  );
};

export default HomePage;
