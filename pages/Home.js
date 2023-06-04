import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [result, setResult] = useState('');

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
    <View>
      <TextInput
        placeholder="価格A"
        value={number1}
        onChangeText={text => setNumber1(text)}
      />
      <TextInput
        placeholder="量（g、ml、個）"
        value={number2}
        onChangeText={text => setNumber2(text)}
      />
      <TextInput
        placeholder='価格B'
        value={number3}
        onChangeText={text => setNumber3(text)}
      />
      <TextInput
        placeholder='量（g、ml、個）'
        value={number4}
        onChangeText={text => setNumber4(text)}
      />
      <Button title="比較する" onPress={calculate} />
      {result !== '' && <Text>{result}</Text>}
    </View>
  );
};

export default Calculator;