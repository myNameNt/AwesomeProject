import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '乱我心者昨日之日不可留'
        }
    }
    render(){
        return(
            <View>
                <Text>{this.state.title}</Text>
            </View>
        )
    }
} 