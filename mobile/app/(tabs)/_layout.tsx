
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';


const TabLayout = () => {
	return (
		<View style={styles.container}>
			<Tabs screenOptions={{ tabBarActiveTintColor: "orange", tabBarStyle: styles.tabBar }}>
				<Tabs.Screen name="home" options={{ title: "Home", headerShown: false }} />
				<Tabs.Screen name="addRecipe" options={{ title: "Add", headerShown: false }} />
				<Tabs.Screen name="favorite" options={{ title: "Favorite", headerShown: false }} />

			</Tabs>
		</View>
	);
};

// Estilos personalizados para el icono y el fondo curvado
const styles = StyleSheet.create({

	container: {
		flex: 1,

		backgroundColor: "#2b2b2b", // Fondo oscuro para evitar el blanco detrás del TabBar
	},
	tabBar: {
		borderTopWidth: 0,
		position: "absolute", // Hace que flote sobre la pantalla
		backgroundColor: "#2b2b2b", // Color de fondo del TabBar
		// borderTopLeftRadius: 20, // Bordes redondeados
		// borderTopRightRadius: 20,
		borderRadius: 20,
		// right:1,
		height: 70, // Altura personalizada
		marginLeft: 30,
		marginRight: 30,
		bottom: 20, // Elevar el TabBar un poco
		// shadowColor: "#000", // Sombra para un mejor efecto visual
		// shadowOpacity: 0.2,
		// shadowRadius: 10,
		// elevation: 5, // Para sombra en Android
	},
});

export default TabLayout;
