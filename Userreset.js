import React,{useState,useEffect} from 'react'
import { View, Text,Dimensions,Image,TextInput,StyleSheet,ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import bg1 from '../assets/bg1.png'


var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')
const Userreset = ({navigation})=> {


    const [emailphone,setEmailPhone] = useState('')
    const [pass,setPass] = useState(0)

    return (
        <View style={styles.container}>
            <ImageBackground source={bg1} style={styles.bgimg}>
                <View style={styles.headingtxtcontainer}>
                    <Text style={styles.headingtxt}>USER ACCOUNT3</Text>
                </View>
                <View style={styles.maincontainer}>
                    <View style={styles.mainheadingcontainer}>
                        <View style={styles.mainheadingcontainer1}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Useraccount')}>
                                <Text style={styles.mainheadingcontainertxt}>Sign in</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>navigation.navigate('Usersignup')}>
                                <Text style={styles.mainheadingcontainertxt2}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainheadingcontainer2}>
                            <TouchableOpacity>
                                <Text style={styles.mainheadingcontainertxt3}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.bottomcontainer}>
                        <View style={styles.inputcontainer}>
                            <TextInput style={styles.inuputval}
                            keyboardType="numeric"
                            // secureTextEntry
                            placeholder="Email ID / Phone Number"
                            placeholderTextColor="#7E7979"
                            value={emailphone}
                            onChangeText={(i)=>setEmailPhone(i)}>
                            </TextInput>
                        </View>
  
                        <View style={styles.btnbottomcontainer}>
                            <View style={styles.btncontainer}>
                                <TouchableOpacity>
                                    <Text style={styles.btntxt}>Reset Password</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.loginwithgoogletxtcontainer}>
                                <TouchableOpacity>
                                    <Text style={styles.loginwithgoogletxt}>Login with Google</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default Userreset






const styles = StyleSheet.create({
    container:{
        flex:1,
        // opacity:.5
    },

    bgimg:{
        // width:width/1.01,
        height:height/1.001,
        // justifyContent:'center',
        alignItems:'center',
        // opacity:.7,
    
    },
    headingtxtcontainer:{
        flex:0.2,
        justifyContent:'center'
    },
    headingtxt:{
        fontSize:20,
        color:'#FFFFFF',
        fontWeight:'bold'
    },  
    maincontainer:{
        flex:0.60,
        backgroundColor:'#FFFFFF',
        width:width/1.2,
        paddingHorizontal:10,
        
    },


    mainheadingcontainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        // backgroundColor:'pink',
        // alignItems:'center',
        paddingTop:10
    },
    mainheadingcontainer1:{
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:"yellow",
        width:width/3
    },
    mainheadingcontainertxt:{
        // fontSize:12,
        
    },
    mainheadingcontainertxt2:{
        
    },
    mainheadingcontainertxt3:{
        fontWeight:'bold'
    },
    inputcontainer:{
        // backgroundColor:"yellow",
        height: height/5,
        justifyContent:'space-around',
        // marginTop:10
    },
    inuputval:{
        fontSize:12,
        backgroundColor:"#EAE9E9",
        color:'#7E7979',
    }, 
    reqotptxtcontainer:{
        // backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    reqotp:{
        color:'#DD4128',
        fontSize:10
    },
    btnbottomcontainer:{
        // backgroundColor:'yellow',
        height:height/3,
        justifyContent:'space-between'
    },
    btncontainer:{
        backgroundColor:'#DD4128',
        justifyContent:'center',
        paddingVertical:10,
        alignItems:'center'
    },
    btntxt:{
        color:'#FFFFFF'
    },
    loginwithgoogletxtcontainer:{
        justifyContent:'center',
        alignItems:'center',
    
    },
    loginwithgoogletxt:{
        color:'#0A01F3'
    }
})

















