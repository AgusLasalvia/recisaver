import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
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
					animation: "shift",
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						return <AntDesign name="home" size={size} color={color} focused={focused ? "orange" : color} />;
					}
				}} />
				<Tabs.Screen name="addRecipe" options={{
					animation: 'shift',
					title: "Add",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						return <FontAwesome6 name="add" size={size} color={color} focused={focused ? "orange" : color} />;
					}
				}} />
				<Tabs.Screen name="favorite" options={{
					animation: "shift",
					title: "Favorite",
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						return <Fontisto name="favorite" size={size} color={color} focused={focused ? "orange" : color} />;
					}
				}} />
			</Tabs>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2b2b2b",
	},
	tabBar: {
		borderTopWidth: 0,
		position: "absolute",
		backgroundColor: "#2b2b2b",
		borderRadius: 20,
		height: 70,
		marginLeft: 30,
		marginRight: 30,
		bottom: 20,
	},
	item: {
		marginTop: 10,
		marginBottom: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
});

export default TabLayout;
