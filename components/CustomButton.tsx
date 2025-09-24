import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  bgVariant?: 'outline' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  textVariant?: 'default' | 'light' | 'dark' | 'gray';
  IconRight?: React.ComponentType<any>;
  IconLeft?: React.ComponentType<any>;
  buttonStyle?: ViewStyle;   // 👈 external container style
  textStyle?: TextStyle;     // 👈 external text style
};

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'outline':
      return { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#007bff' };
    case 'primary':
      return { backgroundColor: '#007bff' };
    case 'secondary':
      return { backgroundColor: '#6c757d' };
    case 'success':
      return { backgroundColor: '#28a745' };
    case 'danger':
      return { backgroundColor: '#dc3545' };
    case 'warning':
      return { backgroundColor: '#ffc107' };
    case 'info':
      return { backgroundColor: '#17a2b8' };
    default:
      return { backgroundColor: '#007bff' };
  }
};

const getTextVariantStyle = (variant: ButtonProps['textVariant']): TextStyle => {
  switch (variant) {
    case 'light':
      return { color: '#f9f9f9ff' };
    case 'dark':
      return { color: '#000' };
    case 'gray':
      return { color: '#5c5d5dff' };  
    default:
      return { color: '#fffefeff' };
  }
};

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconRight,
  IconLeft,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, getBgVariantStyle(bgVariant), buttonStyle]}  // ✅ apply buttonStyle
    >
      {IconLeft && <IconLeft style={styles.icon} />}
      <Text style={[styles.text, getTextVariantStyle(textVariant), textStyle]}> {/* ✅ apply textStyle */}
        {title}
      </Text>
      {IconRight && <IconRight style={styles.icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
});

export default CustomButton;
