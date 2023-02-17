import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

const ProfileScreen: FC<NativeStackScreenProps<AppParamList, "Profile">> = (
  props
) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>我的</Text>
      <Button
        title="模态视图"
        onPress={() => props.navigation.navigate("Upgrade")}
      />
      <Button
        title="我的"
        onPress={() => props.navigation.navigate("Profile")}
      />
    </View>
  );
};

export default ProfileScreen;
