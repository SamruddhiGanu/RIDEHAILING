 import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from "react-native-swiper";
import CustomButton from '../../components/CustomButton';
import { onboarding } from "../../constants";


const Onboarding =()=>{
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return(
   <SafeAreaView style={styles.container}>
      
      <TouchableOpacity 
       style={styles.buttonContainer}
        onPress={() =>{
             router.replace('/(auth)/Sign-up');
    }}
    >
    <Text style={styles.buttontext}>skip</Text>
    </TouchableOpacity>
    <Swiper 
       ref ={swiperRef}
       loop={false}
       dot ={<View style={styles.swiperreg}></View>}
       activeDot={<View style={styles.swiperact}></View>}
       onIndexChanged={(Index)=> setActiveIndex(Index)}>
        {onboarding.map((item)=> (
          <View key ={item.id}  style={styles.firstimagecontainer}> 
         
          <Image
            source={item.image}
            style={{width: '80%', height: '60%'}}
            resizeMode="contain"
          
          />
          <View>
            <Text style={{fontFamily: 'PlusJakartaSans-ExtraBold', fontSize: 14, color: '#000', textAlign: 'center'}}>
              {item.title}
            </Text>
          </View>   
           <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
       </Swiper>
      <CustomButton
        title ={activeIndex === onboarding.length -1 ?"Get started" : "Next"}
        onPress={()=>{
          if(activeIndex === onboarding.length -1){
            router.push('/(auth)/Sign-up')
          }
          else{
            swiperRef.current?.scrollTo(activeIndex + 1);
          }  
        }}
        textVariant='light'
       
        />
        
       
       
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: 40,    // distance from top
    right:20,  // pull it away from the right edge
    padding: 8,
    zIndex: 10,       // ensures it's above Swiper
    elevation: 10
  },
  buttontext: {
    fontFamily: 'PlusJakartaSans-ExtraLightItalic',
    fontSize: 19,
    color: '#0b0000ff',
  },
  swiperreg:{
 
    backgroundColor: '#84868aff', width: 22, height: 4, borderRadius: 1, marginRight: 1, marginLeft: 1, marginTop: 5, marginBottom: 5,
  },
  swiperact:{
   
    backgroundColor: '#4e81e8ff', width: 22, height: 4, borderRadius: 1
  },

  firstimagecontainer: {
    flex: 1,
    alignItems: 'center',
    
    paddingHorizontal: 20,
   
  },
  xyz:{
 
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    
  },
  customnextbutton: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    marginTop: 10,
    backgroundColor: '#4e81e8ff',
    borderRadius: 30,
    fontFamily: 'PlusJakartaSans-ExtraBold',
    color: '#fff',
    

  },
  description: {
    fontFamily: 'PlusJakartaSans-ExtraLightItalic',
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
});


export default Onboarding;