import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontSize:17,fontFamily:'outfit-medium'}}>{business?.name}</Text>
        <Text style={{fontSize:13,fontStyle:'italic',
            backgroundColor:Colors.LIGHT_GRAY,
            padding:3,
            borderRadius:3,
            alignSelf:'flex-start',
            paddingHorizontal:7
        }}>{business?.category.name}</Text>
        <Text style={{fontSize:10,fontFamily:'outfit-bold', padding:3,
            color:Colors.PRIMARY
        }}>{business?.contactPerson}</Text>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:10
    },
    infoContainer:{
        padding:7,
        display:'flex',
        gap:3
    },
    image:{
        width:160,
        height:100,
        borderRadius:10
    }
})