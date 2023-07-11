import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailsScreen () {
    const [inputDetails, setInputDetails] = useState([
        {id: Date.now(), value: ""},
    ]);
    const [textValues, setTextValues] = useState([""]);

    const addComponent = () => {
        setInputDetails([
            ...inputDetails,
            { id: Date.now(), value: ""},
        ]);
    };

    const handleComponentChange = (text, id) => {
        const updateDetails = inputDetails.map((Details) => {
            if (Details.id === id) {
                return {...Details, value: text};
            }
            return Details;
        });
        setInputDetails(updateDetails);
    };

    return(
        <View style={styles.container}>
            <SafeAreaView style={{backgroundColor:"#fff"}}>
                <ScrollView scrollEnabled={true}>
                    {inputDetails.map((inputDetails) => (
                        <View key={inputDetails.id} style={styles.containerStyle}>
                        <View style={[styles.pulldownStyle, { width: '30%' }]}>
                            <Text style={styles.textStyle}>店舗名</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="店舗名"
                                value={inputDetails.value}
                                onChangeText={(text) => handleComponentChange(text, inputDetails.id)}
                            />
                        </View>
                        <View style={styles.textflex}>
                            <View style={styles.pulldownStyle}>
                                <Text style={styles.textStyle}>量</Text>
                                <TextInput
                                style={styles.textInputStyle}
                                placeholder="0"
                                keyboardType="numeric"
                                value={inputDetails.value}
                                onChangeText={(text) => handleComponentChange(text, inputDetails.id)}
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
                                    value={inputDetails.value}
                                    onChangeText={(text) => handleComponentChange(text, inputDetails.id)}
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