import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import Color from '../helper/theme/color';
const Button1 = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles.buttonStyle}>
            <Text style={buttonStyles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};
const buttonStyles={
    buttonStyle:{
        position:'absolute',
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'white',
        height:43,
        top:'90.7%',
        left:'3%',
        right:'3%',
        justifyContent:'center'
    },
    textStyle:{
        alignSelf:'center',
        fontSize:15,
        color:Color.darkColor,
        fontWeight:'400'
    }
};
export {Button1};





