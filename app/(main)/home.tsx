import { useColorScheme } from "@/hooks/useColorScheme";
import { router } from "expo-router";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const insets = useSafeAreaInsets();

  const handleStartGame = () => {
    router.push("/(main)/game");
  };

  return (
    <View
      className={`flex-1 ${isDark ? "bg-[#242323]" : "bg-gray-100"}`}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <View className="flex-1 justify-center items-center px-6">
        <Text
          className={`text-4xl font-bold mb-2 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          sip & flip
        </Text>
        <Text
          className={`text-lg mb-12 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          the ultimate drinking game
        </Text>

        <TouchableOpacity
          className="bg-red-800 w-full rounded-md py-4 mb-4"
          activeOpacity={0.8}
          onPress={handleStartGame}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Start New Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-800 w-full rounded-md py-4"
          activeOpacity={0.8}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Manage Decks
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
