import { View, Text, Pressable, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import PageHeading from '../../Components/PageHeading';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import { ScrollView } from 'react-native';

export default function BusinessModal({ hideModal }) {
  const [timeList, setTimeList] = useState([]);
  const [selectTime, setSelectTime]=useState();
  const [selectDate, setSelectDate]=useState();
  const [note, setNote]=useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM',
      });
      timeList.push({
        time: i + ':30 AM',
      });
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ':00 PM',
      });
      timeList.push({
        time: i + ':30 PM',
      });
    }
    setTimeList(timeList);
  };

  const handleConfirmBooking = () => {
    // Handle the booking confirmation logic here
    console.log('Booking confirmed with date:', selectDate, 'time:', selectTime, 'note:', note);
  };

  return (
    <ScrollView>
        <KeyboardAvoidingView style={{ padding: 20 }}>
          <Pressable
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 15 }}
            onPress={() => hideModal()}
          >
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
          </Pressable>
          {/* Calender */}
          <Heading text={'Date ?'} />
          <View style={styles.calendar}>
            <CalendarPicker
              onDateChange={setSelectDate}
              width={300}
              minDate={Date.now()}
              todayBackgroundColor={Colors.PRIMARY_Light}
              todayTextStyle={{ color: Colors.WHITE }}
              selectedDayColor={Colors.PRIMARY}
              selectedDayTextColor={Colors.WHITE}
            />
          </View>

          {/* select Time */}
          <View style={{marginTop:10}}>
              <Heading text={'Select Time Slot'}/>
              <FlatList
                  data={timeList}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index})=>(
                    <Pressable style={{marginRight:9}}
                    onPress={()=>setSelectTime(item.time)}>
                      <Text style={[selectTime==item.time?
                        styles.selectTime:styles.unselectTime]}>{item.time}</Text>
                    </Pressable>
                  )}
            />
        </View>
        
        {/* Note area */}

        <View>
          <Pressable style={{marginTop:20}}>
              <Heading text={'Give any Suggestion Note'}/>
              <TextInput placeholder='Note'
              numberOfLines={4} multiline={true}
              style={styles.noteText}
              onChange={(text)=>setNote(text)}
              />
          </Pressable>
        </View>
          {/* Confirm Button */}
          
            <Pressable style={{marginTop: 30}}onPress={handleConfirmBooking}>
                <Text style={styles.confirmBtn}>Confirm Booking</Text>
            </Pressable>
          
        </KeyboardAvoidingView>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 20,
    borderRadius: 15,
  },
  unselectTime:{
    padding: 10,
    borderWidth: 1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    paddingHorizontal:18,
    color:Colors.BLACK
  },
  selectTime:{
    padding: 10,
    borderWidth: 1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    paddingHorizontal:18,
    backgroundColor:Colors.PRIMARY,
    color:Colors.WHITE
  },
  noteText:{
    borderWidth:1,
    borderRadius:15,
    padding: 20,
    fontSize:16,
    fontFamily:'outfit',
    textAlignVertical:'top',
    borderColor:Colors.GRAY
  },
  confirmBtn:{
    textAlign:'center',
    fontFamily: 'outfit-medium',
    fontSize:17,
    color:Colors.WHITE,
    backgroundColor:Colors.PRIMARY,
    padding: 13,
    borderRadius:99,
    elevation:2
  },
});
