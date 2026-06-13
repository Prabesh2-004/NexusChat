// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Stack } from "expo-router";
// import AuthProvider from "@/providers/auth-provider";

// const RootLayout = () => {
//   return (
//     <AuthProvider>
//       <Stack>
//         <Stack.Screen name="(chat)" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//       </Stack>
//     </AuthProvider>
//   );
// };

// export default RootLayout;

// const styles = StyleSheet.create({});

import { Slot, router } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/providers/auth-provider";

function RootLayoutNav() {
  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      router.replace("/(chat)");
    } else {
      router.replace("/(auth)/auth");
    }
  }, [session]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
