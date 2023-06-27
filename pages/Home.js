import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native';
// import { StyleSheet } from 'react-native-web';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    //計算式
    const num1 = number1 / number2;
    const num2 = number3 / number4;

    if (isNaN(num1) || isNaN(num2)) {
      setResult('値が入力されていません');
      return;
    }
    if ( num1 < num2 ) {
      setResult('Aの方がお得');
    } else if ( num1 > num2 ) {
      setResult('Bの方がお得');
    } else {
      setResult('同じ');
    }
    //setResult = {result}
    //setResultの内容が{result}に反映される
    //setResultの中身を貰った画像に変える
  };

  return (
    <>
    <View style={styles.container}>
    <Image style={{width: 323, height: 223}} source= {require['./assets/top.png']} />
    <SafeAreaView style={{backgroundColor: "#fff"}}>
    <ScrollView scrollEnabled={true}>
      <View style={styles.containerStyle}>
      {result !== '' && <Text>{result}</Text>}
      <View style={styles.containerStyle1}>
        <Text>価格A</Text>
        <TextInput style={styles.frame}
          placeholder = '値段を入力'
          value={number1}
          onChangeText={text => setNumber1(text)}
          keyboardType="numeric"
        />
        <Text>円</Text>
        <Text>量（g、ml、個）</Text>
        <TextInput style={styles.frame}
          placeholder = '量を入力'
          value={number2}
          onChangeText={text => setNumber2(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.containerStyle1}>
        <Text>価格B</Text>
        <TextInput style={styles.frame}
          placeholder = '値段を入力'
          value={number3}
          onChangeText={text => setNumber3(text)}
          keyboardType="numeric"
        />
        <Text>円</Text>
        <Text>量（g、ml、個）</Text>
        <TextInput style={styles.frame}
          placeholder = '量を入力'
          value={number4}
          onChangeText={text => setNumber4(text)}
          keyboardType="numeric"
        />
      </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",}}>
        <TouchableOpacity style={styles.calculatorButton} onPress={calculate}>
          <Text style={styles.calculatorButtonText}>比較する</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
    </View>
    </>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerStyle : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerStyle1 : {
    width: '45%',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'style',
    borderRadius: 15
  },
  frame : {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    height: 50,
    textAlign: 'center'
  },
  calculatorButton : {
    backgroundColor: '#FBB03A',
    margin: 15,
    borderRadius: 15,
    width: "80%",
  },
  calculatorButtonText : {
    color: 'white',
    padding: 15 ,
    textAlign: 'center',
  }
});

export default Calculator;