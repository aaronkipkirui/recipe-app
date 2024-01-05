import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

// SplashScreen
export default function WelcomeScreen() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 3000)
    }, [])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-slate-400">
      <StatusBar style='light' />

      {/* logo */}
      <View className="bg-white/20 rounded-full" style={{padding: hp(5.5)}}>
        <View className="bg-white/20 rounded-full " style={{padding: hp(5)}}>
        <Image source={require("../../assets/images/recipe-icon-png-8.jpg")} style={{width: hp(20), height: hp(20)}}/>
        </View>
        <View className="flex items-center space-y-2">
            <Text style={{fontSize: hp(7)}} className="font-bold text-white tracking-widest">myRecipe</Text>
            <Text style={{fontSize: hp(2)}} className="font-medium text-white tracking-widest">Yummy food for you!</Text>
        </View>
      </View>
    </View>
  )
}