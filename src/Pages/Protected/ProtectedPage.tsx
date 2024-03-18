import React from "react";
import { CenterContainer, Text, View } from "reso-ui";
import { useAuthGuard } from "../../hooks/useAuthGuard";

const ProtectedPage = () => {
  useAuthGuard();
  return (
    <View pt={8}>
      <CenterContainer maxWidth={540}>
        <Text Element="h1" size={5} mb={7} ml={2}>
          Protected Home Page
        </Text>
        <Text Element="p">
          Congratulations! You have accessed a Protected Page
        </Text>
      </CenterContainer>
    </View>
  );
};

export default ProtectedPage;
