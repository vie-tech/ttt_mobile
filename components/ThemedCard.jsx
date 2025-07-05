import { View } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";

const ThemedCard = ({ className, children }) => {
  return (
    <ThemedView
      className={`bg-light-ui dark:bg-dark-ui p-4 rounded-lg shadow-md ${className}`}
      onTouchEnd={() => console.log("Card pressed")}
    >
      <ThemedText> {children}</ThemedText>
    </ThemedView>
  );
};

export default ThemedCard;
