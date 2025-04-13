import FoodItem from "@/components/Food/FoodItem";
import { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	ScrollView,
	Dimensions,
	Text,
	TouchableOpacity,
} from "react-native";
import CategorySlider from "@/components/Category/CategorySlider";
import FadeInItem from "@/components/Animations/FadeInItem";
import { getDayRecomendationRecepie } from "@/util/fetchConnector";

const screenHeight = Dimensions.get("window").height;


const HomePage = () => {
	const [search, setSearch] = useState("");
	const [food, setFood] = useState([]);
	const [refresh, setRefresh] = useState(true);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const getFood = async () => {
			if (isFetching) return;

			setIsFetching(true);

			const response = await getDayRecomendationRecepie();
			setFood(response);
			setRefresh(false);
			setIsFetching(false);
		};

		if (refresh) {
			getFood();
		}
	}, [refresh, isFetching]);




	return (
		<ScrollView style={{ backgroundColor: "#161616" }} showsVerticalScrollIndicator={false}>
			<View style={[styles.mainContainer, { marginBottom: 100 }]}>
				<TextInput
					style={styles.searchBar}
					placeholder="Search"
					placeholderTextColor={"orange"}
					value={search}
					onChangeText={(value: string) => {
						setSearch(value);
					}}
				/>

				<FadeInItem style={[styles.recomandedContainer, { marginTop: 30 }]}>
					<Text style={styles.h1}>Categories</Text>
				</FadeInItem>

				<CategorySlider />


				<FadeInItem style={[styles.recomandedContainer, { marginTop: 30 }]}>

					<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>

						<Text style={[styles.h1, { marginBottom: 10 }]}>Popular</Text>

						<TouchableOpacity onPress={() => setRefresh(true)} >
							<Text style={{ color: "orange", fontSize: 16 }}>Refresh</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.popularGrid}>
						{food.map(({ id, title, img }) => (
							<FoodItem key={id} id={id} img={img} title={title} />
						))}
					</View>
				</FadeInItem>
			</View >
		</ScrollView >
	);
};

const styles = StyleSheet.create({

	mainContainer: {
		backgroundColor: "#161616",
		display: "flex",
		alignItems: "center",
		height: screenHeight,
		paddingBottom: 200,
	},

	searchBar: {
		backgroundColor: "#2b2b2b",
		height: 50,
		maxWidth: 500,
		width: "70%",
		marginTop: 30,
		borderRadius: 10,
		paddingLeft: 20,
		color: "orange",
		position: "sticky"
	},

	h1: {
		color: "orange",
		width: "90%",
		fontSize: 30,
	},

	recomandedContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		width: "90%",
		marginTop: 10,
	},



	popularGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},


});

export default HomePage;
