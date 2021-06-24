import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SettingDropDown from '../Components/SettingDropDown';

let userEmail = 'wali585858';

const HomeScreen = () => {
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = bool => {
    setisModalVisible(bool);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => changeModalVisibility(true)}>
          <Image
            style={styles.icon}
            source={require('../Assets/Icons/user.png')}
          />
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => changeModalVisibility(false)}>
          <SettingDropDown
            userEmail={userEmail}
            changeModalVisibility={changeModalVisibility}
          />
        </Modal>
      </View>

      <View style={styles.circle}>
        <View style={styles.circleBorder} />
        <View style={styles.itemContainer}>
          <Image
            style={styles.icon}
            source={require('../Assets/Icons/padlock.png')}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>{userEmail}</Text>
            <Text style={{fontSize: wp('4%')}}>Welcome!</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  circle: {
    marginTop: wp('40%'),
    alignSelf: 'center',
    width: wp('85%'),
    height: wp('85%'),
    borderRadius: wp('50%'),
    alignItems: 'center',
  },

  circleBorder: {
    width: wp('85%'),
    height: wp('85%'),
    position: 'absolute',
    borderColor: 'black',
    borderRadius: wp('50%'),
    borderWidth: wp('1%'),
    opacity: 0.1,
  },

  icon: {
    tintColor: 'black',
    width: wp('7%'),
    height: wp('7%'),
  },

  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('20%'),
  },

  textContainer: {
    marginTop: wp('12%'),
    alignItems: 'center',
  },

  text: {
    marginBottom: wp('2%'),
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },

  navBar: {
    flexDirection: 'row-reverse',
    width: wp('100%'),
    paddingTop: wp('4%'),
    paddingLeft: wp('4%'),
  },
});

export default HomeScreen;
