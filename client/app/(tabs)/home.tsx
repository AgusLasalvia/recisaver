import RecipeItem from "@/components/RecipeItem"
import { useState } from "react"
import { StyleSheet, View, TextInput, ScrollView } from "react-native"


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
				{food.map((item, key) => {
					return <RecipeItem title={item.title} img={item.img} id={item.id} key={key} />
				})}

			</View>
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#161616",
		display: "flex",
		alignItems: "center",
		height: '100%',
		paddingBottom: 100
	},
	searchBar: {
		backgroundColor: "#2b2b2b",
		height: 50,
		width: 250,
		marginTop: 30,
		borderRadius: 30,
		paddingLeft: 20,
		color: "orange"
	},

})

export default HomePage;