import { View, Text,Image,StyleSheet, Modal } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading'
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import BusinessModal from './BusinessModal';
export default function BusinessDetailScreen() {
  const param=useRoute().params;
  const [business,setBusiness]=useState(param.business);
  const [showModal,setShowModal]=useState(false);
  const navigation=useNavigation();
  useEffect(()=>{
   
  },[])
  return business&&(
    <View>
        <ScrollView style={{height:'91%'}}>
          <TouchableOpacity style={styles.backBtnContainer} 
          onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" size={35} color="black" />
          </TouchableOpacity>
          <Image source={{uri:business?.images[0]?.url}}
            style={{width:'100%', height:300,marginTop:70, borderRadius:40}}
          />
          <View style={styles.infoContainer}>
            <Text style={{fontFamily:'outfit-bold',fontSize:20}}>{business?.name}</Text>
            <View style={styles.subContainer}>
                  <Text style={{fontFamily:'outfit-medium',fontSize:20, color:Colors.PRIMARY}}>{business?.contactPerson}</Text>
                  <Text style={{fontFamily:'outfit-medium', backgroundColor:Colors.PRIMARY_Light,
                  color:Colors.PRIMARY, padding:5,borderRadius:5,fontSize: 15
                  }}>{business?.category.name}</Text>
            </View>
            <Text style={{fontFamily:'outfit', fontSize:17, color:Colors.GRAY}}> <Ionicons name="location-sharp" size={25} color={Colors.PRIMARY} /> {business?.address}
            </Text>
            {/* Horizontal Line */}
            <View style={{borderWidth:0.4, borderColor:Colors.GRAY, marginTop:10, marginBottom:5}}>
            </View>
            {/* About me  */}
            <BusinessAboutMe business={business}/>
            {/* Horizontal Line */}
            <View style={{borderWidth:0.4, borderColor:Colors.GRAY, marginTop:10, marginBottom:5}}>
            </View>
            <BusinessPhotos business={business}/>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity style={styles.MsgBtn}
          onPress={()=>setShowModal(true)}>
            <Text style={{textAlign:'center', fontFamily:'outfit-medium',fontSize:14,color:Colors.PRIMARY}}
            >Book Now</Text>
          </TouchableOpacity>
        </View>
        {/* Show Modal of Booking  */}
        <Modal
        animationType='slide'
        visible={showModal}
        >
           <BusinessModal hideModal={()=>setShowModal(false)}/>
        </Modal>

    </View>
  )
}
const styles = StyleSheet.create({
  backBtnContainer:{
    position:'absolute',
    padding: 27,
    left: 1,
  },
  infoContainer:{
    padding:20,
    display:'flex',
    gap:7
  },
  subContainer:{
   display:'flex',
   gap:7,
   flexDirection:'row',
   alignItems:'center'
  },
  MsgBtn:{
    padding: 9,
    backgroundColor:Colors.LIGHT_GRAY,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    margin:20,
  },
  
})