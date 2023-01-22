import React from 'react';
import { clearStreage } from '../src/Store';
//import { Button } from '@rneui/themed';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Button, FAB } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const screenA = (Props: any) => {
  // console.log(Props);

  return (
    <View style={styles.container}>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />

      <Text>screenA</Text>
      {/* ボタン1 */}
      <TouchableHighlight
        style={styles.button1}
        onPress={() =>
          Props.navigation.navigate('screenB', {
            gamennm: 'gamennmBBBBB',
          })
        } //console.log('press1')}
        activeOpacity={0.6}
        underlayColor="gray"
      >
        <Text style={styles.fontStyle}>button1</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.shin_nyuuryoku}
        onPress={() =>
          Props.navigation.navigate('edittext', {
            gamennm: 'edittextScreen',
          })
        }
      >
        <Text> 新入力処理</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchableopacitybutton}
        onPress={() =>
          Props.navigation.navigate('flatlist', {
            gamennm: 'flatListScreen',
          })
        }
      >
        <Text> Touch Here Go FlatList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shin_nyuuryoku}
        onPress={() => {
          clearStreage();
        }}
      >
        <Text> Strorage DELETE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  marginTop: 100,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 50,
    bottom: 50,
  },
  touchableopacitybutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    width: 100,
    padding: 10,
  },
  shin_nyuuryoku: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff00',
    width: 100,
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },

  button1: {
    backgroundColor: 'black',
    padding: 20,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
  },
  button2: {
    backgroundColor: 'blue',
    padding: 10,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
  },
  button3: {
    backgroundColor: 'white',
    padding: 10,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  button4: {
    backgroundColor: 'tomato',
    padding: 20,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
  },
  button5: {
    backgroundColor: 'black',
    padding: 20,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
    shadowColor: 'black',
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  button6: {
    backgroundColor: 'lime',
    padding: 10,
    width: 70,
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  fontStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
  },
});
