import Archived from "@/components/archived";
import ChatCard from "@/components/chat-card";
import { UserData } from "@/data/users-data";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ChatPage() {
  return (
    <View style={styles.container}>
      <Archived />
      <FlatList
        data={UserData}
        renderItem={({ item }) => <ChatCard users={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  content: {
    padding: 24,
  },

  main: {
    width: "100%",
    maxWidth: 960,
    alignSelf: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#38434D",
  },
});
