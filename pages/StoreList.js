import * as React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { List, FAB } from 'react-native-paper';
import format from 'date-fns/format';
import { ScrollView } from 'react-native-web';

const memos = [
  {
    text: "メモメモメモ",
    createdAt: 1585574700000, // 2020.03.30 22:25
  },
];

const StoreList = ({navigation}) => {

  const onPressAdd = () => {
    navigation.navigate('メモ詳細');
  };

  return (
    <ScrollView scrollEnabled={true}>
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={item => `${item.createdAt}`}
        renderItem={({ item }) => (
          <List.Item
            title={item.text}
            description={`作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`}
          />
        )}
      />
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
    </ScrollView>
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