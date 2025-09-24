import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  Keyboard,
  Platform,
  Image,
  TextInput,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const InputFields = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
   inputStyle,
  iconStyle,
  placeholder,
  value,
  onChangeText,
}:InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Label */}
          {label && <Text style={[styles.text, labelStyle]}>{label}</Text>}

          {/* Input + Icon */}
          <View
            style={[
              styles.container2,
              containerStyle,
              isFocused && { borderColor: "#3b82f6", borderWidth: 1 },
            ]}
          >
            {icon && (
              <Image
                source={icon}
                style={[{ width: 20, height: 20, marginRight: 8 }, iconStyle]}
              />
            )}

            <TextInput
              style={[styles.input, inputStyle]}
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder || "Enter text"}
              value={value}
              onChangeText={onChangeText}
              placeholderTextColor="#999"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default InputFields;
