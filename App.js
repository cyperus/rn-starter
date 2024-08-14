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
import {createDrawerNavigator} from "@react-navigation/drawer";
import * as SecureStore from 'expo-secure-store'
import React from "react";
// import Ionicons from '@expo/vector-icons/Ionicons'

// function ButtonTitle() {
//   return <Button title={'Title'}/>
// }
const AuthContext = React.createContext();
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
      <Tab.Screen name='Feed' component={FeedScreen} options={{tabBarBadge: 3}}></Tab.Screen>
      <Tab.Screen name='Messages' component={MessageScreen}/>
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function App() {
  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null
        }
    }
  }, {isLoading: true, isSignout: false, userToken: null})
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        //   restoring token failed
      }
      dispatch({
        type: 'RESTORE_TOKEN',
        token: userToken
      })
    }
    bootstrapAsync()
  }, [])
  const authContext = React.useMemo(() => ({
    signIn: async (data) => {
      dispatch({
        type: 'SIGN_IN',
        token: 'dummy-auth-token'
      })
    },
    signOut: () => dispatch({type: 'SIGN_OUT'}),
    signUp: async (data) => {
      dispatch({
        type: "SIGN_IN",
        token: 'dummy-auth-token'
      })
    }
  }), [])
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigatore>
        {
          state.userToken == null ? <Stack.Screen name='SignIn' component={ImageScreen}/> :
            <Stack.Screen name='Home' component={HomeScreen}/>
        }
      </Stack.Navigatore>
    </AuthContext.Provider>
  )
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        // headerTintColor: '#f4511e',
      }}>
        <Drawer.Screen name='Home' component={HomeScreen}
                       options={{
                         headerShown: false
                       }}
        />
        <Drawer.Screen name='List' component={ListScreen} options={{
          headerBackTitle: 'Custom Back',
          headerBackTitleStyle: {fontsize: 28}
        }}/>
        <Drawer.Screen name='Image' component={ImageScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
