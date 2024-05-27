import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './BusinessList';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        {/* Header */}
        <Header />
        <View style={styles.container}>
          {/* Slider */}
          <Slider />
          {/* Categories */}
          <Categories />
          {/* BusinessList */}
          <BusinessList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default HomeScreen;
