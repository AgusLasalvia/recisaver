import { useState } from "react";
import FavoriteItem from "@/components/FavoriteItem";
import { ScrollView, View, StyleSheet, Text, TextInput } from "react-native";

const FavoritePage = () => {
	
	const [search,setSearch] = useState("")
	
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.mainConatainer}>
				<TextInput
					style={styles.searchBar}
					placeholder="Search"
					placeholderTextColor={"orange"}
					value={search}
					onChangeText={(value: string) => { setSearch(value) }}
				/>
				<Text style={styles.h1}>Favorites Recipes</Text>

				<FavoriteItem title="Tomato Basil Soup" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Mixed Green Salad" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Tomato Basil Soup" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Chocolate Fudge Cake" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Pasta" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Pasta" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Pasta" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Pasta" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Pasta" img={require('@assets/images/food/pasta.png')} id={1} />
				<FavoriteItem title="Pasta" img={require('@assets/images/food/pasta.png')} id={1} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scroll: {
		backgroundColor: "#161616",
		height: "100%",
	},
	mainConatainer: {
		display: "flex",
		alignItems: "center",
		paddingBottom: 100
	},
	h1: {
		marginTop: 20,
		color: "orange",
		fontSize: 40,
		fontWeight: "bold"
	}, searchBar: {
		backgroundColor: "#2b2b2b",
		height: 50,
		maxWidth: 500,
		width:"70%",
		marginTop: 30,
		borderRadius: 30,
		paddingLeft: 20,
		color: "orange",
		position: "sticky"
	},
})

export default FavoritePage;