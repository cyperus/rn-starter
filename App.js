import './gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from "./src/screens/ImageScreen";
import {Button} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FeedScreen from "./src/screens/FeedScreen";
import MessageScreen from "./src/screens/MessageScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Ionicons from '@expo/vector-icons/Ionicons'

// function ButtonTitle() {
//   return <Button title={'Title'}/>
// }

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Feed') {
          iconName = focused ? 'checkmark-circle' : 'checkmark-circle'
        } else if (route.name === 'Messages') {
          iconName = focused ? 'checkmark-circle' : 'checkmark-circle'
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray'
    })}>
      <Tab.Screen name='Feed' component={FeedScreen}></Tab.Screen>
      <Tab.Screen name='Messages' component={MessageScreen}/>
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        // headerTintColor: '#f4511e',
      }}>
        <Stack.Screen name='Home' component={Home}
                      options={{
                        headerShown: false
                      }}
        />
        <Stack.Screen name='List' component={ListScreen} options={{
          headerBackTitle: 'Custom Back',
          headerBackTitleStyle: {fontsize: 28}
        }}/>
        <Stack.Screen name='Image' component={ImageScreen} options={({route}) => ({title: route.params.name})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
