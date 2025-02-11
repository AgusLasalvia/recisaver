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
							<Link href={`/pages/recepie?id=${props.id}`} >
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
		borderRadius: 30,
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
		width: 100, // Ancho fijo
		height: 100, // Alto fijo, igual al ancho para mantener el círculo
		borderRadius: 50, // Mitad del tamaño de la imagen para hacerla un círculo
		marginRight: 10
	},
	btnsContainer: {
		marginTop: 20,
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
		width: "50%",
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