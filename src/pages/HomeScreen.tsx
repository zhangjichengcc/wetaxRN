import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { Button, Text, View, NativeModules } from 'react-native';

const {CredibleModule} = NativeModules;

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

  function useSDK() {
    console.log('js log >>>> 在 js 中执行 Java 方法');
    CredibleModule.createCredibleEvent('传参1', '传参2');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>这里是首页</Text>
      <Button title="模态视图" onPress={() => navigation.navigate('Tab')} />
      <Button title="我的" onPress={() => navigation.navigate('Profile')} />
      <Button title="调用可信SDK" onPress={useSDK} />
    </View>
  );
};

export default HomeScreen;
