import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Login from '../screens/Login/Login';
import Workout from '../screens/coach/workout/Workout';
import AddWorkout from '../screens/coach/workout/AddWorkout';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

  function MyStack() {
  return (
    <Stack.Navigator>
     

    <Stack.Screen name="Workout" component={Workout} /> 
    <Stack.Screen name="AddWorkout" component={AddWorkout} /> 

    
  
    </Stack.Navigator>
  );
}

export default function coach({navigation}) {
    return (
      
        <Tab.Navigator
        activeColor='red'
        style={{ backgroundColor: 'tomato' }}
        barStyle={{ backgroundColor: '#fff' }}
        >
          
          <Tab.Screen name="Profile" component={MyStack} 
             options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="md-home" size={26} color={color} />
                ),
              }} />
          <Tab.Screen name="Workout" component={Login} 
           options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
                <Ionicons name="md-home" size={26} color={color} />
            ),
          }}
          />
          
        </Tab.Navigator>
      
      
    );
  }