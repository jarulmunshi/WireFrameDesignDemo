import React from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../helper/theme/color';
import {WindowsHeight,WindowsWidth} from './global';
const Header = (props) =>{
    const {headerStyle,textStyle} = headerStyles;
    return(
        <View style={headerStyle}>
            <View style={{left:'10%',justifyContent:'center'}}>
                {props.isBack&&
                <TouchableWithoutFeedback onPress={()=>props.onBackButtonPress()}>
                    <Icon name={props.iName} size={25} style={{color:Color.lightColor,marginLeft:5}}/>
                </TouchableWithoutFeedback>}

            </View>
            <View style={{left:WindowsWidth/3,flexDirection:'row',paddingTop:5,alignItems:'center',justifyContent:'center'}}>
                <Icon style={{paddingRight:5,color:"White"}} name={props.headIcon} size={25}/>
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
        height:WindowsHeight/10
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:20,
        color:Color.lightColor,

    }
};
export {Header};