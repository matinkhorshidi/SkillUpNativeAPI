import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import MyText from './MyText';

const Blogpost = (props) => {
  const { post, handleClick, writer } = props;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={styles.cardbox}>
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
            <MyText
              mystyle={{
                marginBottom: 5,
                fontSize: 10,
                textAlign: 'center',
              }}
            >
              زمان مطالعه : {post.read_time}
            </MyText>
            <Card.Divider />
            <Card.Image
              style={{ marginBottom: 10, borderRadius: 10 }}
              source={{
                uri: 'http://mzarmo.ir' + post.image,
              }}
            />
            <MyText
              mystyle={{
                marginBottom: 10,
              }}
            >
              تاریخ انتشار : {post.publish_date}
            </MyText>
            <MyText
              mystyle={{
                marginBottom: 10,
                textAlign: 'justify',
              }}
            >
              {post.content}
            </MyText>
            <MyText
              mystyle={{
                marginBottom: 10,
                textAlign: 'justify',
              }}
            >
              {post.subtitle}
            </MyText>
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
    flexDirection: 'row',
    marginBottom: 6,
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

export default Blogpost;
