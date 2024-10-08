import { Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import ArrowIcon from '~/assets/icons/arrow-right.svg';
import Slide1Svg from '~/assets/images/carousels/slide-1.svg';
import Slide2Svg from '~/assets/images/carousels/slide-2.svg';
import Slide3Svg from '~/assets/images/carousels/slide-3.svg';
import { useAppNavigation } from '~/utils/navigation';

const slides = [
  {
    title: '¡Bienvenido!',
    text: `¡Felicitaciones por dar el primer paso ${'\n'} hacia una vida más saludable!`,
    image: Slide1Svg,
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
      <View className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-primary p-6">
        <ArrowIcon />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={onDone}
      renderNextButton={renderButton} // Usamos la misma función para ambos botones
      renderDoneButton={renderButton}
      activeDotStyle={{ backgroundColor: '#49d199' }}
    />
  );
};

export default OnboardingCarousel;
