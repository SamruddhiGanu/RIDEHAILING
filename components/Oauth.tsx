import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { icons } from '../constants';
import CustomButton from './CustomButton';

const OAuth = () => (
  <View style={styles.container}>
    {/* Divider with OR */}
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text style={styles.dividerText}>OR</Text>
      <View style={styles.line} />
    </View>

    {/* Google button */}
    <CustomButton
      title="Continue with Google"
      bgVariant="outline"
      textVariant="gray"
      IconLeft={() => (
        <Image
          source={icons.google}
          style={{ width: 20, height: 20, resizeMode: "contain" }}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 8,
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 14,
    color: "#302e2eff",
  },
});

export default OAuth;
