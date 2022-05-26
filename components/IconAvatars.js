import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';

Array.prototype.chunk = function (n) {
  if (!this.length) {
    return [];
  }
  return [this.slice(0, n)].concat(this.slice(n).chunk(n));
};

const IconAvatars = (props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}
      >
        <TouchableOpacity>
          <Avatar
            size={64}
            rounded
            icon={{ name: 'facebook', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#3b5998' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size={64}
            rounded
            icon={{ name: 'instagram', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#8a3ab9' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size={64}
            rounded
            icon={{ name: 'telegram', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#0088CC' }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}
      >
        <TouchableOpacity>
          <Avatar
            size={64}
            rounded
            icon={{ name: 'youtube', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#FF0000' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size={64}
            rounded
            icon={{
              name: 'twitter',
              type: 'font-awesome',
              //   color: '#00acee',
            }}
            containerStyle={{ backgroundColor: '#00acee' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            size={64}
            rounded
            icon={{ name: 'whatsapp', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#25D366' }}
          />
        </TouchableOpacity>
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

export default IconAvatars;
