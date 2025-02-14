import { Link } from "expo-router";
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Image } from "react-native";


const SignUp = () => {
	return (

		<View style={styles.mainContainer}>
			<Image source={require('@assets/images/signup.png')} style={styles.img} />

			<View style={styles.inputContainer}>
				<TextInput style={styles.input} placeholder="Email" dataDetectorTypes={"address"} placeholderTextColor={"#5d646e"} />
				<TextInput style={styles.input} placeholder="Username" maxLength={20} placeholderTextColor={"#5d646e"} />
				<TextInput style={styles.input} placeholder="Password" maxLength={16} placeholderTextColor={"#5d646e"} secureTextEntry />
			</View>

			<TouchableOpacity style={styles.submitBtn}>
				<Text style={styles.submitText}>Register</Text>
			</TouchableOpacity>

			<Link href={"/login"} style={styles.login}><Text>LogIn</Text></Link>


		</View>


	)
}


const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#161616",
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	},
	img: {
		width: 250,
		height: 250,
		borderRadius: 50,
		marginBottom: 50
	},
	inputContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	input: {
		marginTop: 30,
		width: 270,
		height: 60,
		backgroundColor: "#2b2b2b",
		borderRadius: 30,
		paddingLeft: 20,
		fontSize: 20,
		color: "white"
	},
	submitBtn: {
		marginTop: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff9c2a",
		width: 270,
		height: 60,
		borderRadius: 30
	},
	submitText: {
		color: "white",
		fontSize: 23,
		fontWeight: "bold"
	},
	login: {
		color: "orange",
		marginTop: 25,
		fontSize: 20
	}
})

export default SignUp