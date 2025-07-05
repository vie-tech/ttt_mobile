import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View className="flex-1">
      <Text>Contact</Text>
       <Link href="/">Back home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})