import { Link } from "expo-router";
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Image } from "react-native";
import { SignInForm } from "@/lib/forms";
import { useState } from "react";
import { submitSignUp } from "@/lib/fetch";

const SignUp = () => {
	const [form, setForm] = useState(SignInForm);

	const handdleSubmit = async () => {
		const response = await submitSignUp(form)
		if (response != undefined)
			alert("User Created Successfuly")
		else
			alert("Unable To Create The User")
	}

	return (

		<View style={styles.mainContainer}>
			<Image source={require('@assets/images/signup.png')} style={styles.img} />

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					dataDetectorTypes={"address"}
					placeholderTextColor={"#5d646e"}
					onChangeText={(value: string) => { setForm({ ...form, email: value }) }}
				/>
				<TextInput
					style={styles.input}
					placeholder="Username"
					maxLength={20}
					placeholderTextColor={"#5d646e"}
					onChangeText={(value: string) => { setForm({ ...form, username: value }) }}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					maxLength={16}
					placeholderTextColor={"#5d646e"}
					secureTextEntry
					onChangeText={(value: string) => { setForm({ ...form, password: value }) }}
				/>
			</View>

			<TouchableOpacity style={styles.submitBtn} onPress={handdleSubmit}>
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