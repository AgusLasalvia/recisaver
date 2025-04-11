import FloatingImage from "@/components/Animations/FloatingImage";
import { useEffect, useRef, useState } from "react";
import GlobalView from "@/components/GlobalView";
import { LoginFetch } from "@/util/fetchConnector";
import { useRouter } from "expo-router";
import { LoginForm } from "@/util/forms";
import CustomAlert from "@/components/Notifications/Alert";

import {
	TextInput, View, TouchableOpacity,
	StyleSheet, Text, KeyboardAvoidingView
	, Animated, Easing, ScrollView
} from "react-native";


// import CustomBottomSheet from "@/components/BottomSheet";

const Login = () => {


	const floatAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(floatAnim, {
					toValue: -10,
					duration: 900,
					easing: Easing.inOut(Easing.ease),
					useNativeDriver: true,
				}),
				Animated.timing(floatAnim, {
					toValue: 0,
					duration: 900,
					easing: Easing.inOut(Easing.ease),
					useNativeDriver: true,
				}),
			])
		).start();
	}, []);


	const [login, setLogin] = useState(LoginForm);
	const [alertMessage, setAlertMessage] = useState("")
	const [alertVisible, setAlertVisible] = useState(false);

	const router = useRouter();

	const handleLogin = async () => {
		// Aquí puedes agregar lógica de autenticación
		const response = await LoginFetch(login);
		console.log(response)
		if (response == null) {
			setAlertMessage("User Not Found");
			setAlertVisible(true);
		}
		else if (response !== undefined) {
			setAlertMessage("Login Success ...  Redirecting to Home");
			setAlertVisible(true);
			setTimeout(() => {
				router.push("/home")
			}, 2000)

		} else {
			setAlertMessage("Server Error");
			setAlertVisible(true);
		}
	};

	return (
		<GlobalView
			// behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<ScrollView
				style={{ flex: 1, backgroundColor: "#161616" }}
				contentContainerStyle={styles.container}
				keyboardShouldPersistTaps="handled"
			>
				<View style={styles.content}>

					{/* Floating Img with animation */}
					<FloatingImage
						source={require("@assets/images/login.png")}
						style={{ width: 250, height: 250, marginBottom: 50 }}
						resizeMode="contain"
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
				<CustomAlert visible={alertVisible} onClose={() => setAlertVisible(false)} message={alertMessage} />

			</ScrollView>
		</GlobalView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#161616", // esto es esencial
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
		width: 350,
		height: 350,
		marginBottom: 20
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
		height: 55,
		backgroundColor: "#2b2b2b",
		borderRadius: 10,
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
		borderRadius: 10
	},
	submitText: {
		color: "white",
		fontSize: 23,
		fontWeight: "bold"
	},
	signup: {
		color: "orange",
		marginTop: 45,
		fontSize: 20
	}
});

export default Login;
