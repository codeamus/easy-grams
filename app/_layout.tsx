import { Stack } from 'expo-router';

import { ThemeProvider } from '~/context/ThemeContext';
import '../global.css';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(onboarding)',
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
