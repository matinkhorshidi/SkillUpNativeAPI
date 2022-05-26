import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import MyText from './MyText';

import MasterIcon from '../assets/image/Icons/MasterIcon.svg';
import VideoIcon from '../assets/image/Icons/video.svg';
import ClockIcon from '../assets/image/Icons/clock2.svg';
import GearIcon from '../assets/image/Icons/gear.svg';
import LayerIcon from '../assets/image/Icons/layer.svg';
import PriceIcon from '../assets/image/Icons/PriceTag.svg';

const Coursepost = (props) => {
  const { post, handleClick, writer } = props;
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
                {post.title}
              </Text>
            </Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ marginBottom: 10, borderRadius: 10 }}
              source={{
                uri: 'http://mzarmo.ir' + post.image,
              }}
            />
            <View style={styles.user}>
              <MasterIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              />

              <Text style={styles.titr}>مدرس دوره: </Text>
              <Text style={styles.name}>{post.teacher}</Text>
            </View>
            <View style={styles.user}>
              <VideoIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              />
              <Text style={styles.titr}>تاریخ شروع: </Text>
              <Text style={styles.name}>{post.creation_date}</Text>
            </View>
            <View style={styles.user}>
              <ClockIcon
                width={22}
                height={22}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              />
              <Text style={styles.titr}>مدت زمان دوره: </Text>
              <Text style={styles.name}>{post.duration}</Text>
            </View>
            <View style={styles.user}>
              <GearIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              />
              <Text style={styles.titr}>وضعیت دوره: </Text>
              <Text style={styles.name}>{post.status}</Text>
            </View>
            <View style={styles.user}>
              <LayerIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              />
              <Text style={styles.titr}>سطح دوره: </Text>
              <Text style={styles.name}>{post.difficulty}</Text>
            </View>
            <View style={styles.user}>
              <PriceIcon
                width={32}
                height={32}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              />
              <Text style={{ fontSize: 19, marginTop: 5, fontWeight: 'bold' }}>
                قیمت دوره:
              </Text>
              <Text style={{ fontSize: 19, marginTop: 5 }}>
                {(post.cost * post.offer) / 100} تومان
              </Text>
            </View>
            <View style={[styles.user]}>
              <PriceIcon
                width={25}
                height={25}
                fill={'#000'}
                style={{ marginTop: 5, marginLeft: 5 }}
              />
              <Text style={{ fontSize: 19, marginTop: 5, fontWeight: 'bold' }}>
                تخفیف دوره:
              </Text>
              <Text style={{ fontSize: 19, marginTop: 5 }}>
                {100 - post.offer}%
              </Text>
            </View>
            <Card.Divider />
            <MyText
              mystyle={{
                marginBottom: 10,
                textAlign: 'justify',
              }}
            >
              {post.description}
            </MyText>
            <Button
              icon={
                <Icon
                  name={'money'}
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 3,
                marginLeft: 0,
                marginTop: 20,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: 'rgb(181, 23, 158)',
              }}
              titleStyle={{ fontFamily: 'iranyekan', fontSize: 13 }}
              title={'خرید دوره'}
              onPress={handleClick}
            />
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
    marginLeft: 40,
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

export default Coursepost;
