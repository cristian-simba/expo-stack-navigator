import { Text, View } from 'react-native'
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
    return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'white',
      tabBarShowLabel: false,
      tabBarStyle: { 
        backgroundColor: "black"
      }
    }}>
    <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
    )
}

export default TabLayout
