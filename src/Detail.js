import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class Detail extends Component{
    static navigationOptions = ({navigation})=>{
        return {
            title: navigation.state.routeName || '哈哈哈',
            headerStyle:{
                backgroundColor: 'yellow',
                paddingLeft: 20,
                paddingRight: 20
            },
            headerTintColor: 'seagreen',
            headerTitleStyle:{
                fontWeight: 'bold',
                textAlign: 'center'
            }
        }
    }
    constructor(props){
        super(props)
        this.state = {
            title: '乱我心者昨日之日不可留,'
        }
        this.onGoHome = this.onGoHome.bind(this)
        this.onRight = this.onRight.bind(this)
    }
    onGoHome(){
        this.props.navigation.navigate('Hua',{data:'我是从detail那边过来的'})
    }
    onRight(){
        console.log('hahah')
        debugger
    }
    componentWillUnmount(){

    }
    render(){
        const title = this.props.navigation.getParam('title','没有传数据过来')
        const item = this.props.navigation.getParam('item','没有传数据过来')
        return(
            <View>
                <Text>{this.state.title}</Text>
                <Text>{title}</Text>
                <View>
                <Text>{item}</Text>
                </View>
                <Button title='go home' onPress={this.onGoHome} />
            </View>
        )
    }
} 