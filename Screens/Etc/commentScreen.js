import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

import useInputV2 from './useInputV2';





const DATA = [
    { 'name' : 'Keith',
      'Text' : '1' }, 
    {'name': '35king',
     "Text": " 2"}, 
    { 'name': '감자국SB',
    "Text": " 3" },
    { 'name': '김니꾸',
    "Text": " 4" },
    { 'name': '뚱이',
    "Text": " 5" }];




const Loader =()=>{
    return(
        <View style={{flex:1, justifyContent: "center", alignItems: "center" , backgroundColor:"#FFFFFF"}}>
              <ActivityIndicator color={"#000"} />
        </View>
    );
};


const commentScreen = ({navigation}) => {

    const [commenting, setCommenting ] = useState(false);
    const commentInput =  useInputV2(" ");
    const [comment, setComment ] = useState(null);


    const addComment = async () =>{
        if(commentInput.value !== " " && commenting == false ){
            setCommenting(true);
            try {
                const { data : {
                    addComment
                }} = await 
                Keyboard.dismiss();
            } catch(e){
                console.log(e)
            } finally {
                setCommenting(false)
            }
        }
    }
    const KeyboardDidHide = () =>{
        navigation.goBack();
    }

    useEffect(()=> {
        Keyboard.addListener('keyboardDidHide', KeyboardDidHide);
        return () => {
            Keyboard.removeListener('keyboardDidHide', KeyboardDidHide);
        }
    },[])


    return(
        <View style ={styles.maincontainer}>
            <View style ={{flexDirection:"row", justifyContent:"space-between", marginTop:20, marginLeft:-375 }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon style={{marginLeft:20, marginTop:43}} name = 'chevron-back' size ={25} color ={'#000'} />
            </TouchableOpacity>
             </View>   
            <ScrollView 
            style={styles.ScrollViewBox}
            showsVerticalScrollIndicator={false}>
                {/* {DATA.map((item, index) => ({item[0]}))}  */}
                   
                <KeyboardAvoidingView>
                    <View style ={styles.container}>
                        <View style ={{flex:1}}>
                            <TouchableOpacity onPress={Keyboard.dismiss} style={{height:"100%"}} />
                        </View>
                        {DATA.map((item, index) => 
                            <View style ={styles.EditorContainer}>
                                <Text key={item}>{item.name}</Text>
                                <TextInput  style={{flex: 1}} multiline placeholder={"댓글 달기.."} autoFocus={true} key={DATA.index}>  {item.Text}</TextInput> 
                                <TouchableOpacity style={{width: 50}}>
                                    <Text style={{color:"#00bfff" }}>게시</Text>
                                </TouchableOpacity>
                            </View>)}
                   
                    </View>

                </KeyboardAvoidingView>    
            
                
                    
                
            </ScrollView>
        </View>
    );
}

export default commentScreen;


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"#FFF",
        justifyContent:'center',
        alignItems:'center'
    },
    ScrollViewBox:{
        width:"90%",
        marginTop:10
    },

    EditorContainer:{
        padding:5,
        minHeight:65,
        borderTopColor:"#a9a9a9",
        borderTopWidth:0.25,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#FFF"
    },
    AvatarImage:{
        height:30,
        width:30,
        borderRadius:15,
        marginTop:10,
        marginLeft:10,
        padding:10,
        borderWidth:1

    },
    container:{
        backgroundColor:"rgba(0,0,0,0.5)",
        flex:1
    }
});