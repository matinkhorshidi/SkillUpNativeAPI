// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Slider from '../components/Slider';
import IconAvatars from './../components/IconAvatars';
import MyText from './../components/MyText';
import CourseCard from './../components/CourseCard';

import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './../components/Loader';
const baseUrl = 'https://mzarmo.ir/';

const CoursesCatScreen = ({ route, navigation }) => {
  const { item, ENTRIES1 } = route.params || '';
  const [Logedin, setLogedin] = useState(false);
  const [Courses, setCourses] = useState('');
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}api/course/list`)
      .then((response) => {
        setCourses(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error('خطا در ارتباط با سرور');
      });
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#eaeaea', fontFamily: 'iranyekan' }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.subHeader}>
            <MyText
              mystyle={{
                fontSize: 18,
                color: '#000',
                textAlign: 'right',
                paddingVertical: 10,
                paddingRight: 10,
                marginTop: -10,
                backgroundColor: item.color,
              }}
            >
              {item.name}
            </MyText>
            {Loading ? (
              <Loader />
            ) : (
              <CourseCard
                entries={Courses}
                btnname={'مشاهده دوره'}
                icon={'code'}
                handleClick={(post) => navigation.navigate('Course', { post })}
              />
            )}
          </View>
          <MyText mystyle={styles.devider}>کورس های پر بازدید</MyText>
          {Loading ? (
            <Loader />
          ) : (
            <Slider
              entries={Courses}
              handleClick={() => navigation.navigate('Course')}
            />
          )}
        </View>
        <View
          style={{
            fontSize: 15,
            textAlign: 'center',
            backgroundColor: '#000',
            color: '#fff',
          }}
        >
          <ImageBackground
            source={require('../assets/image/Footer5.jpg')}
            resizeMode="cover"
            style={styles.image}
          >
            <MyText
              mystyle={{
                fontSize: 15,
                textAlign: 'center',
                color: '#fff',
                paddingVertical: 20,
              }}
            >
              ما را در شبکه های اجتماعی دنبال کنید
            </MyText>
            <IconAvatars />
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  subHeader: {
    //     backgroundColor: 'rgb(220, 124, 255)',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  devider: {
    // backgroundColor: 'rgba(114, 9, 183,0.4)',
    fontSize: 18,
    color: '#000',
    textAlign: 'right',
    paddingVertical: 5,
    paddingRight: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CoursesCatScreen;
