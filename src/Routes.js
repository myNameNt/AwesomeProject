import {createStackNavigator,createAppContainer} from 'react-navigation'
import App from './Home'
import Detail from './Detail'

const AppNavigator  = createStackNavigator(
    {
        Home: App,
        Detail: Detail
    },
    {
     initialRouteName: 'Detail'   
    }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer