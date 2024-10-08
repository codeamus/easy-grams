import { Text, TouchableOpacity } from 'react-native';

type DefaultButtonProps = {
  text: string;
  onPress: () => void;
};

const DefaultButton = ({ text, onPress }: DefaultButtonProps) => {
  const handleClickButton = () => {
    // Aquí puedes manejar el evento de clic en el botón
    onPress();
  };

  return (
    <TouchableOpacity
      className="w-full rounded-lg bg-dark-primary py-4"
      onPress={handleClickButton}>
      <Text className="text-center font-poppinsMedium text-white">{text}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
