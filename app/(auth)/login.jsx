import { StyleSheet, Text, View } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
const Login = () => {

  const handlePress = ()=>{
    console.log("Login button pressed");

  }
  return (
    <ThemedView className={"h-full "}>
      <ThemedText className={"font-bold text-[50px]"}>
        Login to your account
      </ThemedText>
 
      <ThemedButton className={"bg-indigo-700 mt-4"} onPress={handlePress}>
        <Text className="text-white font-semibold">Login</Text>
      </ThemedButton>

      <View className="flex flex-row gap-5 mt-10 text">
       <ThemedText className={"text-[20px] font-semibold"}><Link href={"/"}>Home</Link></ThemedText>
       <ThemedText className={"text-[20px] font-semibold"}><Link href={"/register"}>Register</Link></ThemedText>
       
      </View>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({});
