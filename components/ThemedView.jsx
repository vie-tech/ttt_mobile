import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ThemedView = ({ className, children }) => {
  return (
    <View
      className={`flex-1 bg-light-background dark:bg-dark-background ${className} py-24 px-4`}
    >
      {children}
    </View>
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
