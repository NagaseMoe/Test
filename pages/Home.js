import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  // const [number3, setNumber3] = useState('');
  // const [number4, setNumber4] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    // const num3 = parseFloat(number3);
    // const num4 = parseFloat(number4);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('値が入力されていません');
      return;
    }

    let calculatedResult;
    // switch (operator) {
    //   case '<':
    //     calculatedResult = num1 < num2;
    //     break;
    //   case '>':
    //     calculatedResult = num1 > num2;
    //     break;
    //   case '=':
    //     calculatedResult = num1 === num2;
    //     break;
    //   default:
    //     setResult('Invalid operator');
    //     return;
    // }

    setResult(calculatedResult ? 'True' : 'False');
  };

  return (
    <View>
      <TextInput
        placeholder="価格A"
        value={number1}
        onChangeText={text => setNumber1(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder='価格B'
        value={number2}
        onChangeText={text => setNumber2(text)}
        keyboardType='numeric'
      />
      <TextInput
        placeholder="Enter operator (<, >, =)"
        value={operator}
        onChangeText={text => setOperator(text)}
        maxLength={1}
      />
      <Button title="比較する" onPress={calculate} />
      {result !== '' && <Text>Result: {result}</Text>}
    </View>
  );
};

export default Calculator;