import { useState } from "react";
import { useRouter } from "expo-router";

import { TextInput, View, TouchableOpacity, StyleSheet, Text, Image, KeyboardAvoidingView, Platform } from "react-native";
import { LoginForm } from "@/lib/forms";
import { submitLogin } from "@/lib/fetch";

const Login = () => {
	const [login, setLogin] = useState(LoginForm);

	const router = useRouter();

	const handleLogin = async () => {
		// Aquí puedes agregar lógica de autenticación
		const response = await submitLogin(login)
		if (response.status == 404)
			alert("User Not Found")
		else
			router.push("/(tabs)/home");
	};

	return (
		<KeyboardAvoidingView
			// behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.content}>
				<Image
					source={require('@assets/images/login.png')}
					style={styles.img}
				/>
				<Text style={styles.h1}>Log In</Text>
				<Text style={styles.p}>Discover and share delicious recipes easily</Text>

				<View style={styles.inputContainer}>
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

				<TouchableOpacity
					style={styles.submitBtn}
					onPress={handleLogin}>
					<Text
						style={styles.submitText} >Sign In</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => router.push("/signup")}
				>
					<Text style={styles.signup}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#161616",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		width: "100%",
	},
	img: {
		width: 250,
		marginBottom: 50
	},
	h1: {
		fontSize: 35,
		color: "white",
		fontWeight: "bold",
		marginBottom: 10
	},
	p: {
		fontSize: 20,
		color: "white",
		marginBottom: 20,
		textAlign: "center"
	},
	inputContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	input: {
		marginTop: 20,
		width: 270,
		height: 60,
		backgroundColor: "#2b2b2b",
		borderRadius: 30,
		paddingLeft: 20,
		fontSize: 20,
		color: "white"
	},
	submitBtn: {
		marginTop: 30,
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
	signup: {
		color: "orange",
		marginTop: 25,
		fontSize: 20
	}
});

export default Login;
