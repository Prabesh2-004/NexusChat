import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { Color, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const theme = {
  light: {
    background: "#fff",
    text: "#000",
    inputBackground: "#dedede"
  },
  dark: {
    background: "#000",
    text: "#fff",
    inputBackground: "#444444"
  },
};

const ChatLayout = () => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? theme.dark : theme.light;
  return (
    <Tabs
      screenOptions={{ headerShown: true, tabBarActiveTintColor: "#62BFED" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          header: () => (
            <SafeAreaView edges={["top"]} style={[styles.container, {backgroundColor: colors.background}]}>
              <View style={styles.subContainer}>
                <Text style={[styles.headerName, {color: colors.text}]}>NexusChat</Text>

                <Pressable>
                  <Entypo name="dots-three-vertical" size={24} color={colors.text} />
                </Pressable>
              </View>

              <TextInput placeholder="Search..." placeholderTextColor={'gray'} style={[styles.search, {backgroundColor: colors.inputBackground, color: colors.text}]} />
            </SafeAreaView>
          ),
          tabBarIcon({ color, size }) {
            return <Ionicons name="chatbubbles" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Explore",
          tabBarIcon({ color, size }) {
            return <AntDesign name="compass" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon({ color, size }) {
            return <Ionicons name="settings" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default ChatLayout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  search: {
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: "#dedede",
    color: "#fff"
  },
});
