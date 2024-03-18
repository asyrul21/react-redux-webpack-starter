import React from "react";
import { Link } from "react-router-dom";
import { CenterContainer, Text, View } from "reso-ui";

const UnauthorizedPage = () => {
  return (
    <View pt={8}>
      <CenterContainer maxWidth={540}>
        <Text Element="h1" size={5} mb={7} ml={2}>
          Unauthorized
        </Text>
        <Text Element="p">
          You are unauthorized to view this page. Please{" "}
          <Link to="/auth/login">Sign In</Link>.
        </Text>
      </CenterContainer>
    </View>
  );
};

export default UnauthorizedPage;
