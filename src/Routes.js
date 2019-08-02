import {createStackNavigator,createAppContainer} from 'react-navigation'
import {Easing  ,Animated,View,Text,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
// import TitleBar from './components/TitleBar'
import Home from './Home'
import Detail from './Detail'
import About from './About'

const {width,height} = Dimensions.get('screen')
const RootStackNavigator = createStackNavigator(
  {
    Home:{
      screen: Home,
    },
    Detail:{
      screen: Detail,
    },
    About: {
      screen: About,
    }
  }
)

// const AppNavigator  = createStackNavigator(
//     {
//         Home: App,
//         Detail: Detail
//     },
//     {
//         headerMode: 'none',
//         mode: 'modal',
//         defaultNavigationOptions: {
//           gesturesEnabled: false,
//         },
//         transitionConfig: () => ({
//             transitionSpec: {
//             duration: 300,
//             easing: Easing.out(Easing.poly(4)),
//             timing: Animated.timing,
//             },
//             screenInterpolator: sceneProps => {
//               const { layout, position, scene } = sceneProps;
//               const { index } = scene;
//               const height = layout.initHeight;
//               const translateY = position.interpolate({
//                 inputRange: [index - 1, index, index + 1],
//                 outputRange: [height, 0, 0],
//               });
      
//               const opacity = position.interpolate({
//                 inputRange: [index - 1, index - 0.99, index],
//                 outputRange: [0, 1, 1],
//               });
      
//               return { opacity, transform: [{ translateY }] };
//             },
//         }),
//         initialRouteName: 'Home',
//         initialRouteParams: {title:'我是大魔王啊',name:'悟空'},
//         initialRouteKey: '430923199005152323'
//     },
// )

const AppContainer = createAppContainer(RootStackNavigator)

export default AppContainer