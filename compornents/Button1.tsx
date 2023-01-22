import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
//import { return_syori } from '../screens/edittext';
export const button1 = () => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '80%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#00ffff',
        borderRadius: 10,
      }}
      //   onPress={() => console.log('save clicked')}
      onPress={loginWithFacebook}
    >
      <Text
        style={{
          color: 'white',
          alignSelf: 'center',
          fontSize: 24,
        }}
      >
        {' '}
        Comp Touchable
      </Text>
    </TouchableOpacity>
  );
};
function loginWithFacebook() {
  console.log(' Alert.alertfacebook login omponents');
  Alert.alert('facebook login components');
}
