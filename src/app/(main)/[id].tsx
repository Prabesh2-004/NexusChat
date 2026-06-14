import { StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { UserData } from "@/data/users-data";

const IndividualChat = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const currentUser = UserData.find((user) => user.id === id);
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: currentUser?.username,
          headerBackTitle: "Back",
        }}
      />
      <View>
        <Text>{currentUser?.username}</Text>
      </View>
    </View>
  );
};

export default IndividualChat;

const styles = StyleSheet.create({});
