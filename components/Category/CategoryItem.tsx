import { Link } from "expo-router"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface CategoryItemProps {
	category: string
	id: number
}

const CategoryItem = ({ category, id }: CategoryItemProps) => {
	return (
		<Link href="https://google.com" asChild>
			<TouchableOpacity style={styles.container}>
				<Text style={styles.text}>{category}</Text>
			</TouchableOpacity>
		</Link>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#2b2b2b",
		height: 50,
		width: 100,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	text: {
		color: "white",
		fontSize: 18,
	}
})

export default CategoryItem
