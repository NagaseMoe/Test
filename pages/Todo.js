import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useState, useEffect } from "react";

// 追加部分
function TodoScreen() {
  const [inputFields, setInputFields] = useState([
    { id: Date.now(), value: "", checked: false },
  ]);

  //keyborad
  const [keyboardStatus, setKeyboardStatus] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus();
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // addInput : 新しい入力フィールドを追加する
  const addInput = () => {
    setInputFields([
      ...inputFields,
      { id: Date.now(), value: "", checked: false },
    ]);
  };

  // handleInputChange : テキスト入力の変更イベントを処理する
  const handleInputChange = (text, id) => {
    const updatedInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: text };
      }
      return field;
    });
    setInputFields(updatedInputFields);
  };

  // handleCheckboxChange : チェックボックスの変更イベントを処理する
  const handleCheckboxChange = (id) => {
    const updatedInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, checked: !field.checked };
      }
      return field;
    });
    setInputFields(updatedInputFields);
  };

  // removeInput : 指定されたIDの入力フィールドを削除する
  const removeInput = (id) => {
    const updatedInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(updatedInputFields);
  };

  // removeCheckedInputs : チェックされた入力フィールドを削除する
  const removeCheckedInputs = () => {
    const updatedInputFields = inputFields.filter((field) => !field.checked);
    setInputFields(updatedInputFields);
  };

  return (
    /*
    ・<ScrollView>で画面上をタップするとkeyboradが隠れる
    */
   <SafeAreaView>
    <ScrollView scrollEnabled={true} style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.status}>{keyboardStatus}</Text>
        {inputFields.map((inputField) => (
          <View key={inputField.id} style={styles.inputContainer}>
            <TouchableOpacity
              onPress={() => handleCheckboxChange(inputField.id)}
            >
              <View
                style={[
                  styles.checkbox,
                  inputField.checked
                    ? styles.checkedCheckbox
                    : styles.uncheckedCheckbox,
                ]}
              >
                {inputField.checked && (
                  <Text style={styles.checkboxText}>✓</Text>
                )}
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={inputField.value}
              onChangeText={(text) => handleInputChange(text, inputField.id)}
              autoFocus={true}
            />
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addInput}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={removeCheckedInputs}>
            <Text style={styles.buttonText}>削除</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.status}>{keyboardStatus}</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkbox: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: "#888888",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  uncheckedCheckbox: {
    backgroundColor: "transparent",
  },
  checkboxText: {
    color: "#FBB03A",
  },
  input: {
    flex: 1,
    height: 86,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#DADADA",
    paddingHorizontal: 8,
    paddingVertical: 0,
    fontSize: 24,
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
    paddingVertical: 8,
    borderRadius: 50,
    marginRight: 8, // 追加
  },
  buttonText: {
    color: "#FBB03A",
    fontSize: 40,
  },
  status: {
    marginTop: 16,
    textAlign: "center",
  },
  scrollView: {
    marginHorizontal: 20,
},
};

export default TodoScreen;
