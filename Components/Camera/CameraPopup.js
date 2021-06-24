import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RNCamera} from 'react-native-camera';
import SettingDropDown from '../SettingDropDown';

const userEmail = 'wali585858@gmail.com';

class CameraPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      barcodes: [],
      lock: false,
    };
  }

  renderBarcodes = () => (
    <View>{this.state.barcodes.map(this.renderBarcode)}</View>
  );

  renderBarcode = ({data}) => {
    if (data[2] != 't' && this.state.lock == false) {
      Alert.alert(
        'Scanned Data',
        data,
        [
          {
            text: 'Okay',
            onPress: () => {
              console.log('Okay Pressed');
              setTimeout(() => {
                this.setState({lock: false});
              }, 5000);
            },
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
      this.setState({lock: true});
    }
  };

  barcodeRecognized = ({barcodes}) => {
    this.setState({barcodes});
  };

  render() {
    const changeModalVisibility = bool => {
      this.setState({isModalVisible: bool});
    };

    const {isModalVisible} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => changeModalVisibility(true)}>
            <Image
              style={styles.icon}
              source={require('../../Assets/Icons/user.png')}
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

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: wp('30%'),
          }}>
          <RNCamera
            style={styles.camera}
            captureAudio={false}
            ref={ref => {
              this.camera = ref;
            }}
            onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
            {this.renderBarcodes}
          </RNCamera>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  camera: {
    alignItems: 'center',
    width: wp('70%'),
    height: wp('70%'),
  },

  navBar: {
    flexDirection: 'row-reverse',
    width: wp('100%'),
    paddingTop: wp('4%'),
    paddingLeft: wp('4%'),
  },

  icon: {
    tintColor: 'black',
    width: wp('7%'),
    height: wp('7%'),
  },
});

export default CameraPopup;
