import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, NavigationInjectedProps } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

interface Category {
  name: string;
  icon: { url: string };
}

interface State {
  categories: Category[];
}

class Categories extends Component<NavigationInjectedProps, State> {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    GlobalApi.getCategories().then(resp => {
      this.setState({ categories: resp?.categories || [] });
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ marginTop: 10 }}>
        <Heading text={'Categories'} isViewAll={true} />
        <FlatList
          data={this.state.categories}
          numColumns={4}
          renderItem={({ item, index }) => index <= 3 && (
            <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-list', { category: item.name })}>
              <View style={styles.iconContainer}>
                <Image source={{ uri: item?.icon?.url }} style={{ width: 30, height: 30 }} />
              </View>
              <Text style={styles.text}>{item?.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#f0f0f0', // Placeholder color, replace with your color
    padding: 17,
    borderRadius: 99,
  },
  text: {
    fontFamily: 'outfit-medium',
    marginTop: 5,
  },
});

export default Categories;
