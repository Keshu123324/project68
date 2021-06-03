import * as React from 'react';
import FaceBookScreen from './screens/facebook';
import InstagramScreen from './screens/instagram';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
render(){
  return(
 <AppContainer/>
);
}
}


const TabNavigator=createBottomTabNavigator({
  facebook:{screen:FaceBookScreen},
  instagram:{screen:InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator)