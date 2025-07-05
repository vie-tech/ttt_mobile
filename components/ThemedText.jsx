import { StyleSheet, Text } from "react-native";


const ThemedText = ({ className, children }) => {
  return (
    <Text className={`text-light-text dark:text-dark-text ${className}`}>
      {children}
    </Text>
  );
};

export default ThemedText;

const styles = StyleSheet.create({});
