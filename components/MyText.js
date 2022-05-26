import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  MyAppText,
} from 'react-native';

const MyText = (props) => {
  const { size, mystyle } = props;

  return (
    <Text
      style={{
        fontSize: size,
        fontFamily: 'iranyekan',
        ...mystyle,
      }}
    >
      {props.children}
    </Text>
  );
};

export default MyText;
