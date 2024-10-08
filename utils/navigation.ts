import { RouteProp, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useRouter, Href } from 'expo-router';

export const useAppNavigation = () => {
  const router = useRouter();

  const navigateTo = (path: Href) => {
    router.push(path);
  };

  const replaceTo = (path: Href) => {
    router.replace(path);
  };

  const goBack = () => {
    router.back();
  };

  return {
    navigateTo,
    replaceTo,
    goBack,
  };
};

type OptionsStack = {
  title: string;
};

export const optionsStack = ({ title }: OptionsStack) => {
  return (props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
  }): NativeStackNavigationOptions => ({
    headerShown: true, // Mostrar el header solo en login
    title, // Título del header
    headerBackVisible: true, // Mostrar la flecha de "volver"
    headerBackTitleVisible: false, // Ocultar el texto "Volver"
    headerTitleStyle: {
      fontFamily: 'Poppins_600SemiBold', // Fuente personalizada
      fontSize: 18,
      color: '#0d1220', // Color del texto
    },
    headerTintColor: '#000', // Color de la flecha de "volver"
    headerStyle: {
      backgroundColor: '#fff', // Asegurar que el color de fondo sea consistente
    },
    headerShadowVisible: false, // Eliminar la sombra en todas las plataformas
  });
};
