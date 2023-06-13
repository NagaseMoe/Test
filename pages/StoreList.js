import * as React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import format from 'date-fns/format';

const memos = [
  {
    text: "メモメモメモ",
    createdAt: 1585574700000, // 2020.03.30 22:25
  },
];

// const StoreList = ({navigation}) => {
//     return (
//       <View>
//         <Text>店舗比較</Text>
//         <Button title="玉ねぎ" onPress={() => navigation.navigate('玉ねぎ')} />
//   </View>
//     );
// }

const StoreList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos} // (1)
        keyExtractor={item => `${item.createdAt}`} // (2)
        renderItem={({ item }) => ( // (3)
          <List.Item // (4)
            title={item.text}
            description={`作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`}
          />
        )}
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