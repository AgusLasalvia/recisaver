import { Link } from "expo-router";
import { useState } from "react";

import { TextInput, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text, Image } from "react-native";

const Login = () => {

	const [login, setLogin] = useState({
		username: "",
		password: ""
	})


	return (
		<>
			<View style={styles.container}>
				<Image source={require('@assets/images/login.png')} style={styles.img} />
				<Text style={styles.h1}>
					Log In
				</Text>
				<Text style={styles.p}>
					Discover and share delicous recipes easly
				</Text>

				<View style={styles.inputContainer}>
					<View>
						<TextInput
							style={styles.input}
							placeholder="Username"
							placeholderTextColor="#5d646e"
							maxLength={20}

							value={login.username}
							onChangeText={(value: string) => { setLogin({ ...login, username: value }) }}
						/>
						<TextInput
							style={styles.input}
							placeholder="Password"
							placeholderTextColor="#5d646e"
							secureTextEntry
							maxLength={16}
							value={login.password}
							onChangeText={(value: string) => { setLogin({ ...login, password: value }) }}
						/>
					</View>
					<TouchableOpacity style={styles.submitBtn}>
						<Link href={"/(tabs)/home"}>
							<Text style={styles.submitText}>Sign In</Text>
						</Link>
					</TouchableOpacity>
				</View>
			</View>
		</>
	)
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: "#161616",
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	},

	img: {
		width: 350,
		height: 350,
		marginBottom: 50
	},
	h1: {
		fontSize: 35,
		color: "white",
		fontStyle: "normal",
		fontWeight: "bold",
		marginBottom: 10
	},
	p: {
		fontSize: 20,
		color: "white",
		marginBottom: 20
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
	}
})

export default Login;