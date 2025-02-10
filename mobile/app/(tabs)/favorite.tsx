import { ScrollView, View, StyleSheet, Text } from "react-native";

const Favorite = () => {
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.mainConatainer}>
				<Text style={styles.h1}>Favorites Recipes</Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scroll: {
		backgroundColor: "#161616",
		height: "100%",
		paddingBottom: 100
	},
	mainConatainer: {
		display: "flex",
		alignItems: "center",
	},
	h1: {
		marginTop: 20,
		color: "orange",
		fontSize: 40,
		fontWeight: "bold"
	}
})

export default Favorite;