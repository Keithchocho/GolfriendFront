import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const commentScreen = ({navigation}) =>{
    return(
        <View style ={style.maincontainer}>
            <View style ={{flexDirection:"row", justifyContent:"space-between", marginTop:20 }}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon style={{marginLeft:20, marginTop:43}} name = 'chevron-back' size ={25} color ={'#000'} />
            </TouchableOpacity>
             </View>   
            <ScrollView showsVerticalScrollIndicator={false}>

            </ScrollView>
        </View>
    );
}

export default commentScreen;


const style = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"#FFF"
    },
    
});