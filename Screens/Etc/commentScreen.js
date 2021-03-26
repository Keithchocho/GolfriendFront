import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { event } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

import useInputV2 from './useInputV2';











const commentScreen = ({navigation}) => {
    
    const [names, setNames] = useState([
    {   name :'홍길동',
        Text : '1' },
   {   name :'고길동',
        Text : '2' }]);

    const [commenting, setCommenting ] = useState(false);
    const [likeColor, setLikeColor ] = useState(false);
  
    const [comment, setComment ] = useState(null);
    const [ inputText , setInputText ] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(names);
    }, [])
    const [nextId , setNextId] =useState('민제킴');
    const onChangeText  =  e => setInputText(e);
    const commentList = names.map((item, index)=> <Text key={index} >{item.name} {item.Text} <Icon onPress ={()=>{setLikeColor(true)}} 
    name ={ likeColor? "heart" : "heart-outline" }size={15} color={likeColor ? "#ff0000" : "#000"}  /></Text>);
                                            
    
    const onClick =()=>{
        const nextText = names.concat({
                    name : '김민제',
                    Text : inputText
                
        });
        setNames(nextText);
        setInputText('');
    };
      
        // setData([
        //     ...data,
        //     {
        //         'name': '김민제',
        //         'Text': inputText
        //     },
           
        // ]);
        // setInputText('');
    // };

    



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
                            <View style ={styles.EditorContainer}>
                                <Text></Text>
                                <TextInput onChangeText={onChangeText} value={inputText} style={{flex: 1}} multiline placeholder={"댓글 달기.."}></TextInput> 
                                <TouchableOpacity style={{width: 50}} onPress={onClick}>
                                    <Text style={{color:"#00bfff" }}>게시</Text>
                                </TouchableOpacity>
                               
                            </View>
                            {commentList}
                   
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
        marginTop:10,
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
        flex:1
    }
});