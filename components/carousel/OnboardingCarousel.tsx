import { Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import ArrowIcon from '~/assets/icons/arrow-right.svg';
import { slides } from '~/utils/const/slides.onboarding';
import { useAppNavigation } from '~/utils/navigation';



const OnboardingCarousel = () => {
  const { replaceTo } = useAppNavigation();

  const renderSlide = ({ item }: any) => {
    const { title, text, image: ImageComponent } = item;

    return (
      <View className="flex-1 items-center justify-center px-8">
        <View className="mt-10 flex max-w-lg flex-col items-center">
          <ImageComponent className="mb-10 w-full" />
          <Text className="mt-10 font-poppinsSemiBold text-3xl text-dark-onBackground">
            {title}
          </Text>
          <Text className="text-center font-poppinsRegular text-lg text-dark-onBackgrounVariant">
            {text}
          </Text>
        </View>
      </View>
    );
  };

  const onDone = () => {
    replaceTo('/signin');
  };

  // Refactorizamos la creación del botón en una función común
  const renderButton = () => {
    return (
      <View className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-primary">
        <ArrowIcon />
      </View>
    );
  };

  const skipButton = () => {
    return (
      <View className="flex h-10 items-center justify-center">
        <Text className="text-dark-onBackgrounVariant">Omitir</Text>
      </View>
    );
  }

  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={onDone}
      showSkipButton
      renderSkipButton={skipButton}
      renderNextButton={renderButton} // Usamos la misma función para ambos botones
      renderDoneButton={renderButton}
      activeDotStyle={{ backgroundColor: '#49d199' }}
      onSkip={onDone}
    />
  );
};

export default OnboardingCarousel;
