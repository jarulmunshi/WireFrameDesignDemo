import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './../../Home';
import SignUp from './../../SignUp';
const stack = createStackNavigator(
    {
        Home:{
            screen:Home
        },
        SignUp:{
            screen:SignUp
        }
    },
    {
        initialRouteName:'Home',
        headerMode:'none'
    }
);

export default stack;