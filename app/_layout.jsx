import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { colours } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colours[colorScheme] || colours.light;

  console.log("Current color scheme:", colorScheme);
  let test = "favour";
  const decideNavigationTitle = () => {
    if (test === "favour") {
      return "Favour's Page";
    } else {
      return "Default Page";
    }
  };
  return (
    <>
    <StatusBar value="auto"/>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.text,
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "right",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="contact"
          options={{ title: decideNavigationTitle() }}
        />
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false, animation: "none" }}
        />

        <Stack.Screen
          name="(dashboard)"
          options={{ headerShown: false, animation: "none" }}
        />
      
        {/* To override the screen behaviour */}
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
