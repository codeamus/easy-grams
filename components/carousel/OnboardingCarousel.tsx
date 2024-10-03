import { View } from 'react-native';

import Slide1Svg from '~/assets/images/carousels/slide-1.svg';

const OnboardingCarousel = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Slide1Svg width={200} height={200} />
    </View>
  );
};

export default OnboardingCarousel;
