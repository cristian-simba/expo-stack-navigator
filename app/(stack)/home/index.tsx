import { Link, router } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import CustomButton from '@/components/shared/CustomButton';

export default function Home() {
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

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
}
 