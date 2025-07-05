import { Link } from "expo-router";
import { View, Text } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  return (
    <ThemedView className="flex-1">
      <ThemedText>This is the About page </ThemedText>

      <Link href="/">Back home</Link>
    </ThemedView>
  );
};

export default About;
