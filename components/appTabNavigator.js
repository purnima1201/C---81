import * as React from 'react'
import{Image} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonate from '../screens/bookDonate'
import BookRequest from '../screens/bookRequest'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonate,
        navigationOptions:{
            tabBarIcon:<Image source = {require('')}/>,
            tabBarLabel:'DonateBooks',
            
        }
    },
    RequestBooks:{
        screen:BookRequest,
        navigationOptions:{
            tabBarIcon:<Image source = {require('')}/>,
            tabBarLabel:'RequestBooks'
        }
    }
})