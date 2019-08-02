/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {withNavigation,createMaterialTopTabNavigator,createBottomTabNavigator} from 'react-navigation'

import { BottomTabNavigatorConfig,StackNavigatorConfig } from './utils/config'
import {mergeJSON} from '../src/utils/util'
function Chun(){
  return (
    <View>
      <Text>Home page Chun</Text>
    </View>
  )
}
function Hua(){
  return (
    <View>
      <Text>Home page Hua</Text>
    </View>
  )
}
class Qiu extends Component{
  render(){
    return(
      <View>
        <Text>home page Qiu</Text>
      </View>
    )
  }
}
class Yue extends Component{
  constructor(){
    super()
    this.state = {}
    this.onGoDetail = this.onGoDetail.bind(this)
  }
  onGoDetail(){
    this.props.navigation.navigate('Detail',{
      title:'弃我去者明日之日多烦忧。',
      item:'长帆破浪会有时，直挂云帆济沧海。',
      name:'0.0'
    })
  }
  componentWillUnmount(){
    console.log('home uncomponet')
    console.log(this.props.navigation)
    debugger
  }
  render(){
    const data = this.props.navigation.getParam('data','')
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text>this
                  screen and then come back to see your edits.
                </Text>
                <Button
                  title="Go to Detail"
                  onPress={this.onGoDetail}
                />
                <Text>{data}</Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const Home = createBottomTabNavigator(
  {
    Chun: {
      screen: Chun
    },
    Hua: {
      screen: Hua
    },
    Qiu: {
      screen: Qiu,
    },
    Yue: {
      screen: Yue
    }
  },
  BottomTabNavigatorConfig({
    initialRouteName:'Yue'
  })
)

const pages = {
  Chun,
  Hua,
  Qiu,
  Yue
}

Home.navigationOptions = ({ navigation, }) => {
  // 设置tabBar的标题
  const { routes, index, } = navigation.state;
  const { routeName, params, } = routes[index];
  const __defaultNavigationOptions = StackNavigatorConfig({ initialRouteName: routeName, }).defaultNavigationOptions;
  const __navigationOptions = pages[routeName].navigationOptions;
  let targetNavigationOptions = {};
  if (typeof (__navigationOptions) === 'function') {
    targetNavigationOptions = __navigationOptions({ navigation, params, });
  } else {
    targetNavigationOptions = { ...__navigationOptions, };
  }
  mergeJSON(__defaultNavigationOptions, targetNavigationOptions);
  return targetNavigationOptions;
};


export default Home;
