import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const DetailsScreen: React.FC<
  NativeStackScreenProps<AppParamList, "Details">
> = ({ route, navigation }) => {
  const { from, to } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>from: {from}</Text>
      <Text>to: {to}</Text>
    </View>
  );
};

export default DetailsScreen;
