import React,{Component} from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity,ScrollView,StatusBar} from 'react-native';
import {Header} from './common/Common';
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
                <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
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
                        <View style={{borderBottomWidth:0.5,borderBottomColor:Color.backColor,flexDirection:'row',left:WindowsWidth * 0.03}}>
                            <View style={{width:WindowsWidth * 0.75}}>
                                <Text style={styles.textHeadStyle}>NIGHTLIFER</Text>
                                <Text style={styles.subTextStyle}>Discover the hottest nightclubs, bars, & events and connect with nightlife’s top influencers</Text>
                            </View>
                            <View style={{justifyContent:"center",paddingLeft:WindowsWidth * 0.14,width:WindowsWidth * 0.25}}>
                                <Icon style={{color:"White"}} name="chevron-right" size={25}/>
                            </View>
                        </View>
                        <View style={{borderBottomWidth:0.5,borderBottomColor:Color.backColor,flexDirection:'row',left:WindowsWidth * 0.03}}>
                            <View style={{width:WindowsWidth * 0.75}}>
                                <Text style={styles.textHeadStyle}>VENUE OR INFLUENCER</Text>
                                <Text style={styles.subTextStyle}>Take your digital brand to the next level by managing your custom channel and uploading events</Text>
                            </View>
                            <View style={{justifyContent:"center",paddingLeft:WindowsWidth * 0.14,width:WindowsWidth * 0.25}}>
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
        paddingTop:WindowsHeight * 0.03,
        paddingLeft:WindowsWidth * 0.03
    },
    subTextStyle:{
        color:Color.backColor,
        fontSize:14,
        paddingTop:WindowsHeight * 0.03,
        paddingLeft:WindowsWidth * 0.03,
        paddingBottom:WindowsHeight * 0.02
    }
};

export default SignUp;
