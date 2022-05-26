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
import Carousel from 'react-native-snap-carousel';
import Slider from '../components/Slider';
import Masters from './../components/Masters';
import IconAvatars from './../components/IconAvatars';
import MyText from './../components/MyText';
import CourseCard from './../components/CourseCard';
import CategorySlider from './../components/CategorySlider';

import Design from '../assets/image/Illustraitors/design.svg';
import Seo from '../assets/image/Illustraitors/seo.svg';
import Programming from '../assets/image/Illustraitors/programming.svg';
import Frontdeveloper from '../assets/image/Illustraitors/frontdeveloper.svg';
import Blogpost from './../components/Blogpost';
import Coursepost from './../components/Coursepost';

import axios from 'axios';
import { useState, useEffect } from 'react';
const baseUrl = 'https://mzarmo.ir/';

const ENTRIES2 = [
  {
    title: 'فرانت دولوپرز',
    image: Frontdeveloper,
    color: '#4895EF',
  },
  {
    title: 'برنامه نویسی',
    image: Programming,
    color: '#FF9C1D',
  },
  {
    title: 'سئو و تولید محتوی',
    image: Seo,
    color: '#8FD01D',
  },
  {
    title: 'طراحی و یو آی',
    image: Design,
    color: '#DA3033',
  },
];
const CourseScreen = ({ route, navigation }) => {
  // const { name } = route.params;
  // const { navigation, route } = props;
  // const params = route.params;
  // const id = navigation.getParam('name', null) || '';
  // const { name } = route.params;
  // const  = route.params;
  const [Logedin, setLogedin] = useState(false);
  const [Courses, setCourses] = useState('');

  useEffect(() => {
    axios
      .get(`${baseUrl}api/course/list`)
      .then((response) => {
        setCourses(response.data);

        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error('خطا در ارتباط با سرور');
      });
  }, []);

  const { post } = route.params || '';

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#eaeaea', fontFamily: 'iranyekan' }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.subHeader}>
            <Coursepost post={post} />
          </View>
          <MyText mystyle={styles.devider}>دوره های مرتبط</MyText>
          <Slider
            entries={Courses}
            handleClick={(post) => navigation.push('Course', { post })}
          />
          <MyText mystyle={styles.devider}>دسته بندی</MyText>
          <CategorySlider entries={ENTRIES2} color="rgb(177, 108, 222,0.8)" />
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

export default CourseScreen;
