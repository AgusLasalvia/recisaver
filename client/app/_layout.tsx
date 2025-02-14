import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar'; // Importar StatusBar

export default function Layout() {
	return (
		<>
			<StatusBar backgroundColor="#2b2b2b" />
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="login" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</>
	)
}