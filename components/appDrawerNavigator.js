import * as React from 'react'
import{StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './appTabNavigator'
import SideBarMenu from './sideBarMenu' 
import firebase from 'firebase'
import SettingScreen from "../screens/settingScreen"

export const AppDrawerNavigator = createDrawerNavigator({
        Home:{screen:AppTabNavigator},
        Settings:{screen:SettingScreen}

    },
    {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  }
)