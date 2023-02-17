import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { Button, Text, View } from 'react-native';

const HomeScreen: React.FC<NativeStackScreenProps<AppParamList, 'Home'>> = (
  props
) => {
  const { navigation, route } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `首页${Math.ceil(Math.random() * 100)}`,
      headerLeft: () => (
        <Button
          title="个人中心"
          onPress={() => navigation.push('UserCenter', { userid: 10002 })}
        />
      ),
      headerRight: () => (
        <Button title="设置" onPress={() => navigation.push('Setting')} />
      ),
    });
  }, [navigation, route]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>这里是首页</Text>
      <Button title="模态视图" onPress={() => navigation.navigate('Tab')} />
      <Button title="我的" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;
