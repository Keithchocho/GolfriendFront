
import React, { Component, useContext, useEffect, useState } from 'react';
import { Modal, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../Context/AuthContext';
import axios from 'axios';


const SERVER_IP = "121.138.83.4";

const ProfileScreen =({navigation}) =>{

        const { signOut } = useContext(AuthContext);
        // const { getJWT } = useContext(AuthContext);
        // const [data, setData] = useState(null);
    
        // // 데이터 가져오는 useEffect
        // useEffect(() => {
            
        //     (async () => {
        //         const userToken = await getJWT();
        //         await axios.get(`http://${SERVER_IP}:80/latest-swing`, {
        //             headers: {
        //                 Authorization: `Bearer ${userToken}`
        //             }
        //         })
        //         .then(res => {
        //             console.log(res.data);
        //             setData(res.data);
        //         });
        //     })();
            
        //     console.log("최근 분석 useEffect 실행");
        // });

        return ( 
                <View style={styles.container}> 
                    <View style={styles.loginView}>
                        <Text style={styles.loginText}> @@ 님 환영합니다.</Text>
                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <Icon name = "arrow-back-outline" size ={30} style={{marginLeft:150}}/>
                            </TouchableOpacity>
                    </View>
                   


                    {/* <View style ={styles.smallView}>
                        필요하면 주석 풀어서 사용하세요.
                    </View> */}
                    
                    <View style ={styles.smallView}>
                        <Icon name="settings-outline" size={30}style={styles.iconStyle}/>
                        <Text style={styles.informationText}>개인정보 수정</Text>
                        <TouchableOpacity>
                            <Icon name="chevron-forward-outline" size={30}style={styles.settingArrowIcon}/>
                        </TouchableOpacity>

                    </View>

                    <View style ={styles.smallView}>
                        <Icon name="information-circle-outline" size={30}style={styles.iconStyle}/>
                        <Text style={styles.informationText}>Golfriend 소개</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('NoDoubt')}}>
                            <Icon name="chevron-forward-outline" size={30}style={styles.arrowIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style ={styles.smallView}>
                        <Icon name="log-out-outline" size={30}style={styles.iconStyle}/>
                        <Text style={styles.informationText}>로그아웃 </Text>
                        <TouchableOpacity onPress ={signOut}>
                            <Icon name="chevron-forward-outline" size={30}style={styles.arrowLogoutIcon}/>
                        </TouchableOpacity>

                    </View>
                    
              
                </View>
        );
    
};

export default ProfileScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(52, 52, 52, 0.0001)'
    },
    safeAreaView:{
        backgroundColor:"#FFF",
        width:"100%", 
        height:60,  
        alignItems:'flex-start', 
        shadowColor:"#000",
        shadowOffset:{
           
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:.84,
        elevation:5,
        justifyContent:'center'
    },
    loginView:{
        width:"100%",
        height:150,
        backgroundColor:"#FFF",
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        
    },
    loginText:{
        fontSize:21,
        fontWeight:'600',
        textAlign:'center',
        marginLeft:21
    },
    informationText:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        marginLeft:10
    },
    iconStyle:{
        marginLeft:20
    },
    arrowIcon:{
        marginLeft:20,
        color:'#a9a9a9',
        marginLeft:180
    },
    settingArrowIcon:{
        marginLeft:20,
        color:'#a9a9a9',
        marginLeft:190
    },
    arrowLogoutIcon:{
        marginLeft:20,
        color:'#a9a9a9',
        marginLeft:225
    },
    smallView:{
        width:"100%",
        height:60,
        backgroundColor:"#FFF",
        marginTop:8,
        flexDirection:'row',
        alignContent:'center',
        alignItems: 'center'
    }
});