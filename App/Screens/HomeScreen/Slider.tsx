import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

interface SliderItem {
  image: { url: string };
}

interface State {
  slider: SliderItem[];
}

class Slider extends Component<{}, State> {
  state: State = {
    slider: [],
  };

  componentDidMount() {
    this.getSliders();
  }

  getSliders = () => {
    GlobalApi.getSlider().then(resp => {
      console.log("resp", resp.sliders);
      this.setState({ slider: resp?.sliders || [] });
    });
  };

  render() {
    return (
      <View>
        <Heading text={'Offer For You'} />
        <FlatList
          data={this.state.slider}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item, index }) => (
            <View style={{ marginRight: 20 }}>
              <Image
                source={{ uri: item?.image?.url }}
                style={styles.sliderImage}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    marginBottom: 10
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 50,
    resizeMode: 'contain'
  }
});

export default Slider;
