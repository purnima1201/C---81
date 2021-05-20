import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './appTabNavigator'
import SideBarMenu from './sideBarMenu' 
import SettingScreen from "../screens/settingScreen"

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
        screen:SettingScreen
    }

  },
  {
  contentComponent:SideBarMenu
  },
  {
      initialRouteName : 'Home'
  }
)