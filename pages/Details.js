import * as React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useState, useEffect } from "react";

const DetailsScreen = () => {
  //以下はデフォルトで表示されているコンポーネント
  const [components, setComponents] = useState([
    <View key={0} style={styles.containerStyle}>
      <View style={[styles.pulldownStyle, { width: '30%' }]}>
        <Text style={styles.textStyle}>店舗名</Text>
        <RNPickerSelect
          style={styles.textInputStyle}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          items={[
            { label: 'オプション1', value: 'option1' },
            { label: 'オプション2', value: 'option2' },
            { label: 'オプション3', value: 'option3' },
          ]}
        />
      </View>
      <View style={styles.textflex}>
        <View style={styles.pulldownStyle}>
          <Text style={styles.textStyle}>量</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <Text>あたり</Text>
      </View>
      <View style={styles.textflex}>
        <View style={styles.pulldownStyle}>
          <Text style={styles.textStyle}>値段</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <Text>円</Text>
      </View>
    </View>
  ]);

  //追加ボタンを押した後の処理
  //ボタンを押したら以下のコンポーネントが追加されていくよ
  const addComponent = () => {
    const newComponent = (
      <View key={components.length} style={styles.containerStyle}>
        <View style={[styles.pulldownStyle, { width: '30%' }]}>
          <Text style={styles.textStyle}>店舗名</Text>
          <RNPickerSelect
            style={styles.textInputStyle}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            items={[
              { label: 'オプション1', value: 'option1' },
              { label: 'オプション2', value: 'option2' },
              { label: 'オプション3', value: 'option3' },
            ]}
          />
        </View>
        <View style={styles.textflex}>
        <View style={styles.pulldownStyle}>
          <Text style={styles.textStyle}>量</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <Text>あたり</Text>
      </View>
      <View style={styles.textflex}>
        <View style={styles.pulldownStyle}>
          <Text style={styles.textStyle}>値段</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <Text>円</Text>
      </View>
    </View>
  );

  setComponents([...components, newComponent]);
};

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <ScrollView scrollEnabled={true}>
          {components.map((component, index) => (
            <React.Fragment key={index}>{component}</React.Fragment>
          ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={addComponent}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textflex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pulldownStyle: {
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f0f0f0'
  },
  textStyle: {
    backgroundColor: '#FBB03A',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  textInputStyle: {
    fontSize: 18,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
    marginRight: 8, // 追加
  },
  buttonText: {
    color: "#FBB03A",
    fontSize: 40,
  },
});

export default DetailsScreen;