import { Link } from "expo-router";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface FavoriteItemProps {
	id: number
	img: any
	title: string
}

const FavoriteItem = (props: FavoriteItemProps) => {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.itemContent}>
				<Image source={props.img} style={styles.img} />
				<View>
					<Text style={styles.title}>{props.title}</Text>
					<View style={styles.btnsContainer}>

						<TouchableOpacity style={styles.btnView}>
							<Link href={`/pages/recipe?id=${props.id}`} >
								<Text style={styles.btnText}>View</Text>
							</Link>
						</TouchableOpacity >

						<TouchableOpacity style={styles.btnRemove}>
							<Text style={styles.btnText}>Remove</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View >
	)
};

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: "#1d1d1d",
		display: "flex",
		justifyContent: "center",
		marginTop: 25,
		width: "90%",
		height: 130,
		borderRadius: 10,
		maxWidth: 450
	},
	itemContent: {
		paddingLeft: 30,
		paddingRight: 30,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		maxWidth: 450
	},
	img: {
		width: 100,
		height: 100, 
		borderRadius: 15, 
		marginRight: 10
	},
	btnsContainer: {
		marginTop: 12,
		display: "flex",
		flexDirection: "row",
		gap: 10
	},
	title: {
		color: "white",
		fontSize: 22,
		flexShrink: 1,
		width: "70%",
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	btnView: {
		width: 70,
		height: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "orange",
		borderRadius: 20
	},
	btnRemove: {
		width: 90,
		marginLeft: 5,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "orange",
		borderRadius: 20
	},
	btnText: {
		textAlign: "center",
		color: "white",
		fontSize: 18,
		fontWeight: "bold"
	}
});


export default FavoriteItem;