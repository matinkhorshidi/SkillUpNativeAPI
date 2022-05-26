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

const CourseCard = (props) => {
  const { entries, handleClick, btnname, icon } = props;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {entries.map((post, index) => (
            <Card containerStyle={styles.cardbox}>
              <Card.Title>
                <Text style={{ fontFamily: 'iranyekan', fontSize: 17 }}>
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
              <MyText style={{ marginBottom: 10 }}>{post.subtitle}</MyText>
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
                <PriceIcon
                  width={25}
                  height={25}
                  fill={'#000'}
                  style={{ marginTop: 5, marginLeft: 5 }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 5,
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}
                >
                  قیمت دوره:
                </Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>
                  {post.cost} تومان
                </Text>
              </View>
              <Button
                icon={
                  <Icon
                    name={icon}
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
                title={btnname}
                onPress={() => handleClick(post)}
              />
            </Card>
          ))}
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
    flexDirection: 'row',
    marginBottom: 26,
    marginTop: 26,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  cardbox: {
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  user: {
    flexDirection: 'row-reverse',
    marginBottom: 6,
    marginLeft: 40,
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
});

export default CourseCard;
