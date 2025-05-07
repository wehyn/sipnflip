import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";
import React from "react";

export default function MainLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "transparent",
        },
        animation: "fade",
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="game" />
    </Stack>
  );
}
