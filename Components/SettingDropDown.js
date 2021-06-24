import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const SettingDropDown = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.contaier}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          height: '100%',
          width: '100%',
          opacity: 0.5,
        }}
      />
      <View style={[styles.modal, {width: WIDTH - 60, height: HEIGHT / 1.8}]}>
        <TouchableOpacity
          style={{
            marginLeft: wp('7%'),
            marginTop: wp('7%'),
            width: wp('5%'),
          }}
          onPress={() => props.changeModalVisibility(false)}>
          <Image
            style={{width: wp('5%'), height: wp('5%')}}
            source={require('../Assets/Icons/cross.png')}
          />
        </TouchableOpacity>

        {/*User Details*/}
        <View style={styles.container2}>
          <Text style={{fontWeight: 'bold', marginBottom: wp('2%')}}>
            {props.userEmail}
          </Text>
          <Text style={styles.text2}>Trusona Essential</Text>
          <Text style={styles.text2}>Security version 1.16.0</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SendLogs');
              props.changeModalVisibility(false);
            }}>
            <Text style={[styles.text2, {textDecorationLine: 'underline'}]}>
              Send app logs
            </Text>
          </TouchableOpacity>
        </View>

        {/*Buttons*/}
        <View
          style={{
            height: wp('60%'),
            marginTop: wp('2%'),
            paddingVertical: wp('6%'),
            paddingLeft: wp('15%'),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditAccount');
              props.changeModalVisibility(false);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: wp('7%'),
            }}>
            <Image
              style={styles.icon}
              source={require('../Assets/Icons/user.png')}
            />
            <Text style={{marginLeft: wp('3%'), fontSize: wp('4.2%')}}>
              Edit Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpgradeAccount');
              props.changeModalVisibility(false);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: wp('7%'),
            }}>
            <Image
              style={styles.icon}
              source={require('../Assets/Icons/usercard.png')}
            />
            <Text style={{marginLeft: wp('3%'), fontSize: wp('4.2%')}}>
              Upgrade account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DeleteAccount');
              props.changeModalVisibility(false);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: wp('7%'),
            }}>
            <Image
              style={[styles.icon, {tintColor: '#ab3127'}]}
              source={require('../Assets/Icons/remove-user.png')}
            />
            <Text
              style={{
                marginLeft: wp('3%'),
                fontSize: wp('4.2%'),
                color: '#ab3127',
              }}>
              Delete account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingDropDown;

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    justifyContent: 'center',
  },

  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
  },

  option: {
    alignItems: 'flex-start',
  },

  text: {
    margin: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },

  container2: {
    height: wp('37%'),
    marginTop: wp('4%'),
    borderBottomWidth: wp('.4%'),
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    tintColor: 'black',
    width: wp('8%'),
    height: wp('8%'),
  },

  text2: {
    marginBottom: wp('1%'),
    color: 'grey',
  },
});
