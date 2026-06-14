import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Archived = () => {
  return (
    <Pressable style={styles.container}>
      <Ionicons name="archive" size={24} color="black" />
      <Text style={styles.text}>Archived</Text>
    </Pressable>
  );
};

export default Archived;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  text: {
    fontWeight: 800,
    color: "gray"
  }
});
