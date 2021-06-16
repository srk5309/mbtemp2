import React from 'react'
import { View, Text,StyleSheet,Image,ImageBackground,TouchableOpacity,Dimensions,TextInput } from 'react-native'

import bg1 from '../assets/bg1.png'
import user from '../assets/user.png'
import corporate from '../assets/corporate.png'
import vendor from '../assets/vendor.png'

var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')
const Continueas = ({navigation})=> {
    return (
        <View style={styles.container} >
            <ImageBackground source={bg1} style={styles.bgimg}>
                <View style={styles.headingtxtcontainer}>
                    <Text style={styles.headingtxt}>Continue as one of the following</Text>
                </View>

                <View style={styles.maincontainer}>
                    <View style={styles.singlecontainer}>
                        <Image source={user}></Image>
                        <TouchableOpacity onPress={()=>navigation.navigate('Useraccount')}>
                            <View style={styles.singletxtcontainer}>
                                <Text style={styles.singletxt}>User</Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.singlecontainer}>
                        <Image source={corporate}></Image>
                        <View style={styles.singletxtcontainer}>
                            <Text style={styles.singletxt}>Corporate</Text>
                        </View>
                    </View>


                    <View style={styles.singlecontainer}>
                        <Image source={vendor}></Image>
                        <View style={styles.singletxtcontainer}>
                            <Text style={styles.singletxt}>Vendor</Text>
                        </View>
                    </View>

                </View>



            </ImageBackground>
        </View>
    )
}

export default Continueas




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
        opacity:.99,
    },
    headingtxtcontainer:{
        flex:0.2,
        justifyContent:'center'
    },
    headingtxt:{
        fontSize:25,
        color:'#FFFFFF'
    },  
    maincontainer:{
        flex:0.8,
        justifyContent:'space-around'
    },
    singlecontainer:{
        width:width/1.50,
        // height:height/,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'black',
        alignItems:'center',
        flex:0.2,
        opacity:0.8,
        marginBottom:5
    },
    singletxtcontainer:{
        backgroundColor:'#297E8E',
        width:width/4,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5
    },
    singletxt:{
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'bold',
        
    }
    

})

















