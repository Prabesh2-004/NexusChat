import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Data = {
  id: string;
  username: string;
  avatar: string;
  last_message: string;
  time: string;
};

const ChatCard = ({ users }: { users: Data }) => {
  return (
    <Link href={`/(main)/${users.id}` as any} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: users.avatar }} style={styles.avatarImage} />
        <View style={styles.infoBox}>
          <View style={styles.uernameBox}>
            <Text style={styles.username}>{users.username}</Text>
            <Text>{users.time}</Text>
          </View>
          <Text style={styles.last_message} numberOfLines={1}>
            {users.last_message}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    alignItems: "center",
  },
  username: {
    fontWeight: "500",
    fontSize: 16,
  },
  infoBox: {
    flex: 1,
  },
  uernameBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
  },
  last_message: {
    maxWidth: "80%",
  },
});
