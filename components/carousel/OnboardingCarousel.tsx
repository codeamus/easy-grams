import { useRouter, useFocusEffect } from 'expo-router';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import ArrowIcon from '~/assets/icons/arrow-right.svg';
import Slide1Svg from '~/assets/images/carousels/slide-1.svg';
import Slide2Svg from '~/assets/images/carousels/slide-2.svg';
import Slide3Svg from '~/assets/images/carousels/slide-3.svg';

const slides = [
  {
    title: '¡Bienvenido!',
    text: `¡Felicitaciones por dar el primer paso ${'\n'} hacia una vida más saludable!`,
    image: Slide1Svg, // Pasamos el componente SVG directamente sin JSX
  },
  {
    title: 'Seguimiento sin esfuerzo',
    text: 'Registra fácilmente tus comidas, snacks',
    image: Slide2Svg,
  },
  {
    title: 'Establecimiento de metas',
    text: 'Fija metas realistas y observa cómo tu progreso se desarrolla',
    image: Slide3Svg,
  },
];

const OnboardingCarousel = () => {
  const router = useRouter();
  // Cambiamos los parámetros para incluir el slide completo con la imagen
  const renderSlide = ({ item }: any) => {
    const { title, text, image: ImageComponent } = item; // Extraemos la imagen del objeto slide

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
    // Aquí puedes manejar la finalización del onboarding
    console.log('Onboarding terminado');
    router.replace('/signin');
  };

  const onSkip = () => {
    console.log('Onboarding saltado');
  };

  const renderNextButton = () => {
    return (
      <View className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-primary p-6">
        <ArrowIcon />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-primary p-6">
        <ArrowIcon />
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View className="h-5 w-10 bg-black">
        <Text className="text-white">Skip</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={onDone}
      onSkip={onSkip}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      activeDotStyle={{ backgroundColor: '#49d199' }}
    />
  );
};

export default OnboardingCarousel;
