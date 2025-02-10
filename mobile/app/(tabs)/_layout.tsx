
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Icons
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';


const TabLayout = () => {
	return (
		<View style={styles.container}>
			<StatusBar translucent={false} backgroundColor='#2b2b2b' />
			<Tabs screenOptions={{
				tabBarActiveTintColor: "orange", tabBarStyle: styles.tabBar, tabBarItemStyle: styles.item,
			}}>
				<Tabs.Screen name="home" options={{
					title: "Home", headerShown: false, tabBarIcon: ({ focused, color, size }) => {
						return <AntDesign name="home" size={size} color={color} focused={focused ? "orange" : color} />; // Ícono de Home
					}
				}} />
				<Tabs.Screen name="addRecipe" options={{
					title: "Add", headerShown: false, tabBarIcon: ({ focused, color, size }) => {
						return <FontAwesome6 name="add" size={size} color={color} focused={focused ? "orange" : color} />; // Ícono de Home
					}
				}} />
				<Tabs.Screen name="favorite" options={{
					title: "Favorite", headerShown: false, tabBarIcon: ({ focused, color, size }) => {
						return <Fontisto name="favorite" size={size} color={color} focused={focused ? "orange" : color} />; // Ícono de Home
					}
				}} />

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
	item: {
		marginTop: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
});

export default TabLayout;
