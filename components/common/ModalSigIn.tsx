import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import IconEmail from './icons/IconEmail';
import IconGmail from './icons/IconGmail';

interface ModalSigInProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const ModalSigIn = ({ modalVisible, setModalVisible }: ModalSigInProps) => {
  const handleSignInWithGoogle = () => {
    console.log('Sign in with Google');
  };

  const handleSignInWithEmail = () => {
    console.log('Sign in with Email');
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 items-center justify-end bg-dark-modalBackground">
          <View className="flex w-full items-center gap-4 rounded-xl bg-white px-6 py-12">
            <TouchableOpacity
              className="absolute right-6 top-2"
              onPress={() => setModalVisible(false)}>
              <Text className="text-xl text-dark-onSurfacePrimary">X</Text>
            </TouchableOpacity>
            <View className="w-full flex-row items-center justify-center gap-2 rounded-xl border border-dark-outline py-4">
              <IconGmail />
              <TouchableOpacity onPress={handleSignInWithGoogle}>
                <Text className="font-poppinsRegular text-dark-onSurfacePrimary">
                  Iniciar con Google
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-full flex-row items-center justify-center gap-2 rounded-xl border border-dark-outline py-4">
              <IconEmail />
              <TouchableOpacity onPress={handleSignInWithEmail}>
                <Text className="font-poppinsRegular text-dark-onSurfacePrimary">
                  Iniciar con Correo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalSigIn;
