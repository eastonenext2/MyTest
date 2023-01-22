import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export const screenB = (Props: any) => {
  console.log(Props.route.params.gamennm);
  const aaa = Props.route.params.gamennm + '==SCREEN';
  return (
    <View style={styles.container}>
      <Text>screenB</Text>
      <Text>{aaa}</Text>
      <Text>EditText</Text>
      <View style={styles.buttonxxx}>
        <Button
          title="Go TextInput"
          onPress={() => {
            Props.navigation.navigate('textInput', {
              data: 'input sumino text',
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan',
  },
  buttonxxx: {
    backgroundColor: 'red',
    color: 'white',
    padding: 20,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
  },
});
