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

const ENTRIES2 = [
  {
    id: 1,
    name: 'برنامه نویسی',
    color: '#ff9c1d',
    courses: 4,
    image: Programming,
  },
  {
    id: 2,
    name: 'تولید محتوا و سئو',
    color: '#8fd01d',
    courses: 2,
    image: Seo,
  },
  {
    id: 3,
    name: 'طراحی و یوآی',
    color: '#da3033',
    courses: 1,
    image: Design,
  },
  {
    id: 4,
    name: 'فرانت دولوپرز',
    color: '#4895ef',
    courses: 1,
    image: Frontdeveloper,
  },
];

import axios from 'axios';
import { useState, useEffect } from 'react';
const baseUrl = 'https://mzarmo.ir/';

const BlogScreen = ({ route, navigation }) => {
  const { post } = route.params || '';
  const [Articles, setArticles] = useState('');
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    let url = `${baseUrl}api/article/list/`;
    axios
      .get(url)
      .then((response) => {
        setArticles(response.data);
        // setLoading(false);
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
            <Blogpost post={post} />
          </View>
          <MyText mystyle={styles.devider}>مقالات مرتبط</MyText>
          <Slider
            entries={Articles}
            handleClick={(post) => navigation.push('Blog', { post })}
          />
          <MyText mystyle={styles.devider}>دسته بندی</MyText>
          {/* <CategorySlider entries={ENTRIES2} color="rgb(177, 108, 222,0.8)" /> */}
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

export default BlogScreen;
