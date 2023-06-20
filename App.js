import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Calculator from './pages/Home';
import TodoScreen from './pages/Todo';
import StoreList from './pages/StoreList';
import DetailsScreen from './pages/Details';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

//Bottom Tabのアイコンの読み込み
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//以下画面遷移のプログラミング

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DetailsStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="リスト" component={StoreList} />
    <Stack.Screen name="メモ詳細" component={DetailsScreen} />
  </Stack.Navigator>
);

const TabScreens = () => (
  <Tab.Navigator
  tabBarOptions={{
          activeTintColor: '#FBB03A',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'gray'
          },
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
          }
        }}>
    <Tab.Screen name="比較計算" component={Calculator} 
    options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="calculator" size={size} color={color} />
              ),
            }}/>
    <Tab.Screen name="リスト" component={TodoScreen} 
    options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="file-text" size={size} color={color} />
              ),
            }}/>
    <Tab.Screen name="店舗比較" component={DetailsStackScreen} 
    options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="store" size={size} color={color} />
              ),
            }}/>
  </Tab.Navigator>
);

const App = () => {
  return (
    <PaperProvider>
    <NavigationContainer>
      <TabScreens />
    </NavigationContainer>
    </PaperProvider>
  );
};

task
// aaaaaaaa
//aaaaaiiiii


// aiaiaiaiai
export default App;
master
