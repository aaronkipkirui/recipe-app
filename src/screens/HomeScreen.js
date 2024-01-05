import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-light">
      <StatusBar style='dark' />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14">
              {/* user avatar */}
              <View className="mx-4 flex-row justify-between items-center mb-2">
                  <Image source={require("../../assets/icon.png")} style={{ height: hp(5), width: hp(5.5) }} />
              </View>
              <View className="mx-4 space-y-2 mb-2">
                <Text style={{fontSize: hp(1.7)}} className="text-neutral-600">Hello, there!</Text>
                <View>
                    <Text>Make a delicious meal</Text>
                </View>
              </View>
        </ScrollView> 
    </View>
  )
}