import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	TouchableWithoutFeedback,
	Image
} from "react-native";


import { Link } from "expo-router";



const WelcomeScreen = () => {
	return (
		<TouchableWithoutFeedback>
			<View style={style.container}>
				<Image source={require('@assets/images/image.png')} style={style.img} />
				<Text style={style.h1}>
					RecipeSaver
				</Text>
				<Text style={style.p}>
					Organize your recipes easly
				</Text>

				<View style={style.btnContainer}>
					<TouchableOpacity style={style.btn}>
						<Link href="/login">
							<Text style={style.p}>Get Started</Text>
						</Link>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback >
	)
}

const style = StyleSheet.create({
	container: {
		backgroundColor: "#161616",
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	},

	img: {
		width: 300,
		height: 300,
		marginBottom: 50
	},
	h1: {
		fontSize: 40,
		color: "white",
		fontStyle: "normal",
		fontWeight: "bold",
		marginBottom: 10
	},
	p: {
		fontSize: 20,
		color: "white"
	},
	btnContainer: {
		backgroundColor: "#ff9c2a",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 230,
		borderRadius: 20,
		marginTop: 50
	},

	btn: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		width: 189,
		height: 52
	}
})

export default WelcomeScreen;