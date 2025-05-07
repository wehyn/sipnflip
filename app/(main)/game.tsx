import { useColorScheme } from "@/hooks/useColorScheme";
import { useState } from "react";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Game() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const insets = useSafeAreaInsets();
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const addPlayer = () => {
    if (newPlayerName.trim() === "") return;
    setPlayers([...players, newPlayerName.trim()]);
    setNewPlayerName("");
  };

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
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

      <View className="flex-1 px-6 flex justify-between">
        <Text
          className={`text-2xl font-bold text-center mt-10 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Player Setup
        </Text>

        <View className="w-full">
          {players.map((player, index) => (
            <View
              key={index}
              className="flex-row items-center bg-[#D9D9D9] rounded-lg mb-2 px-4 py-3"
            >
              <Text className="flex-1 text-black">{player}</Text>
              <TouchableOpacity onPress={() => removePlayer(index)}>
                <Text className="text-black font-bold text-lg">×</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View className="flex-row mb-2">
            <TextInput
              className="flex-1 bg-[#D9D9D9] rounded-lg px-4 py-3 mr-2 text-black"
              placeholder="Add player name"
              placeholderTextColor="#777"
              value={newPlayerName}
              onChangeText={setNewPlayerName}
              onSubmitEditing={addPlayer}
            />
            <TouchableOpacity
              className="bg-green-500 rounded-lg px-4 justify-center"
              onPress={addPlayer}
            >
              <Text className="text-white font-semibold">+ Add</Text>
            </TouchableOpacity>
          </View>

          <Text
            className={`text-center mb-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Add 2 or more players to start the game
          </Text>
        </View>

        <TouchableOpacity
          className={`bg-red-800 rounded-md py-4 mb-6 ${
            players.length < 2 ? "opacity-50" : ""
          }`}
          activeOpacity={0.8}
          disabled={players.length < 2}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Start Game
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
