import React, { Component } from 'react';
import { View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navegador = createStackNavigator({
  Home: {
    screen: Home
  },
  Contato: {
    screen: Contato
  },
  Horarios: {
    screen: Horarios
  },
  Sobre: {
    screen: Sobre
  }
}, {  
  tabBarOptions: {
    showIcon:true
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;




