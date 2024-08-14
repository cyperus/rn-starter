import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {TouchableHighlight} from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  const [count, setCount] = React.useState(0)
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='Update count' onPress={()=>setCount(c=>c+1)}/>
    })
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title='Go to list'
        onPress={() =>
          navigation.navigate('List', {
            id: 86,
            otherParam: 'anything',
          })
        }
      ></Button>
      <Text>Count:{count}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Image', {name: '图片'})}>
        <Text>Go to Image Screen</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={() => navigation.setOptions({
        title: 'Updated'
      })}>
        <Text>Updated</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
