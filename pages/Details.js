import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailsScreen() {
  const [inputDetails, setInputDetails] = useState([
    { id: Date.now(), name: "", quantity: "", price: "" },
  ]);

  const addComponent = () => {
    setInputDetails([
      ...inputDetails,
      { id: Date.now(), name: "", quantity: "", price: "" },
    ]);
  };

  const handleNameChange = (text, id) => {
    const updatedDetails = inputDetails.map((details) => {
      if (details.id === id) {
        return { ...details, name: text };
      }
      return details;
    });
    setInputDetails(updatedDetails);
  };

  const handleQuantityChange = (text, id) => {
    const updatedDetails = inputDetails.map((details) => {
      if (details.id === id) {
        return { ...details, quantity: text };
      }
      return details;
    });
    setInputDetails(updatedDetails);
  };

  const handlePriceChange = (text, id) => {
    const updatedDetails = inputDetails.map((details) => {
      if (details.id === id) {
        return { ...details, price: text };
      }
      return details;
    });
    setInputDetails(updatedDetails);
  };

  const saveDataToAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('inputDetails', JSON.stringify(inputDetails));
      console.log('データが正常に保存されました');
    } catch (error) {
      console.log('データの保存中にエラーが発生しました:', error);
    }
  };

  const loadDataFromAsyncStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('inputDetails');
      if (data) {
        setInputDetails(JSON.parse(data));
      }
    } catch (error) {
      console.log('データの取得中にエラーが発生しました:', error);
    }
  };

  useEffect(() => {
    loadDataFromAsyncStorage();
  }, []);

  useEffect(() => {
    saveDataToAsyncStorage();
  }, [inputDetails]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <ScrollView scrollEnabled={true}>
          {inputDetails.map((details) => (
            <View key={details.id} style={styles.containerStyle}>
              <View style={[styles.pulldownStyle, { width: '30%' }]}>
                <Text style={styles.textStyle}>店舗名</Text>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="店舗名"
                  value={details.name}
                  onChangeText={(text) => handleNameChange(text, details.id)}
                />
              </View>
              <View style={styles.textflex}>
                <View style={styles.pulldownStyle}>
                  <Text style={styles.textStyle}>量</Text>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="0"
                    keyboardType="numeric"
                    value={details.quantity}
                    onChangeText={(text) => handleQuantityChange(text, details.id)}
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
                    value={details.price}
                    onChangeText={(text) => handlePriceChange(text, details.id)}
                  />
                </View>
                <Text>円</Text>
              </View>
            </View>
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
}

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
    containerStyle1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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