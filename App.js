import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/Home';
import TodoScreen from './pages/Todo';
import StoreList from './pages/StoreList';
// import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="比較計算" component={HomeScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="calculator" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Todoリスト" component={TodoScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="file-text" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name="店舗メモ" component={StoreList} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="store" size={size} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}