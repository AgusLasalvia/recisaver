import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from "react-native"
import { Link } from "expo-router"

interface RecipeItemProp {
	id: number
	img: any
	title: string
}

const FoodItem = (params: RecipeItemProp) => {
	return (
		<TouchableOpacity key={params.id} style={styles.popularItem}>
			<ImageBackground
				source={params.img}
				resizeMode="cover"
				style={styles.imageBackground}
				imageStyle={{ borderRadius: 10 }}
				alt="Food Imgage"
			/>
			<Text style={styles.popularText}>{params.title}</Text>
		</TouchableOpacity>

	)
};

const styles = StyleSheet.create({

	popularItem: {
		width: "47%",
		marginBottom: 30,
	},

	popularText: {
		color: "white",
		marginTop: 10,
		fontSize: 16,
		textAlign: "center",
	}, imageBackground: {
		width: "100%",
		height: 150,
		justifyContent: "center",
		alignItems: "center",
	},

})

export default FoodItem;
