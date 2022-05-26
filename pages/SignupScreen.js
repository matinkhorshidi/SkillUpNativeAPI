import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import MyText from './../components/MyText';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [idcart, setIdcart] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/image/NewLogo.png')}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="نام و نام خانوادگی"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setEmail(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="کد ملی"
          placeholderTextColor="#003f5c"
          onChangeText={(idcart) => setEmail(idcart)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="ایمیل"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="رمز عبور"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>فراموشی رمز</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Profile')}
      >
        <MyText mystyle={styles.loginText}>ثبت نام</MyText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate('Login')}
      >
        <MyText mystyle={styles.signupText}>ورود</MyText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  image: {
    marginTop: 30,
    marginBottom: 20,
  },

  inputView: {
    backgroundColor: 'rgba(181, 23, 158,0.1)',
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    // padding: 10,
    // marginLeft: 20,
    // textAlign: 'center',
  },

  forgot_button: {
    height: 30,
    marginBottom: 50,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 7,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'rgb(114, 9, 183)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginText: { color: '#fff' },
  signup: {
    width: '30%',
    borderRadius: 7,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(114, 9, 183,0.4)',
  },
  signupText: { fontSize: 12, color: '#fff' },
});
