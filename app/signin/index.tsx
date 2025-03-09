import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Logo from '~/assets/images/logo/logo.svg';
import DefaultButton from '~/components/common/DefaultButton';
import ModalSigIn from '~/components/common/ModalSigIn';
import { useAppNavigation } from '~/utils/navigation';

const SigIn = () => {
  const { navigateTo } = useAppNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const goToLoginScreen = () => {
    navigateTo('/signin/login');
  };

  const openModalLogin = () => {
    console.log('Open modal login');
    setModalVisible(true);
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
        <View className="mt-4 flex flex-row items-center justify-center gap-1">
          <Text className="text-center font-poppinsRegular text-dark-onBackground">
            ¿Ya tienes una cuenta?{' '}
          </Text>
          <TouchableOpacity onPress={openModalLogin}>
            <Text className="text-dark-primary">Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalSigIn modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default SigIn;
