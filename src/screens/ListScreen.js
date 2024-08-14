import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, FlatList } from 'react-native';
import React from 'react';
import {TouchableOpacity} from "react-native-gesture-handler";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={()=>{}}>
        <Text>{title}</Text>
      </TouchableOpacity>
      {/*<Text style={styles.title}>{title}</Text>*/}
    </View>
  );
};
const ListScreen = ({ route, navigation }) => {
  // const { id, otherParam } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal data={DATA} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal:16
  },
  title: {
    fontSize: 32,
  },
});
