import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UpgradeAccount = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'rgb(48, 42, 80)',
          fontWeight: 'bold',
          fontSize: wp('5.5%'),
          marginBottom: wp('2%'),
        }}>
        Upgrade to Trusona Executive
      </Text>

      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: wp('5%'),
          fontSize: wp('3.7%'),
          lineHeight: 20,
          color: 'grey',
        }}>
        Turn your driver's license into a key. No data, other than your name, is
        stored.
      </Text>

      <View style={styles.buttonContainer}>
        <Image
          style={{marginBottom: wp('35%')}}
          source={require('../Assets/gif/tenor.gif')}
        />

        <TouchableOpacity style={styles.button1}>
          <Text
            style={{fontWeight: 'bold', fontSize: wp('4%'), color: 'white'}}>
            Scan driver's license
          </Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: wp('80%'),
          }}>
          <TouchableOpacity style={styles.button2}>
            <Text style={{fontSize: wp('4%'), color: 'rgb(123, 70, 210)'}}>
              Maybe Later
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={{fontSize: wp('4%'), color: 'rgb(123, 70, 210)'}}>
              Why?
            </Text>
          </TouchableOpacity>
        </View>
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
    width: wp('39%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp('3%'),
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 3,
  },
});
export default UpgradeAccount;
