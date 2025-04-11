import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import CategoryItem from "./CategoryItem";
import { getCategories } from "@/util/fetchConnector";
import FadeInItemCascade from "../Animations/FadeInItemCascade";

const CategorySlider = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getAllCategories = async () => {
			setCategories(await getCategories());
		}
		getAllCategories();
	}, [])

	return (
		<View style={{ height: 80 }}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ marginTop: 15, height: 80 }}
				contentContainerStyle={{ paddingHorizontal: 20 }}
			>
				{categories.map(({ name, id }, index) => (
					<FadeInItemCascade key={id} index={index}>
						<CategoryItem category={name} id={id} />
					</FadeInItemCascade>
				))}
			</ScrollView>
		</View>
	);
};

export default CategorySlider;
