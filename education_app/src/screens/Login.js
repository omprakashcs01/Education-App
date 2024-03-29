import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Login = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        style={{width: 400, height: 200}}
        source={require('../../assets/login.png')}
      />

      <View
        style={{
          paddingTop: 40,
          marginTop: -25,
          backgroundColor: '#fff',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 40,
            color: 'black',
            textAlign: 'center',
          }}>
          Welcome to Education App
        </Text>
        <Text style={{marginTop: 150, fontSize: 30, textAlign: 'center'}}>
          Login/SignUp
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            margin: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <FontAwesome name="google" size={35} color="white" />
          <Text style={{marginHorizontal: 20, fontSize: 20, color: '#fff'}}>
            Sing in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
