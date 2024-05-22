import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors';
import React, { useState,useEffect } from 'react'

export default function BusinessAboutMe({business}) {
    const [isReadMore,setIsReadMore]=useState(false);
  return business&& (
    <View>
          <Heading text={'About me'}/>
          <Text style={{fontFamily:'outfit', lineHeight:28,
           color:Colors.GRAY, fontSize: 13}} numberOfLines={isReadMore?8:3} >{business.about}</Text>
           <TouchableOpacity onPress={()=>setIsReadMore(!isReadMore)}>
           <Text style={{fontFamily:'outfit',color:Colors.PRIMARY}}>{isReadMore?'Read Less':'Read More'}</Text>
           </TouchableOpacity>
        </View>
  )
}