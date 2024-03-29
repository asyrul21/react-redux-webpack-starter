import React from "react";
import { Link } from "react-router-dom";
import { CenterContainer, Text, View } from "reso-ui";

const NotFoundPage = () => {
  return (
    <View pt={8}>
      <CenterContainer maxWidth={540}>
        <Text Element="h1" size={5} mb={7} ml={2}>
          Page Not Found
        </Text>
        <Text Element="p">
          The page you are looking for does not exist. Go back to{" "}
          <Link to="/">Home Page</Link>.
        </Text>
      </CenterContainer>
    </View>
  );
};

export default NotFoundPage;
