import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  Platform,
} from 'react-native';

import MyText from './MyText';

const { width: screenWidth } = Dimensions.get('window');

const CategorySlider = (props) => {
  //   const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const { entries, handleClick } = props;
  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const renderItem = ({ item, index, color }, parallaxProps) => {
    return (
      <TouchableHighlight
        underlayColor="rgb(177, 108, 222,0.8)"
        onPress={() => handleClick(item)}
        style={styles.tchable}
      >
        <View
          style={[
            styles.item,
            {
              backgroundColor: item.color,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            },
          ]}
        >
          <item.image width={'80%'} height={140} />

          <MyText mystyle={styles.title} numberOfLines={2}>
            {item.name}
          </MyText>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 150}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        firstItem={2}
      />
    </View>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  title: {
    color: '#000',
    padding: 10,
    fontSize: 18,
  },
  subtitle: {
    color: '#81848d',
    fontSize: 12,
    paddingRight: 30,
    paddingBottom: 20,
  },
  item: {
    width: screenWidth - 150,
    height: screenWidth - 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    //     backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
