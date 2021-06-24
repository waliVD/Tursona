import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let userEmail = 'wali585858@gmail.com';

const EditAccount = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: 'rgba(0, 0, 0, 0.5)',
          borderBottomWidth: wp('.3%'),
          alignItems: 'center',
        }}>
        <Text style={styles.title}>Emails</Text>
      </View>

      <View
        style={{
          borderBottomColor: 'rgba(0, 0, 0, 0.5)',
          borderBottomWidth: wp('.3%'),
          height: wp('25%'),
          paddingVertical: wp('2%'),
          paddingLeft: wp('4%'),
        }}>
        <Text
          style={{
            color: 'rgb(153, 190, 182)',
            fontSize: wp('4%'),
            marginBottom: wp('3%'),
          }}>
          Verified
        </Text>
        <Text style={{color: 'grey', fontSize: wp('6%')}}>{userEmail}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: '#7B46D1',
            borderRadius: 50,
            height: wp('18%'),
            width: wp('18%'),
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'black',
            elevation: 5,
          }}>
          <Text style={{color: 'white', fontSize: wp('8%')}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: hp('3%'),
  },

  title: {
    color: 'rgb(48, 42, 80)',
    fontWeight: 'bold',
    fontSize: wp('6%'),
    marginVertical: wp('4%'),
  },

  buttonContainer: {
    flex: 1,
    width: wp('90%'),
    marginVertical: wp('5%'),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: wp('7%'),
  },

  icon: {
    width: wp('15%'),
    height: wp('15%'),
  },
});

export default EditAccount;
