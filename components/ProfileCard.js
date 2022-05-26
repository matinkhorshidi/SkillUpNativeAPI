import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-elements';

import Profile from './Profile';
import CourseCard from './CourseCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './Loader';
const baseUrl = 'https://mzarmo.ir/';

const ProfileCard = (props, navigation) => {
  const { user, onClick } = props;
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
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>
              <Text
                style={{
                  fontFamily: 'iranyekan',
                  textAlign: 'justify',
                  fontSize: 17,
                }}
              >
                {user.title}
              </Text>
            </Card.Title>
            <Card.Divider />
            <Profile />
            <View style={styles.user}>
              {/* <MasterIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}

              <Text style={styles.titr}>نام : </Text>
              <Text style={styles.name}>{user.master}</Text>
            </View>
            <View style={styles.user}>
              <Text style={styles.titr}>نام خانوادگی: </Text>
              <Text style={styles.name}>{user.videonum}</Text>
            </View>
            <View style={styles.user}>
              {/* <ClockIcon
                width={22}
                height={22}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>ایمیل: </Text>
              <Text style={styles.name}>{user.duration}</Text>
            </View>
            <View style={styles.user}>
              {/* <GearIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>شماره همراه: </Text>
              <Text style={styles.name}>{user.status}</Text>
            </View>
            <View style={styles.user}>
              {/* <LayerIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              /> */}
              <Text style={styles.titr}>رمز عبور: </Text>
              <Text style={[styles.name, { type: 'password' }]}>
                {user.level}
              </Text>
            </View>

            <Text style={{ fontSize: 19, marginTop: 20 }}>دوره های شما</Text>
            {Loading ? (
              <Loader />
            ) : (
              <CourseCard
                entries={Courses}
                btnname={'مشاهده دوره'}
                icon={'code'}
                handleClick={(post) => onClick(post)}
              />
            )}
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row-reverse',
    marginBottom: 6,
    marginLeft: 100,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  titr: {
    fontSize: 16,
    color: '#595959',
    marginTop: 5,
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardbox: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ProfileCard;
