import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import IconGmail from './icons/IconGmail';
import IconEmail from './icons/IconEmail';

const ModalSigIn = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View className="bg-dark-modalBackground flex-1 items-center justify-end">
        <View className="flex w-full items-center gap-4 rounded-xl bg-white px-6 py-12">
          <TouchableOpacity
            className="absolute right-6 top-2"
            onPress={() => setModalVisible(false)}>
            <Text className="text-dark-onSurfacePrimary text-xl">X</Text>
          </TouchableOpacity>
          <View className="border-dark-outline w-full flex-row items-center justify-center gap-2 rounded-xl border py-4">
            <IconGmail />
            <Text className="font-poppinsRegular text-dark-onSurfacePrimary">
              Iniciar con Google
            </Text>
          </View>
          <View className="border-dark-outline w-full flex-row items-center justify-center gap-2 rounded-xl border py-4">
            <IconEmail />
            <Text className="font-poppinsRegular text-dark-onSurfacePrimary">
              Iniciar con Correo
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSigIn;
