import { Stack } from 'expo-router';

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="(chat)" options={{ headerShown: false }} />
      
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: "Chat", 
          headerBackTitle: "Back" 
        }} 
      />
    </Stack>
  );
}