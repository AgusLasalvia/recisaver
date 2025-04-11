import RecipeItem from "@/components/RecipeItem"
import { useState } from "react"
import { StyleSheet, View, TextInput, ScrollView, Dimensions, Text } from "react-native"
import CategorySlider from "@/components/Category/CategorySlider"
import FadeInItem from "@/components/Animations/FadeInItem"

const screenHeight = Dimensions.get('window').height

// Delete this after DB implementation
const food = [
	{ title: "Pizza", img: require("@assets/images/food/pizza.png"), id: 1 },
	{ title: "Chocolate Fudge Cake", img: require("@assets/images/food/pasta.png"), id: 2 },
	{ title: "Tomato Basil Pasta", img: require("@assets/images/food/salad.png"), id: 3 },
	{ title: "pizza", img: require("@assets/images/food/pizza.png"), id: 1 },
	{ title: "pasta", img: require("@assets/images/food/pasta.png"), id: 2 },
]



const HomePage = () => {

	const [search, setSearch] = useState("")


	return (
		<ScrollView >
			<View style={styles.mainContainer}>
				<TextInput
					style={styles.searchBar}
					placeholder="Search"
					placeholderTextColor={"orange"}
					value={search}
					onChangeText={(value: string) => { setSearch(value) }}
				/>
				<Text style={styles.h1}>Categories</Text>
				<CategorySlider />

				<FadeInItem>
					<Text style={styles.h1}>Popular</Text>
				</FadeInItem>




			</View>
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#161616",
		display: "flex",
		alignItems: "center",
		height: screenHeight,
		paddingBottom: 100
	},
	searchBar: {
		backgroundColor: "#2b2b2b",
		height: 50,
		width: "70%",
		maxWidth: 500,
		marginTop: 30,
		borderRadius: 10,
		paddingLeft: 20,
		color: "orange",
		position: "sticky"
	},


	h1: {
		color: "orange",
		width: "90%",
		marginTop: 40,
		fontSize: 30
	}

})

export default HomePage;