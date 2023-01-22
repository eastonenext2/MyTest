import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { FAB, Provider as PaperProvider, List } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
//import { initializeConnect } from 'react-redux/es/components/connect';git push
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadAll } from '../src/Store';
import { memo_type } from '../types/Types';
// export interface Imemo_type {
//   id: string;
//   memo: string;
//   createdAt: string;
// }
// const DATA = [
//   {
//     id: '1',
//     memo: 'memo1',
//     createdAt: '11111',
//   },
//   {
//     id: '2',
//     memo: 'memo2',
//     createdAt: '22222',
//   },
//   {
//     id: '3',
//     memo: 'memo3',
//     createdAt: '33333',
//   },
// ];

const wkcolor: string = '#0000FF';
//const aaa = loadAll();

// Itemはどのような型なのかを設定します。
// interfaceなので、IItemとします。

// export type IItem = {
//   id: string; // id は string
//   title: string;
//   yotei: string;
// };

//const navigation = useNavigation();
// const[memos,setMemos] = useState([]);
// useEffect(()=>{
//   const initialize = async()=>{
// const newMemos:IItem = await loadAll();
// setMemos(newMemos)
//   }

// const unsubscribe = navigation.addListener('focus',() =>{
// {initialize}
// };//initialise);
// return unsubscribe;
// },[navigation]);

// 一つのitemを表示する
const render_item = (listRenderItemInfo: ListRenderItemInfo<memo_type>) => {
  const id = listRenderItemInfo.item.id === '1' ? '#000000' : '#ffffff';
  const memo = listRenderItemInfo.item.memo;
  const createdAT = listRenderItemInfo.item.createdAt;
  //console.log('memo=' + memo);
  const avatar_mozi: string = 'MM';
  return (
    <View style={styles.item}>
      <Avatar
        size={32}
        rounded
        title={avatar_mozi}
        containerStyle={{ backgroundColor: 'blue' }}
        onPress={
          () => Alert.alert('clicked  = ' + memo) //console.log('Works!')
        }
        activeOpacity={0.7}
      />
      <Text>zzzzzzzzz</Text>
      <Text style={styles.title_blue}>{memo}</Text>

      <Text style={styles.title_white}>{createdAT}</Text>

      <Text
        style={StyleSheet.flatten([
          styles.title_blue,
          { color: id, fontWeight: '100' },
        ])}
      >
        {id}hello word!!
      </Text>

      <FontAwesome name="edit" size={40} color={id} />
    </View>
  );
};

const showAlert = () => {
  Alert.alert('onPress Called...');
};

export const flatListScreen = (Props: any) => {
  const navigation = useNavigation();
  type test = {
    id: String;
    memo: String;
  };

  const [memos, setMemos] = useState<memo_type[]>([]);

  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAll();
      //console.log(newMemos);
      //  const aaa = newMemos[1].text;

      setMemos(newMemos);
      console.log('userEffect call');
      //  console.log(newMemos);
    };

    const unsubscribe = navigation.addListener('focus', initialize);

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>----flat List Screen-----</Text>

      <FlatList
        data={memos}
        keyExtractor={(item) => item.id}
        renderItem={render_item}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() =>
          Props.navigation.navigate('edittext', {
            gamennm: 'edittextScreen',
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 50,
    bottom: 50,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableopacitybutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000ff',
    width: 50,
    height: 50,
  },

  item: {
    backgroundColor: 'tan',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title_white: {
    fontSize: 32,
    color: '#ffffff',
  },
  title_blue: {
    fontSize: 32,
    color: '#0000ff',
    fontWeight: '900',
  },

  container: {
    flex: 1,
    // alignItems: 'center',
    //         justifyContent: 'center',
    // marginTop: 50,
  },
  itemtext: {
    color: 'red',
    borderWidth: 0.5,
    borderColor: 'white',
  },
  textView: {
    borderWidth: 0.5,
    borderColor: 'white',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  subText: {
    fontSize: 20,
    color: 'lightblue',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabStyle: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
    backgroundColor: '#ff4081',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
