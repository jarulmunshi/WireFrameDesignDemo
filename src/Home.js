import React,{Component} from 'react';
import {Text,View,ImageBackground,Dimensions,SafeAreaView,ScrollView,TouchableOpacity,Image,StyleSheet} from 'react-native';
import {Button,Button1} from './common/Common'
class Home extends Component{

    render(){
        return(
            <View style={styles.viewStyle}>
                <ImageBackground source={require('./../images/Bg1.png')} style={{
                    bottom: '18%',
                    width:'100%',
                    height:'100%',
                    opacity:0.7
                }}>
                </ImageBackground>
                <Image source={require('./../images/bgUp.png')} style={{
                    position: 'absolute',
                    left: '6.67%',
                    right: '6.51%',
                    top: '23.45%',
                    bottom: '46.1%'}}/>
                <Text style={styles.textStyle}>MODERNIZING NIGHTLIFE,LIKE NEVER BEFORE</Text>
                <Button>LOGIN WITH KRAWL</Button>
                <Button1 onPress={()=>this.props.navigation.navigate('SignUp')}>SIGN UP</Button1>
                {/*<Button> SIGN UP</Button>*/}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        position:'absolute',
        top:'63%',
        color:'rgb(36, 36, 36)',
        fontWeight:'600',
        fontSize:32,
        left:'4.8%',
        right:'4.85%'
    }
});
export default Home;
