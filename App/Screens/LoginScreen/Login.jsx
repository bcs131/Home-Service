import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();
export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View style={{alignItems:'center',width:'100%', height:'100vh'}}>
        <Image source={require('./../../../assets/images/login.png')}
           style={styles.loginImage}
       />
       <View style={styles.subContainer}>
        <Text style={{fontSize:27, color:Colors.WHITE,
         textAlign:'center'}}>Let's Find 
        <Text style={{fontWeight:'bold'}}> Professional Cleaning and Repairing 
        </Text> Service
        </Text>
        <Text style={{fontSize:17,color:Colors.WHITE,textAlign:'center',marginTop:20
        }}>Best App to find services near you which deliver you the professional 
            service
        </Text>

        <TouchableOpacity style={styles.button} 
        onPress={onPress} >
            <Text style={{textAlign:'center',fontSize:17,
            color:Colors.PRIMARY}}>Let's Get Started</Text>
        </TouchableOpacity>

       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:430,
        marginTop:100,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15
    },
    subContainer:{
        width:'100%',
        height:'50%',
        backgroundColor:Colors.PRIMARY,
        marginTop:-10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding: 20,
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40,
    },
})