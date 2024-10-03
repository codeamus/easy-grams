import { View, Text } from 'react-native';

import Slide1Svg from '~/assets/images/carousels/slide-1.svg';

const OnboardingCarousel = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Slide1Svg width={200} height={200} />
      <Text>¡Bienvenido!</Text>
      <Text>¡Felicitaciones por dar el primer paso hacia una vida más saludable!</Text>
    </View>
  );
};

export default OnboardingCarousel;
