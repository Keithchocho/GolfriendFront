import React, { Component } from 'react';
import { 
    NativeAppEventEmitter, 
    Share,
    StatusBar, 
    TouchableOpacity, 
    Dimensions, 
    SafeAreaView,
    StyleSheet, 
    View, 
    Text,  
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useState } from "react";
import { set } from "react-native-reanimated";

const DATA = [{ 'user1' : 'Keith' }, {'user2': '35king'}, { 'user3': '감자국SB' },{ 'uesr4': '김니꾸' },{ 'user5': '뚱이' }];


const ShareFunction = () => {
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            '내 스윙 어떄?! 친구와 함께 공유하세요. GolFriend!',
    
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    }
};


const UserSwingDataScreen = ({navigation}) =>{
    const video = React.useRef(null);
    const [ status, setStatus ] = React.useState({});
    const [likeColor, setLikeColor ] = useState(false);
    let [ like, setLike ] = useState(0);
    
  

    return(
        <View style={styles.maincontainer}> 
        <StatusBar backgroundColor ={"#FFF"} barStyle={"dark-content"}></StatusBar>
        <View style ={{flexDirection:"row", justifyContent:"space-between", marginTop:20 }}>
            <Text style={styles.Text}>Golfriend</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon style={{marginRight:31, marginTop:43}} name = 'arrow-back' size ={25} color ={'#000'} />
            </TouchableOpacity>
        </View>         
        
       <ScrollView style={styles.container}>
            <View style={styles.InstaContainer}> 
                <View style ={styles.userIconBox}>
                    <View style={styles.userIcon} />
                    <Text style={styles.instaHeadText}>  {DATA.map((item, index) => (item['user2']))}  님의 스윙영상</Text>
                </View>
                <View style={styles.instaVideoContainer}>
                    <Video
                            ref={video}
                            style={styles.video}
                            source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isMuted
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                </View>
                <View style ={styles.iconContainer}> 
                    <TouchableOpacity onPress={()=>{setLikeColor(true), setLike(like + 1)}}>
                        <Icon name ={ likeColor? "heart" : "heart-outline" }size={30} color={likeColor ? "#ff0000" : "#000"} style={{marginLeft:10,marginTop:5}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={()=> {navigation.navigate('CommentScreen')}}>
                        <Icon name ="chatbubbles-outline" size={30}style={{marginLeft:10,marginTop:5}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name ="ios-share-social" size ={30}style={{marginLeft:280,marginTop:5}}/>
                    </TouchableOpacity>
                </View>
                <Text style={{marginLeft:10}}> { like } Likes</Text>
            </View>

        </ScrollView>
    </View>  
    );
}


export default UserSwingDataScreen;



const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"column",

    },
    container:{
        flex:1,
        backgroundColor:'#FFF',
        marginTop:30
    },
    Text :{
        fontSize:25,
        fontWeight:'bold',
        marginHorizontal:31,
        marginTop:30,
        textAlign:"left"
    }, 
    firstScrollContainer:{
        height:100,
        width:"100%"
    },
    video: {
    alignSelf: 'center',
    width: "100%",
    height: "100%",
  },
  InstaContainer:{
      width:"100%",
      height:650,
      marginTop:15,
      borderBottomWidth:1,
      marginBottom:30
  },
  instaHeadText:{
      fontSize:15,
      marginLeft:10,
      marginTop:10
  },
  instaVideoContainer:{
      width:"100%",
      height:380,
      marginTop:10,
      backgroundColor:"rgba(56, 56, 56, 0.13)"
  },
  iconContainer:{
      flexDirection:"row",
      marginTop:15
  },
  userIconBox:{
      flexDirection:"row",
      marginBottom:10
  },
  userIcon:{
      height:50,
      width:50,
      borderRadius:100,
      borderWidth:1,
      marginLeft:20
  }
});