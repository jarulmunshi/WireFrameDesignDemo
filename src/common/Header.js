import React from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../helper/theme/color';
import {WindowsHeight,WindowsWidth} from './global';
const Header = (props) =>{
    const {headerStyle,textStyle} = headerStyles;
    return(
        <View style={headerStyle}>
            <View style={{justifyContent:'center',paddingLeft:WindowsWidth * 0.02}}>
                {props.isBack&&
                <TouchableWithoutFeedback onPress={()=>props.onBackButtonPress()}>
                    <Icon name={props.iName} size={25} style={{color:Color.lightColor,marginLeft:5}}/>
                </TouchableWithoutFeedback>}

            </View>
            <View style={{paddingLeft:WindowsHeight * 0.15,
                          justifyContent:'center',
                          alignItems:'center',}}>
                {/*<Icon style={{paddingRight:5,color:"White"}} name={props.headIcon} size={25}/>*/}
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
            <View style={{flex:1}}>
            </View>
        </View>
    )
};
const headerStyles={
    headerStyle:{
        flexDirection:'row',
        backgroundColor:Color.backColor,
        height:WindowsHeight * 0.05
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:WindowsHeight * 0.03,
        color:Color.lightColor
    }
};
export {Header};