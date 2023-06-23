import * as React from 'react';
import { View, Text, Button, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { List, FAB, Avatar, Card, IconButton } from 'react-native-paper';
import format from 'date-fns/format';

// const memos = [
//   {
//     text: "メモメモメモ",
//     createdAt: 1585574700000, // 2020.03.30 22:25
//   },
// ];



const StoreList = ({navigation}) => {

  //日付
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();

  const formattedDate = `${year}.${month}.${day}`;

  //+マーク押したらメモ詳細ページに移行
  const onPressAdd = () => {
    navigation.navigate('メモ詳細');
  };

  return (
    <View style={styles.container}>
      <Card.Title
        title="Card Title"
        subtitle={`最終更新日：${formattedDate}`}
      />
      {/* <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={item => `${item.createdAt}`}
        renderItem={({ item }) => (
          <List.Item
            title={item.text}
            description={`作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`}
          />
        )}
      /> */}
      <FAB
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
          borderRadius: 50,
          backgroundColor: '#FBB03A',
          color: "white"
        }}
        icon="plus"
        onPress={onPressAdd}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
};

export default StoreList;