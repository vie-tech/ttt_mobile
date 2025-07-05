import { View, Pressable, Text, StyleSheet } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
const Register = () => {
  return (
    <ThemedView className={"h-full "}>
      <ThemedText className={"font-bold text-[50px]"}>
        Register your account
      </ThemedText>

      <ThemedButton className={"bg-indigo-700 mt-4"} onPress={() => console.log("Register button pressed")}>
        <Text className="text-white font-semibold">Register</Text>
      </ThemedButton>

      <View className="flex flex-row gap-5 mt-10">
        <ThemedText className={"text-[20px] font-semibold"}>
          <Link href={"/"}>Home</Link>
        </ThemedText>
        <ThemedText className={"text-[20px] font-semibold"}>
          <Link href={"/login"}>Login</Link>
        </ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },

  btn: {
    backgroundColor: "#4F46E5",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default Register;
