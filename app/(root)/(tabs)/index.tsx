import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-2xl my-14">
        Welcome to the Expo Router Example! </Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/(root)/(tabs)/explore">Explore</Link>
      <Link href="/(root)/(tabs)/profile">Profile</Link>
      <Link href="/(root)/properties/1">Property</Link>
    </View>
  );
}
