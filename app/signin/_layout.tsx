import { Stack } from 'expo-router';

export default function SigninLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Ocultar el header por defecto en todas las pantallas
      }}>
      {/* Aquí puedes configurar específicamente el header de la pantalla login */}
      <Stack.Screen
        name="login"
        options={{
          headerShown: true, // Mostrar el header solo en login
          title: 'Iniciar sesión', // Título del header
          headerBackVisible: true, // Mostrar la flecha de "volver"
          headerBackTitleVisible: false, // Ocultar el texto "Volver"
          headerTitleStyle: {
            fontFamily: 'Poppins_600SemiBold', // Fuente personalizada
            fontSize: 20,
            color: '#0d1220', // Color del texto
          },
        }}
      />
    </Stack>
  );
}
