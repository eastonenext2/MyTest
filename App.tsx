import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { screenA } from './screens/screenA';
//import { screenB } from './screens/screenB';
//rimport { screenC } from './screens/screenC';
import { useState, useContext, createContext } from 'react';
import { screenA } from './screens/ScreenA';
import { screenB } from './screens/ScreenB';
import { textInput } from './screens/TextInput';
import { flatListScreen } from './screens/FlatListScreen';
import { edittext } from './screens/Edittext';
//import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import SQLite from 'react-native-sqlite-storage';
const Stack = createNativeStackNavigator();
const ans = 'testtsttse';

export const HobbyContext = createContext;

function edit_ok_click() {
  const a = 1;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screenA">
        <Stack.Screen
          name="screenA"
          component={screenA}
          options={({ route, navigation }) => ({
            title: 'MyTestMain',
            // headerStyle: {
            //   backgroundColor: '#262423',
            // },
            // headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                // style={styles.menubutton}
                // onPress={() => navigation.navigate('UploadPictureScreen')}
                title="MENU"
                color="#000"
              />
            ),
          })}
        />
        <Stack.Screen
          name="screenB"
          component={screenB}
          options={({ route, navigation }) => ({
            animation: 'slide_from_right',
          })}
        />
        <Stack.Screen
          name="flatlist"
          component={flatListScreen}
          options={({ route, navigation }) => ({
            animation: 'slide_from_right',
          })}
        />
        <Stack.Screen
          name="textInput"
          component={textInput}
          options={({ route, navigation }) => ({
            title: '入力処理',
            // headerShown: false,
            animation: 'slide_from_bottom',
            presentation: 'modal',
            // headerStyle: {
            //   backgroundColor: '#262423',
            // },
            // headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                // style={styles.menubutton}
                // onPress={() => navigation.navigate('UploadPictureScreen')}
                onPress={edit_ok_click}
                title="登録"
                color="#000"
              />
            ),
          })}
        />
        <Stack.Screen
          name="edittext"
          component={edittext}
          options={({ route, navigation }) => ({
            animation: 'slide_from_bottom',
            presentation: 'modal',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menubutton: {
    backgroundColor: 'red',
    color: 'white',
  },
});
