import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from './Header';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

interface State {
  businessList: any[];
}

class BusinessList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      businessList: [],
    };
  }

  componentDidMount() {
    this.getBusinessList();
  }

  getBusinessList = () => {
    GlobalApi.getBusinessList().then(resp => {
      console.log(resp);
      this.setState({ businessList: resp.businessLists });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Heading text={'Our Latest Business'} isViewAll={true} />

        <FlatList
          data={this.state.businessList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <BusinessListItemSmall business={item} />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  itemContainer: {
    marginRight: 20,
  },
});

export default BusinessList;
