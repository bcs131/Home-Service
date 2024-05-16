import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text,isViewAll=false}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.heading}>
        {text}
      </Text>
     {isViewAll&& <Text>
        View All
      </Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    heading:{
        fontSize: 20,
        fontFamily:'outfit-medium',
        marginBottom: 10
      }
    
})