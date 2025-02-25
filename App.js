import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native'
import Home from './components/screens/Home';
import Explore from './components/screens/Explore';
import Cart from './components/screens/Cart';
import MyAccount from './components/screens/MyAccount';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const TabNav = createBottomTabNavigator()
  return (
      <NavigationContainer>
        <TabNav.Navigator screenOptions={{
          tabBarActiveTintColor: "#165963" ,
          tabBarInactiveTintColor: "#608a8f",
          tabBarLabelStyle: {
            fontSize: 9,
            paddingBottom: 5,
            fontWeight: 600,
          },
          tabBarStyle: {
            height: 75,
            paddingTop: 0
          }
        }}>
          <TabNav.Screen name='HOME' component={Home}  options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <Ionicons name='home-outline' size={24} color={focused ? '#165963' : '#608a8f'}/>
            )
          }}/>
          <TabNav.Screen name='EXPLORE' component={Explore} options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <Ionicons name='search-outline' size={24} color={focused ? '#165963' : '#608a8f'}/>
            )
          }}/>
          <TabNav.Screen name='CART' component={Cart} options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <Ionicons name='bag-outline' size={18} color={focused ? '#165963' : '#608a8f'}/>
            )
          }}/>
          <TabNav.Screen name='MY ACCOUNT' component={MyAccount} options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <FontAwesomeIcon name="user-circle" size={18} color={focused ? '#165963' : '#608a8f'} />
            )
          }}/>
        </TabNav.Navigator>
      </NavigationContainer>
  );
}
