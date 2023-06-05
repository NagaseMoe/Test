import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [result, setResult] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
  const containerStyle1 = {
    width: '45%',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'style',
    borderRadius: 5
  }
  const frame = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    height: 50
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
    <ScrollView scrollEnabled={false}>
      <View style={containerStyle}>
      <View style={containerStyle1}>
      <Text>価格A</Text>
      <TextInput style={frame}
        placeholder = '値段を入力'
        value={number1}
        onChangeText={text => setNumber1(text)}
      />
      <Text>量（g、ml、個）</Text>
      <TextInput style={frame}
        placeholder = '量を入力'
        value={number2}
        onChangeText={text => setNumber2(text)}
      />
      </View>
      <View style={containerStyle1}>
      <Text>価格B</Text>
      <TextInput style={frame}
        placeholder = '値段を入力'
        value={number3}
        onChangeText={text => setNumber3(text)}
      />
      <Text>量（g、ml、個）</Text>
      <TextInput style={frame}
        placeholder = '量を入力'
        value={number4}
        onChangeText={text => setNumber4(text)}
      />
      </View>
      </View>
      <Button title="比較する" onPress={calculate} />
      {result !== '' && <Text>{result}</Text>}
    </ScrollView>
    </>
  );
};

export default Calculator;