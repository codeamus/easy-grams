import { Stack } from 'expo-router';

import { optionsStack } from '~/utils/navigation';

export default function SigninLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Ocultar el header por defecto en todas las pantallas
      }}>
      {/* Aquí puedes configurar específicamente el header de la pantalla login */}
      <Stack.Screen name="login" options={optionsStack({ title: 'Login' })} />
    </Stack>
  );
}
