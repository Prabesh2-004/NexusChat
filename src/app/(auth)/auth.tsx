import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Appearance } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";


export default function Auth() {
  const colorScheme = Appearance.getColorScheme();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [error, setError] = useState("");

  async function sendOtp() {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) return setError(error.message);
    setStep("otp");
  }

  async function verifyOtp() {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });
    if (error) return setError(error.message);
    router.replace("/(main)/(chat)");
  }

  return (
    <View style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image
          source={
            colorScheme === "light"
              ? require("@/../assets/logos/logoBlack.png")
              : require("@/../assets/logos/logoWhite.png")
          }
          style={styles.logo}
        />
        <Text style={styles.textHeading}>Welcome</Text>
        <Text style={styles.textDescription}>
          Please Signin with your Email
        </Text>
        {error && <Text>{error}</Text>}
        {step === "email" ? (
          <View style={{ width: "100%", alignItems: "center" }}>
            <TextInput
              placeholder="Email"
              value={email}
              style={styles.inputBar}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={sendOtp} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ width: "100%", alignItems: "center" }}>
            <TextInput
              placeholder="Enter OTP"
              value={otp}
              style={styles.inputBar}
              onChangeText={setOtp}
              keyboardType="number-pad"
            />
            <TouchableOpacity
              onPress={verifyOtp}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  textHeading: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
  },
  textDescription: {
    fontSize: 16,
    marginBottom: 32,
  },
  inputBar: {
    width: "90%",
    padding: 12,
    marginBottom: 16,
    backgroundColor: "rgba(228, 228, 228, 0.98)",
    borderRadius: 8,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#62BFED",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 16,
    textAlign: "left",
    width: "90%",
  },
});

// import { useState } from "react";
// import { View, TextInput, Button, Text } from "react-native";
// import { supabase } from "@/lib/supabase";
// import { router } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState<"email" | "otp">("email");
//   const [error, setError] = useState("");

//   async function sendOtp() {
//     const { error } = await supabase.auth.signInWithOtp({ email });
//     if (error) return setError(error.message);
//     setStep("otp");
//   }

//   async function verifyOtp() {
//     const { error } = await supabase.auth.verifyOtp({
//       email,
//       token: otp,
//       type: "email",
//     });
//     if (error) return setError(error.message);
//     router.replace("/(chat)");
//   }

//   return (
//     <SafeAreaView>
//       <View>
//         {step === "email" ? (
//           <>
//             <TextInput
//               placeholder="Email"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             <Button title="Send OTP" onPress={sendOtp} />
//           </>
//         ) : (
//           <>
//             <TextInput
//               placeholder="Enter OTP"
//               value={otp}
//               onChangeText={setOtp}
//               keyboardType="number-pad"
//             />
//             <Button title="Verify OTP" onPress={verifyOtp} />
//           </>
//         )}
//         {error ? <Text>{error}</Text> : null}
//       </View>
//     </SafeAreaView>
//   );
// }
