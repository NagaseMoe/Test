import * as React from 'react';
import { View, Text, Button } from 'react-native';

const StoreList = ({navigation}) => {
    return (
      <View>
        <Text>店舗比較</Text>
        <Button title="玉ねぎ" onPress={() => navigation.navigate('玉ねぎ')} />
  </View>
    );
}

export default StoreList;