import { View, Text, Pressable } from 'react-native';

import Slide1Svg from '~/assets/images/carousels/slide-1.svg';

const OnboardingCarousel = () => {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <Slide1Svg className="mb-10 w-full" />
      <View className="mt-10 flex max-w-lg flex-col items-center">
        <Text className="font-poppinsSemiBold color-dark-onBackground text-4xl">¡Bienvenido!</Text>
        <Text className="font-poppinsRegular color-dark-onBackgrounVariant text-center text-lg">
          ¡Felicitaciones por dar el primer paso {'\n'} hacia una vida más saludable!
        </Text>
      </View>
      <View className="absolute bottom-14 flex w-full flex-row items-end justify-between">
        <Pressable>
          <Text className="font-poppinsRegular color-dark-onBackgrounVariant text-lg">Saltar</Text>
        </Pressable>
        <Pressable>
          <Text className="font-poppinsRegular color-dark-onBackgrounVariant text-lg">
            Siguiente
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnboardingCarousel;
