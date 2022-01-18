import React from "react";
import { App as ExternalApp } from "@my-app/app";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { UserInfo } from "./UserInfo";

export const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ExternalApp />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <UserInfo />
      </View>
    </View>
  );
};
