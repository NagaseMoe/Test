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
    <Image style={{alignSelf: 'center', width: 323, height: 223}} source= {require('../assets/top.png')} />
      <SafeAreaView style={{backgroundColor: "#fff"}}>
        <ScrollView scrollEnabled={true}>
          <View style={styles.containerStyle}>
            {result !== '' && <Text>{result}</Text>}
              <View style={styles.containerStyle1}>
                <Image style={{width: 70, height: 70}} source= {require('../assets/A.png')} />
                <Text style={styles.priceText}>価格</Text>
                  <View style={styles.textflex}>
                    <TextInput style={styles.frame}
                      placeholder = '値段を入力'
                      value={number1}
                      onChangeText={text => setNumber1(text)}
                      keyboardType="numeric"/>
                    <Text style={styles.currencyText}>円</Text>
                  </View>
                    <Text style={styles.priceText}>量</Text>
                    <TextInput style={styles.amountframe}
                    placeholder = '量を入力'
                    value={number2}
                    onChangeText={text => setNumber2(text)}
                    keyboardType="numeric"/>
              </View>

              <View style={styles.containerStyle1}>
                <Image style={{width: 70, height: 70}} source= {require('../assets/B.png')} />
                <Text style={styles.priceText}>価格</Text>
                  <View style={styles.textflex}>
                    <TextInput style={styles.frame}
                      placeholder = '値段を入力'
                      value={number3}
                      onChangeText={text => setNumber3(text)}
                      keyboardType="numeric"/>
                    <Text style={styles.currencyText}>円</Text>
                  </View>
                    <Text style={styles.priceText}>量</Text>
                    <TextInput style={styles.amountframe}
                    placeholder = '量を入力'
                    value={number4}
                    onChangeText={text => setNumber4(text)}
                    keyboardType="numeric"/>
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
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderStyle: 'style',
    borderRadius: 15,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
  },
  frame : {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    height: 50,
    textAlign: 'center',
    width: 136
  },
  amountframe : {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    height: 50,
    textAlign: 'center',
    width: 156
  },
  calculatorButton : {
    backgroundColor: '#FBB03A',
    margin: 15,
    borderRadius: 15,
    width: "80%",
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
  },

  calculatorButtonText : {
    color: 'white',
    padding: 12 ,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  priceText: {
    fontSize: 20, // 好みのサイズに変更してください
  },
  textflex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default Calculator;
