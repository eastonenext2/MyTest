import { View, Text, TouchableOpacity, Alert } from 'react-native';

import React, { useState, Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { button1 } from '../compornents/Button1';
import { save } from '../src/Store';

export const edittext = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const onPressSave = async () => {
    const ima = Date.now();
    const key = `${ima}`;
    await save(text, key);
    const aaa = text + '-----' + ima.toLocaleString;
    console.log(aaa);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <TextInput
          style={{
            maxHeight: '60%',
            minHeight: 150,
            marginBottom: 16,
          }}
          mode="outlined"
          placeholder="メモを入力してください"
          multiline
          onChangeText={(text) => setText(text)}
        />

        <TouchableOpacity
          style={styles.touroku_button}
          onPress={() => {
            onPressSave();
          }}
        >
          <Text> SAVE</Text>
        </TouchableOpacity>
        {/* {my_touchableopacitybutton}
        {myButton}
        {myIcon}
        {button1()} */}
      </View>
    </KeyboardAvoidingView>
  );
};

const my_touchableopacitybutton = (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      width: '80%',
      height: 50,
      alignSelf: 'center',
      backgroundColor: '#00ff00',
      borderRadius: 10,
    }}
    onPress={() => {}}
  >
    <Text
      style={{
        color: 'white',
        alignSelf: 'center',
        fontSize: 24,
      }}
    >
      {' '}
      SAVE MyTouchable
    </Text>
  </TouchableOpacity>
);

function retun_syori() {
  Alert.alert('RETURN!!!!');
}

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);

function loginWithFacebook() {
  Alert.alert('facebook login');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height: '90%',
    backgroundColor: 'red',
  },
  touroku_button: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#00ff00',
    borderRadius: 10,
  },
});
