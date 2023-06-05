import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [result, setResult] = useState('');

  const styles ={
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
      height: 50
    },
    calculatorButton : {
      backgroundColor: '#FBB03A',
      width: '80%',
      margin: 15,
      borderRadius: 15,
      textAlign: 'center'
    }
  }

  const calculate = () => {
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
  };

  return (
    <>
    <ScrollView scrollEnabled={false} containerStyle={{display: 'inlineBlock'}}>
      <View style={styles.containerStyle}>
      <View style={styles.containerStyle1}>
      <Text>価格A</Text>
      <TextInput style={styles.frame}
        placeholder = '値段を入力'
        value={number1}
        onChangeText={text => setNumber1(text)}
        keyboardType="numeric"
      />
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
      <Text>量（g、ml、個）</Text>
      <TextInput style={styles.frame}
        placeholder = '量を入力'
        value={number4}
        onChangeText={text => setNumber4(text)}
        keyboardType="numeric"
      />
      </View>
      </View>
      <TouchableOpacity style={styles.calculatorButton} onPress={calculate}>
        <Text style={{ color: 'white', padding: 15 , textAlign: 'center'}}>比較する</Text>
      </TouchableOpacity>
        {result !== '' && <Text>{result}</Text>}
    </ScrollView>
    </>
  );
};

export default Calculator;