import * as React from 'react';
import { View, Text, Button, FlatList, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { List, FAB, Avatar, Card, IconButton } from 'react-native-paper';
import format from 'date-fns/format';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const StoreList = ({navigation}) => {


//+マーク押したらメモ詳細ページに移行
const onPressAdd = () => {
  navigation.navigate('メモ詳細');
};


return (
  <View style={styles.container}>
    <Card.Title
      title="Card Title"
    />
    <View style={styles.buttonContainer}>
      <Icon name= "plus-circle"
        size={60}
        borderRadius= "50"
        color={'#FBB03A'}
        backgroundColor={'white'}
        onPress={onPressAdd}
      />
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
  buttonContainer: {
    // marginTop: 200,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});


export default StoreList;