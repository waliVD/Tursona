import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const SendLogs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'rgb(48, 42, 80)',
          fontWeight: 'bold',
          fontSize: wp('6%'),
          marginBottom: wp('2%'),
        }}>
        Send app logs
      </Text>

      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: wp('5%'),
          fontSize: wp('3.7%'),
          lineHeight: 20,
          color: 'grey',
        }}>
        To quickly help you, the Trusona app will attach app logs to an email.
        no Personal dat a is shared.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text
            style={{fontWeight: 'bold', fontSize: wp('4%'), color: 'white'}}>
            Send app logs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button2}>
          <Text style={{fontSize: wp('4%'), color: 'rgb(123, 70, 210)'}}>
            Not now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: hp('15%'),
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 1,
    width: wp('90%'),
    marginVertical: wp('5%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: wp('5%'),
  },

  button1: {
    backgroundColor: 'rgb(123, 70, 210)',
    height: wp('17%'),
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp('3%'),
    shadowColor: 'black',
    elevation: 3,
  },

  button2: {
    height: wp('17%'),
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp('3%'),
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 3,
  },
});
export default SendLogs;
