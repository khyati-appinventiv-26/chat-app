import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import MenuScreen from '../screens/MenuScreen';
import { Icons } from '../assets';

// Define the type for your icons, this assumes Icons is an object containing images
type IconsType = {
  home: ImageSourcePropType;
  account: ImageSourcePropType;
  fav: ImageSourcePropType;
  menu: ImageSourcePropType;
};

const Tab = createBottomTabNavigator();

export default class BottomNav extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'HOME',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={Icons.home} // Assuming Icons.home is the correct type
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountScreen}
          options={{
            headerShown: false,
            title: 'ACCOUNT',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={Icons.account} // Assuming Icons.account is the correct type
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="favorite"
          component={FavoriteScreen}
          options={{
            title: 'FAVOURITE',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={Icons.fav} // Assuming Icons.fav is the correct type
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            title: 'Menu',
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={Icons.menu} // Assuming Icons.menu is the correct type
                />
              );
            },
            // Uncomment this if you plan to handle logout via the tab bar button in the future
            // tabBarButton: (props) => (
            //   <TouchableOpacity {...props} onPress={() => this.handleLogout()}>
            //   </TouchableOpacity>
            // ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
