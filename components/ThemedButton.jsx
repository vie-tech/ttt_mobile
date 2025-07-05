import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const ThemedButton = ({ className, ...props }) => {
  return (
    <Pressable
      className={` px-8 py-4 rounded-lg active:opacity-75 flex items-center ${className}`}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({});
