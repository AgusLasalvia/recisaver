import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar'; // Importar StatusBar

export default function Layout() {
	return (
		<>
			<StatusBar style="light" backgroundColor="#161616" translucent={false} />
			<Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#161616" }, animation: "fade_from_bottom" }}>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="login" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</>
	)
}

