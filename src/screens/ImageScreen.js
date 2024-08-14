import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImageDetail from "../components/ImageDetail";
import {useIsFocused} from '@react-navigation/native'

const ImageScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  // useFocusEffect(() => {
  //   useCallback(() => {
  //
  //   }, []);
  // }, [])
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //
  //   })
  //   return unsubscribe;
  // }, [navigation])
  return <View>
    <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')}/>
  </View>
}
export default ImageScreen;