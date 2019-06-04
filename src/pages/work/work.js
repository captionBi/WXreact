import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '工作'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>工作</Text>
      </View>
    )
  }
}
