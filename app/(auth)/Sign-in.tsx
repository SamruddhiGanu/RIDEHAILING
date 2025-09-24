import CustomButton from '@/components/CustomButton';
import InputFields from '@/components/InputFields';
import OAuth from '@/components/Oauth';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { icons, images } from '../../constants';

const 

const signIn = () => {
  const [form, setForm] = useState({
   
    email: '',
    password: '',
  });

  const onsignInPress = () => {
    console.log("Sign Up Pressed", form);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Image & Title */}
      <View style={styles.headerContainer}>
        <Image source={images.signUpCar} style={styles.image} />
        <Text style={styles.text}>Welcome 👋</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
      
        <InputFields
          label="Email"
          placeholder="Enter your email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value:any) => setForm({ ...form, email: value })}
        />
        <InputFields
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          icon={icons.lock}
          value={form.password}
          onChangeText={(value:any) => setForm({ ...form, password: value })}
        />

        {/* Sign Up Button */}
        <CustomButton 
          title="Sign In"
          onPress={onsignInPress}
          textVariant="light"
        />
         <OAuth></OAuth>
        <Link
            href="Sign-in"
            style={{ marginTop: 0, textAlign: 'center', color: '#007bff' }}
        >
          <Text style={{marginBottom:10, color:"#969494ff"}}>Dont have an account? </Text>
          <Text style={{marginTop:10}}>Sign Up </Text>
        </Link>
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    zIndex: 0,
    width: '100%',
    height: 250,
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-SemiBold',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  formContainer: {
    padding: 20,
    gap: 15, // spacing between fields
  },
});

export default signIn;
