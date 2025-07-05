import { Text, View, StyleSheet, Button, SafeAreaView, useColorScheme } from "react-native";
import "../global.css";
import { Link } from "expo-router";
import { colours } from "../constants/Colors";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";
import ThemedCard from "../components/ThemedCard";

const Index = () => {
    const colorScheme = useColorScheme();
    const theme = colours[colorScheme] || colours.light;    
  return (
   
      <ThemedView>
        <ThemedText className={`text-[20px]`}>This is the homepage</ThemedText>
        <Link href={"/login"} className="dark:text-dark-text text-light-text mt-10">Login</Link>
        <Link href={"/profile"} className="dark:text-dark-text text-light-text mt-10">Profile</Link>
    
        
      </ThemedView> 
  );
};

export default Index;

const styles = StyleSheet.create({});
