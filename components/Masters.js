import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const dataList = [
  {
    image_url: require('../assets/images/MasterSlider/Mohsen.webp'),
  },
  {
    image_url: require('../assets/image/img/team/04.jpg'),
  },
  {
    image_url: require('../assets/images/MasterSlider/Salar.webp'),
  },
  {
    image_url: require('../assets/image/img/team/01.jpg'),
  },
  {
    image_url: require('../assets/image/img/team/02.jpg'),
  },
  {
    image_url: require('../assets/image/img/team/03.jpg'),
  },
];

Array.prototype.chunk = function (n) {
  if (!this.length) {
    return [];
  }
  return [this.slice(0, n)].concat(this.slice(n).chunk(n));
};

const Masters = (props) => {
  return (
    <>
      <ScrollView style={{ marginBottom: 40, marginTop: 10 }}>
        {dataList.chunk(3).map((chunk, chunkIndex) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}
            key={chunkIndex}
          >
            {chunk.map((l, i) => (
              <Avatar
                size={100}
                rounded
                source={l.image_url ? l.image_url : {}}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: 'rgba(114, 9, 183,0.4)',
    color: '#000',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default Masters;
