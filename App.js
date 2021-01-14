import React from 'react';

import SearchScreen from './screens/SearchScreen'
import TransactionScreen from './screens/TransactionScreen'
import LoginScreen from './screens/LoginScreen'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  TransactionScreen: {screen: TransactionScreen},
  SearchScreen: {screen: SearchScreen},
})

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)