import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header() {
    const {user,isLoading}=useUser();
  return user&& (
    <View style={styles.container}>
        {/*profile Section*/}
        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                <Image source={{uri: user?.imageUrl}}
                style={styles.userImage}/>
                <View>
                    <Text style={{color:Colors.WHITE, fontFamily:'outfit'}}> Welcome,</Text>
                    <Text style={{color:Colors.WHITE, 
                    fontSize:20,fontFamily:'outfit-medium'}}>{user?.fullName}</Text>
                </View>
            </View>
      <FontAwesome6 name="bookmark" size={24} color="white" />
      </View>
      {/* Search Bar Section*/}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder='Search' style={styles.textInput}/>
        <FontAwesome name="search"
        style={styles.searchBtn}
        size={24} color={Colors.PRIMARY} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileMainContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    textInput:{
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 20,
        width: '90%',
        fontSize: 16,
        fontFamily: 'outfit'
    },
    searchBarContainer:{
        marginTop: 15,
        direction: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginBottom: 10
    },
    searchBtn:{
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 20
    },
    userImage:{
        width: 45,
        height: 45,
        borderRadius:99
    }
})