import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

interface Business {
  images: { url: string }[];
  name: string;
  category: { name: string };
  contactPerson: string;
}

interface Props {
  business: Business;
}

class BusinessListItemSmall extends Component<Props> {
  render() {
    const { business } = this.props;
    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: business?.images[0]?.url }} 
          style={styles.image} 
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{business?.name}</Text>
          <Text style={styles.category}>
            {business?.category.name}
          </Text>
          <Text style={styles.contactPerson}>
            {business?.contactPerson}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 7,
    display: 'flex',
    gap: 3,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 17,
    fontFamily: 'outfit-medium',
  },
  category: {
    fontSize: 13,
    fontStyle: 'italic',
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 3,
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
  },
  contactPerson: {
    fontSize: 10,
    fontFamily: 'outfit-bold',
    padding: 3,
    color: Colors.PRIMARY,
  },
});

export default BusinessListItemSmall;
