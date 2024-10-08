import { View, Text, TouchableOpacity } from 'react-native';

import Logo from '~/assets/images/logo/logo.svg';
import DefaultButton from '~/components/common/DefaultButton';

const SigIn = () => {
  const goToLoginScreen = () => {
    console.log('Go to login screen');
  };

  const openModalLogin = () => {
    console.log('Open modal login');
  };

  return (
    <View className="flex-1 items-center justify-center px-8">
      <Logo className="w-full" />
      <Text className="mt-10 font-poppinsSemiBold text-3xl text-dark-onBackground">
        ¡Bienvenido!
      </Text>
      <Text className="font-poppinsRegular text-xl text-dark-onBackgrounVariant">
        Comienza o inicia sesión en tu cuenta
      </Text>
      <View className="absolute bottom-36 flex w-full flex-col">
        <DefaultButton text="Comenzar" onPress={goToLoginScreen} />
        <Text className="mt-4 text-center font-poppinsRegular text-dark-onBackground">
          Already have an account?{' '}
          <TouchableOpacity onPress={openModalLogin}>
            <Text className="text-dark-primary">Sign in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SigIn;
