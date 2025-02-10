import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import { Link } from "expo-router"

interface RecipeItemProp {
	id: number
	img: any
	title: string
}

const RecipeItem = (params: RecipeItemProp) => {
	return (
		<View style={styles.contentContainer}>
			<Image source={params.img} style={styles.img} />
			<Text style={styles.title}>{params.title}</Text>
			<TouchableOpacity style={styles.details}>
				<Link href={`/(tabs)/home?id=${params.id}`}>
					<Text style={styles.text}>Details</Text>
				</Link>
			</TouchableOpacity>
		</View>
	)
};


const styles = StyleSheet.create({
	contentContainer: {
		backgroundColor: "#1d1d1d",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: 25,
		width: "80%",
		height: 340,
		borderRadius: 30
	},
	img: {
		width: "100%",
		height: 200,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	title: {
		width: "100%",
		textAlign: "left",
		paddingLeft: 20,
		marginTop: 20,
		fontSize: 30,
		color: "white",
		fontWeight: "bold"
	},
	details: {
		backgroundColor: "#ff9c2a",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		height: 45,
		borderRadius: 20,
		marginTop: 25
	},
	text: {
		color: "white",
		fontSize: 19
	}


})


export default RecipeItem;