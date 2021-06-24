import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../../Screens/HomeScreen';
import ScanScreen from '../../Screens/ScanScreen';
import CodesScreen from '../../Screens/CodesScreen';

const Tab = createMaterialBottomTabNavigator();

const bottomNav = props => {
  const [colorMe, setColorMe] = useState(1);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#7B46D1"
      inactiveColor="grey"
      barStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        listeners={{
          tabPress: () => {
            setColorMe(1);
          },
        }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../Assets/Icons/home.png')}
              style={colorMe == 1 ? styles.clicked : styles.unClicked}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        listeners={{
          tabPress: () => {
            setColorMe(2);
          },
        }}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../Assets/Icons/scan.png')}
              style={colorMe == 2 ? styles.clicked : styles.unClicked}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CodesScreen"
        listeners={{
          tabPress: () => {
            setColorMe(3);
          },
        }}
        component={CodesScreen}
        options={{
          tabBarLabel: 'Codes',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../Assets/Icons/steps.png')}
              style={colorMe == 3 ? styles.clicked : styles.unClicked}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  clicked: {
    width: 23,
    height: 23,
    tintColor: '#7B46D1',
  },

  unClicked: {
    width: 23,
    height: 23,
    tintColor: 'grey',
  },
});

export default bottomNav;
