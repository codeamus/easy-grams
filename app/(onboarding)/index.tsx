import { View } from 'react-native';

import OnboardingCarousel from '~/components/carousel/OnboardingCarousel';
import { useTheme } from '~/context/ThemeContext';

const Onboarding = () => {
  const { theme } = useTheme();

  const styles = {
    container: `flex-1 ${theme === 'light' ? 'bg-light-background text-light-text' : 'bg-dark-background text-dark-text'}`,
  };

  return (
    <View className={styles.container}>
      <OnboardingCarousel />
    </View>
  );
};

export default Onboarding;
