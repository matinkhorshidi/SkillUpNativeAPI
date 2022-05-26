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

const Profile = (props) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 40,
        }}
      >
        <Avatar
          size={128}
          rounded
          source={require('../assets/image/WriterImage.jpg')}
          title="Bj"
          containerStyle={{ backgroundColor: 'grey' }}
        >
          <Avatar.Accessory size={23} />
        </Avatar>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default Profile;
