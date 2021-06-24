import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CameraPopup from '../Components/Camera/CameraPopup';

let userEmail = 'wali585858@gmail.com';

const ScanScreen = () => {
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = bool => {
    setisModalVisible(bool);
  };

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

      <Image
        style={{marginTop: wp('25%'), width: wp('45%'), height: wp('45%')}}
        source={require('../Assets/Icons/QRcode.png')}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => changeModalVisibility(true)}
          style={styles.button1}>
          <Text
            style={{fontWeight: 'bold', fontSize: wp('3.8%'), color: 'white'}}>
            I have a QR code to scan
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => changeModalVisibility(false)}>
          <CameraPopup
            userEmail={userEmail}
            changeModalVisibility={changeModalVisibility}
          />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: hp('12%'),
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
});
export default ScanScreen;
