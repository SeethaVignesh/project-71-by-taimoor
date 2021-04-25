import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from './screens/ReadingStoryScreen';
import WriteStoryScreen from './screens/WritingStoryScreen';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
   WriteStoryScreen: {screen: WriteStoryScreen},
   ReadStory: {screen: ReadStory},
},
{
  defaultNavigationOptions:({navigation})=> ({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;

      if(routeName === "WriteStoryScreen"){
        return(
          <Image 
          source={require("./write.png")}
          style={{width:40, height:40}}
          />
        )
      } 
      else if(routeName === "ReadStory"){
        return(
          <Image 
          source={require("./read.png")}
          style={{width:40, height:40}}
          />
        )
      } 
    }
  })
});

const AppContainer =  createAppContainer(TabNavigator);