import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';

export const textInput = (Props: any) => {
  const [inputHeight, setInputHeight] = useState(0);
  const data = Props.route.params.data;
  // console.log(Props);
  console.log('rendar');
  const [inputdata, setInputData] = React.useState(data);
  const a: any = Dimensions.get('window');
  // console.log({ a });
  console.log('text=' + inputdata);

  return (
    <View style={styles.container}>
      <Text>{inputdata}</Text>
      <TextInput
        style={styles.input2}
        //   style={{ fontSize: 16 }}
        //     placeholder="予定を入力"
        multiline={true}
        textAlignVertical="top"
        // keyboardType="default"
        value={inputdata}
        onChangeText={(text) => {
          setInputData(text);
        }}
        onContentSizeChange={(event) => {
          // console.log(
          //   event.nativeEvent.contentSize,
          // ); /* 入力の高さが300より大きい場合は上限値300を設定する */
          if (event.nativeEvent.contentSize.height <= 300) {
            setInputHeight(event.nativeEvent.contentSize.height);
          } else {
            setInputHeight(500);
          }
        }}
      />
      <View style={styles.circlebutton}>
        <Text style={styles.buttontext}>save</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  input2: {
    fontSize: 18,
    height: 300, //'100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
  },

  container0: {
    flex: 1,
  },

  circlebutton: {
    backgroundColor: 'red',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    //flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    lineHeight: 20,
  },
});
