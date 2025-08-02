import { Slot, SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />;
    </GestureHandlerRootView>
  )
};
export default RootLayout;