import React,{useState,useEffect} from 'react'
import { View, Text,Dimensions,Image,TextInput,StyleSheet,ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import bg1 from '../assets/bg1.png'
import showpass from '../assets/showpass.png'
import hidepass from '../assets/hidepass.png'
import showpass2 from '../assets/showpass2.png'
import hidepass2 from '../assets/hidepass2.png'

var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')
const Usersignup = ({navigation})=> {


    const [emailphone,setEmailPhone] = useState('')
    const [pass,setPass] = useState(0)
    const [confirmpass,setConfirmpass] = useState(0)

    const [toggle,setToggle] = useState(true)
    const [toggle2,setToggle2] = useState(true)

    const [toggleimg,setToggleImg] = useState(hidepass2)
    const [toggleimg2,setToggleImg2] = useState(hidepass2)

    const togglefun = ()=>{
        setToggle(!toggle)
        if(toggleimg==showpass2){
            setToggleImg(hidepass2)
        }
        else{
            setToggleImg(showpass2)
        }

    }

    const togglefun2 = ()=>{
        setToggle2(!toggle2)
        if(toggleimg2==showpass2){
            setToggleImg2(hidepass2)
        }
        else{
            setToggleImg2(showpass2)
        }

    }



    return (
        <View style={styles.container}>
            <ImageBackground source={bg1} style={styles.bgimg}>
                <View style={styles.headingtxtcontainer}>
                    <Text style={styles.headingtxt}>USER ACCOUNT2</Text>
                </View>
                <View style={styles.maincontainer}>
                    <View style={styles.mainheadingcontainer}>
                        <View style={styles.mainheadingcontainer1}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Useraccount')}>
                                <Text style={styles.mainheadingcontainertxt}>Sign in</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.mainheadingcontainertxt2}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainheadingcontainer2}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Userreset')}>
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


                            <View style={styles.passinputcontainer}>
                                <TextInput style={styles.inuputval2}
                                keyboardType="numeric"
                                secureTextEntry={toggle}
                                placeholder="Password"
                                placeholderTextColor="#7E7979"
                                value={pass}
                                onChangeText={(i)=>setPass(i)}
                                >
                                </TextInput>
                                    
                                <View style={styles.eyecontainer}>
                                    <TouchableOpacity onPress={togglefun}>
                                        <Image source={toggleimg}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.passinputcontainer}>
                                <TextInput style={styles.inuputval2}
                                keyboardType="numeric"
                                secureTextEntry={toggle2}
                                placeholder="Confirm Password"
                                placeholderTextColor="#7E7979"
                                value={confirmpass}
                                onChangeText={(i)=>setConfirmpass(i)}
                                >
                                </TextInput>
                                    
                                <View style={styles.eyecontainer}>
                                    <TouchableOpacity onPress={togglefun2}>
                                        <Image source={toggleimg2}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>



                        </View>

                        <View style={styles.btnbottomcontainer}>
                            <View style={styles.btncontainer}>
                                <TouchableOpacity>
                                    <Text style={styles.btntxt}>Sign In</Text>
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

export default Usersignup






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
        paddingHorizontal:10
    },


    mainheadingcontainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingTop:10
    },
    mainheadingcontainer1:{
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:"yellow",
        width:width/3
    },
    mainheadingcontainertxt:{
        // fontSize:12
        // fontWeight:'bold'
    },
    mainheadingcontainertxt2:{
        fontWeight:'bold'
    },
    mainheadingcontainertxt3:{

    },
    inputcontainer:{
        // backgroundColor:"yellow",
        height: height/4,
        justifyContent:'space-around',
        marginTop:10
    },
    passinputcontainer:{
        flexDirection:'row'
    },
    inuputval:{
        fontSize:12,
        backgroundColor:"#EAE9E9",
        color:'#7E7979',
    }, 
    inuputval2:{
        fontSize:12,
        backgroundColor:"#EAE9E9",
        color:'#7E7979',
        width:width/1.4
    },
    eyecontainer:{
        justifyContent:'center',
        backgroundColor:"#EAE9E9",
        alignItems:'center',
        // backgroundColor:'yellow'
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
        height:height/3.50,
        justifyContent:'space-around'
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

















