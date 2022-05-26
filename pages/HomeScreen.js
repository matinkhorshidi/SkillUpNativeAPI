import * as React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Slider from '../components/Slider';
import Masters from './../components/Masters';
import IconAvatars from './../components/IconAvatars';
import MyText from './../components/MyText';
import Loader from '../components/Loader';

import axios from 'axios';
import { useState, useEffect } from 'react';
const baseUrl = 'https://mzarmo.ir/';

const HomeScreen = ({ navigation }) => {
  const [Logedin, setLogedin] = useState(false);
  const [Courses, setCourses] = useState('');
  const [Articles, setArticles] = useState('');
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
          <ImageBackground
            source={require('../assets/image/blogsslider1.png')}
            resizeMode="cover"
            style={styles.subHeader}
          >
            <View style={styles.overlay}>
              <MyText
                size={25}
                mystyle={{
                  marginTop: 10,
                  marginRight: 40,
                  textAlign: 'right',
                  writingDirection: 'rtl',
                }}
              >
                مهارتهای جدید
              </MyText>
              <MyText
                mystyle={{
                  fontSize: 25,
                  // fontWeight: 'bold',
                  marginLeft: 40,
                  marginTop: -10,
                  textAlign: 'left',
                  color: '#7209b7',
                  textShadowColor: '#000',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 1,
                  marginBottom: 16,
                }}
              >
                یادگیری آسان
              </MyText>
              {!Logedin ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProfileStack')}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0,0.2)',
                    borderRadius: 10,
                    margin: 0,
                  }}
                >
                  <MyText
                    size={20}
                    mystyle={{
                      textAlign: 'center',
                      padding: 10,
                    }}
                  >
                    وارد شوید
                  </MyText>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProfileStack')}
                  style={{
                    backgroundColor: 'rgba(115, 23, 189,0.3)',
                    borderRadius: 20,
                    margin: 0,
                  }}
                >
                  <MyText
                    size={20}
                    mystyle={{
                      textAlign: 'center',
                      padding: 10,
                    }}
                  >
                    خوش آمدید آقای فلان
                  </MyText>
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>
          <MyText mystyle={styles.devider}>دوره های اخیر</MyText>
          {Loading ? (
            <Loader />
          ) : (
            <Slider
              entries={Courses}
              handleClick={(post) => navigation.navigate('Course', { post })}
            />
          )}

          <MyText mystyle={styles.devider}>اساتید اسکیل آپ</MyText>
          <Masters />
          <ImageBackground
            source={require('../assets/image/Top-4-Universities-offering-Masters-Program-in-Data-Science.jpg')}
            resizeMode="cover"
            style={styles.subHeader}
          >
            <View>
              <MyText
                size={20}
                mystyle={{
                  marginTop: 0,
                  marginRight: 0,
                  color: '#fff',
                  textAlign: 'right',
                  writingDirection: 'rtl',
                  paddingTop: 0,
                  paddingBottom: 130,
                }}
              >
                مهارت علم داده
              </MyText>
            </View>
          </ImageBackground>
          <MyText mystyle={styles.devider}>بلاگ های اخیر</MyText>

          <Slider
            entries={Articles}
            handleClick={(post) => navigation.navigate('Blog', { post })}
          />
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
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    margin: 10,
    padding: 10,
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 20,
  },
  devider: {
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

export default HomeScreen;

///////////////////////////////
// /////////////////////////
