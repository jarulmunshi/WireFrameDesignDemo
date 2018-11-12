import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import Color from '../helper/theme/color';
const Button = ({onPress,children}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles.buttonStyle}>
            <Text style={buttonStyles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};
const buttonStyles={
    buttonStyle:{
        position:'absolute',
        backgroundColor:Color.darkColor,
        borderWidth:1,
        borderColor:Color.darkColor,
        height:43,
        top:'82.5%',
        left:'3%',
        right:'3%',
        justifyContent:'center'
    },
    textStyle:{
        alignSelf:'center',
        fontSize:20,
        color:"white",
        fontWeight:'400'
    }
};
export {Button};





