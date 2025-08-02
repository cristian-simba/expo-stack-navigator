import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DraweLayout = () => {
  return (
      <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.4)',
            drawerActiveTintColor: "#1E90FF",
            headerShadowVisible: false,
            sceneStyle: {
                backgroundColor: "white"
            }
        }}
      >
        <Drawer.Screen
          name="(tabs)" 
          options={{
            headerShown: false,
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ color , size }) => (
                <Ionicons name='home-outline' size={size} color={color}/>
            )
          }}
        />
        <Drawer.Screen
          name="user/index" 
          options={{
            drawerLabel: 'User',
            title: 'User',
            drawerIcon: ({ color , size }) => (
                <Ionicons name='person-circle-outline' size={size} color={color}/>
            )
          }}
        />
      </Drawer>
  );
}

export default DraweLayout
 