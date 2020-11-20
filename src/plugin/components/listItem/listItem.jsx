import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './listItem.less'


export default class ListItem extends Component {
  render () {
    const { name, value } = this.props
    return (
      <View>
        <View>name: {name}</View>
        <View>value: {value}</View>
      </View>
    )
  }
}
