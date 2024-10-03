import { View, Text } from 'react-native';

import Slide1Svg from '~/assets/images/carousels/slide-1.svg';

const OnboardingCarousel = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Slide1Svg className="mb-10 w-full" />
      <View className="mt-10">
        <Text className="font-poppinsSemiBold text-4xl">¡Bienvenido!</Text>
        <Text>¡Felicitaciones por dar el primer paso hacia una vida más saludable!</Text>
      </View>
    </View>
  );
};

export default OnboardingCarousel;
