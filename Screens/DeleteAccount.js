import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DeleteAccount = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'rgb(48, 42, 80)',
          fontWeight: 'bold',
          fontSize: wp('5.2%'),
          marginBottom: wp('3%'),
          textAlign: 'center',
        }}>
        Are you sure you want to delete your account?
      </Text>

      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: wp('5%'),
          fontSize: wp('3.5%'),
          lineHeight: 20,
          color: 'rgba(0, 0, 0, 0.3)',
        }}>
        We didn't see this coming! Type GOODBYE to confirm you want to
        permanently delete your account.
      </Text>

      <TextInput
        placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
        autoFocus={true}
        placeholder={'GOODBYE'}
        style={styles.textInput}
      />
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

  textInput: {
    marginTop: wp('3%'),
    color: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: wp('5%'),
    textAlign: 'center',
  },
});
export default DeleteAccount;
