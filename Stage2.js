import React from 'react'
import { View, Text,Dimensions,Image,TextInput,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native'

import Delivery from '../assets/Delivery.png'

var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const Stage2 = ({navigation})=> {
    return (
        <View style={styles.stag1container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomcontainer}>
                <View style={styles.imgcontainer}>
                    <ImageBackground source={Delivery} style={styles.bgimg}>
                        <Text style={styles.txt1}>FAST DELIVERY</Text>
                        <Text style={styles.txt2}>WITH TRACKING</Text>
                    </ImageBackground>
                </View>
                <View style={styles.btncontainer}>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.skiptxt}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nexttxtcontainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Stage3')}>
                            <Text style={styles.nexttxt}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Stage2






const styles = StyleSheet.create({
    stag1container:{
        flex:1,
        // backgroundColor:"yellow",
        // justifyContent:'center',
        // alignItems:'center'
    },

    headercontainer:{
        flex:0.05,
        justifyContent:'center'
    },
    bottomcontainer:{
        flex:0.95,
        // backgroundColor:'pink'
    },
    imgcontainer:{
        flex:0.90,
        // backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center'
    },

    bgimg:{
        width:width/1.1,
        height:height/1.5,
        justifyContent:'flex-start',
        alignItems:'flex-end',
        // flexDirection:'row',
        
    },
    txt1:{
        // fontWeight:'bold',
        fontSize:30,
        color:'#297E8E',
        top:-65,
    },
    txt2:{
        // fontWeight:'bold',
        fontSize:18,
        color:'#297E8E',
        alignSelf:'flex-end',
        width:width/2.20,
        // backgroundColor:'yellow',
        top:-65
    },
    btncontainer:{
        flex:0.05,
        // backgroundColor:'green',
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:20,
        // marginTop:10,
        alignItems:'center'
    },

    skiptxt:{
        // fontWeight:'bold',
        fontSize:16,
        color:'#297E8E',
    },
    nexttxt:{
        fontWeight:'bold',
        fontSize:16,
        color:'#297E8E',
        // borderColor:'#297E8E',
        // borderWidth:2,
        paddingHorizontal:10,
        // paddingVertical:10,
        // alignSelf:'center'
    },
    nexttxtcontainer:{
        // backgroundColor:"yellow",
        marginTop:2,
        justifyContent:'center',
        borderRadius:5,
        borderColor:'green',
        borderWidth:2
    }
    
})
















