import { Link, router, useNavigation } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push('/products')}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push('/profile')}
        >
          Profile
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
 