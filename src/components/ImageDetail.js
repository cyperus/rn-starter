import React from 'react';
import {View, Text, Image} from 'react-native'

const ImageDetail = ({title, imageSource}) => {
  return <View>
    <Text>{title}</Text>
    <Image source={imageSource} resizeMode='contain' width={200} height={133}/>
  </View>
}
export default ImageDetail;