import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native'
import Home from './components/screens/Home';
import Explore from './components/screens/Explore';

export default function App() {
  const TabNav = createBottomTabNavigator()
  return (
      <NavigationContainer>
        <TabNav.Navigator screenOptions={{
          tabBarActiveTintColor: "orange" ,
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 14,
            paddingBottom: 5,
            fontWeight: 600,
          },
        }}>
          <TabNav.Screen name='Home' component={Home} options={{
            
          }}/>
          <TabNav.Screen name='Explore' component={Explore}/>
        </TabNav.Navigator>
      </NavigationContainer>
  );
}
