import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation, router } from 'expo-router';

const StackLayout = () => {

  const navigation = useNavigation()

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    if (canGoBack) {
      router.back()
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };


  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerLeft: ({ tintColor, canGoBack }) => <Ionicons 
          name={ canGoBack ? 'arrow-back' : 'grid-outline'}
          size={20} className='mr-4'
          onPress={() => onHeaderLeftClick(canGoBack)}
        />,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos',
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
        }}
      />
    </Stack>
  );
};
export default StackLayout;