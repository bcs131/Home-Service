import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function BusinessListItem({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}
      />
      <View style={styles.subContainer}>      
        <Text style={{fontSize:15,fontFamily:'outfit',color:Colors.GRAY}}>{business.contactPerson}</Text>
        <Text style={{fontSize:19,fontFamily:'outfit-bold'}}>{business.name}</Text>
        <Text style={{fontSize:15, fontFamily:'outfit',color:Colors.GRAY}}><Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
        {business.address}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        borderRadius:15,
        backgroundColor:Colors.WHITE,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap: 10
    },
    subContainer:{
        textAlign:'center',
        gap:9,
        display:'flex'
    },
    image:{
        width:100,
        height:100,
        borderRadius:15
    }
})