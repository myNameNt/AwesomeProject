import {createStackNavigator,createAppContainer,createMaterialTopTabNavigator} from 'react-navigation'
import {Easing  ,Animated} from 'react-native'
import App from './Home'
import Detail from './Detail'

const RootStackNavigator = createStackNavigator({
  Home:{
    screen: App,
    navigationOptions:{
      headerTitle: 'Home~~'
    }
  },
  Detail:{
    screen: Detail,
    navigationOptions:{
      headerTitle: 'Detail~~'
    }
  }
})

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