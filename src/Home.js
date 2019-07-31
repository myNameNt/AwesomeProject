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
import {withNavigation,createMaterialTopTabNavigator,} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
function HomePageTwo(){
  return (
    <View>
      <Text>Home page two</Text>
    </View>
  )
}
class HomePageThree extends Component{
  render(){
    return(
      <View>
        <Text>home page three</Text>
      </View>
    )
  }
}
class HomePageOne extends Component{
  constructor(){
    super()
    this.state = {}
    this.onGoDetail = this.onGoDetail.bind(this)
  }
  onGoDetail(){
    this.props.navigation.navigate('Detail',{
      title:'弃我去者明日之日多烦忧。',
      item:'长帆破浪会有时，直挂云帆济沧海。'
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

const Home = createMaterialBottomTabNavigator(
  {
    HomePageOne: {
      screen: HomePageOne
    },
    HomePageTwo: {
      screen: HomePageTwo
    },
    HomePageThree: {
      screen: HomePageThree,
      navigationOptions: ({navigation}) => ({
        tabBarColor: '#3F51B5',
        // tabBarIcon: ({focused, tintColor}) => {
        //     const {routeName} = navigation.state;
        //     let iconName;
        //     if (routeName === 'home') {
        //         iconName = `ios-home${focused ? '' : '-outline'}`;
        //     } else if (routeName === 'my') {
        //         iconName = `ios-options${focused ? '' : '-outline'}`;
        //     }
        //     return <Ionicons name={iconName} size={25} color={tintColor}/>
        //     },
        title: '我的',
      })
    }
  },
  {
    initialRouteName: 'HomePageThree',
    // activeColor: '#f0edf6',
    // inactiveColor: '#3e2465',
    // barStyle: { backgroundColor: '#694fad' },
  }
)

export default Home;
