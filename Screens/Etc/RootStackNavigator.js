import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from '../MainNavigator';
import ProfileScreen from './ProfileScreen';
import golfriend from './golfriendInfo';
import { createPortal } from 'react-dom';
import commentScreen from './commentScreen';



const TestStack = createStackNavigator();
const TestScreen = () => {
  return (
    <TestStack.Navigator headerMode='none' >
      <TestStack.Screen name="Profile" component={ProfileScreen} />
      <TestStack.Screen name="Nodoubt" component={golfriend} />
    </TestStack.Navigator>
  )
}


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode = 'None'>
        <RootStack.Screen name = 'MainNavigator' component ={MainNavigator}/>
        <RootStack.Screen name = 'Profile' component ={ProfileScreen}/>
        <RootStack.Screen name= "NoDoubt" component={golfriend} />
        <RootStack.Screen name = "CommentScreen" component={commentScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;