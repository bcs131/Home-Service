import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../Utils/Colors';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}>
        <Tab.Screen name='home' component={HomeNavigation}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Home</Text>
            ),
            tabBarIcon:({color,size})=>(
                <Ionicons name="home" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='booking' component={BookingScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Booking</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="bookmark" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Profile</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome6 name="user-tie" size={size} color={color} />
            )
        }}
        />
    </Tab.Navigator>
  )
}