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
import ProfileCard from './../components/ProfileCard';

const user = {
  title: 'فلان آقا',
  master: ' مهدی',
  videonum: 'سلامی',
  duration: 'check@gmail.com',
  status: '09010011110',
  level: '123456',
  price: '10000 تومان',
  subtitle:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
  illustration: require('../assets/image/BlogImage.jpg'),
};

const ProfileScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#eaeaea', fontFamily: 'iranyekan' }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            //   alignItems: 'flex-end',
            //   justifyContent: 'center',
          }}
        >
          <View style={styles.subHeader}>
            <ProfileCard
              user={user}
              onClick={(post) => navigation.navigate('Course', { post })}
            />
          </View>
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

export default ProfileScreen;
