import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity,ScrollView,StatusBar} from 'react-native';
import {Card,CardSection,Button,Header} from './common/Common';
import Color from './helper/theme/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WindowsHeight,WindowsWidth} from './common/global';
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            isBack:true,
            iName:'arrow-left'
        };
        console.log("ID:"+this.state.id);
    }
    onBackButtonPress=()=>{
        this.props.navigation.goBack();
    };
    render(){
        //debugger;
        //console.log(this.props.userDetail);
        return(
            <SafeAreaView style={{backgroundColor:Color.backColor}}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                {/*<StatusBar backgroundColor="black" barStyle="dark-content"></StatusBar>*/}
                <ScrollView>
                    <Header
                        headerText="SIGN UP"
                        onBackButtonPress={this.onBackButtonPress}
                        isBack={this.state.isBack}
                        iName={this.state.iName}
                    />
                    <View style={styles.viewStyle}>
                        <View style={styles.subViewStyle}>
                            <Text>CHOOSE YOUR ACCOUNT TYPE</Text>
                        </View>
                        <View style={{borderBottomWidth:0.5,borderBottomColor:Color.backColor,height:WindowsHeight/7,flexDirection:'row',left:'2%'}}>
                            <View style={{width:WindowsWidth}}>
                                <Text style={styles.textHeadStyle}>NIGHTLIFER</Text>
                                <Text style={styles.subTextStyle}>Discover the hottest nightclubs, bars, & events and connect with nightlife’s top influencers</Text>
                            </View>
                            <View style={{justifyContent:"center",right:'2%',width:WindowsWidth/6}}>
                                <Icon style={{color:"White"}} name="chevron-right" size={25}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}
const styles={
    viewStyle:{
        backgroundColor:Color.lightColor,
        height:WindowsHeight,
    },
    subViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        height:WindowsHeight/16
    },
    textHeadStyle:{
        color:Color.darkColor,
        fontSize:18,
        top:'20%',
        right:'4%',
        left:'3%'
    },
    subTextStyle:{
        color:Color.backColor,
        fontSize:14,
        top:'38%',
        right:'17%',
        left:'3%'
    }
};

export default SignUp;
