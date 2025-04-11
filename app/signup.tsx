import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Image } from "react-native";
import { SignInForm } from "@/util/forms";
import { useState } from "react";
import { SignUpFetch } from "@/util/fetchConnector";

import FloatingImage from "@components/Animations/FloatingImage";
import GlobalView from "@/components/GlobalView";
import CustomAlert from "@/components/Notifications/Alert";

const SignUp = () => {


	const [form, setForm] = useState(SignInForm);
	const [alertVisible, setAlertVisible] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");


	const router = useRouter();


	const handdleSubmit = async () => {
		const response = await SignUpFetch(form);
		if (response !== undefined) {
			setAlertMessage("User Created Successfully");
		} else {
			setAlertMessage("Unable To Create The User");
		}
		setAlertVisible(true);
	};

	return (
		<GlobalView style={styles.mainContainer}>

			<FloatingImage
				source={require('@assets/images/signup.png')}
				style={{ width: 250, height: 250, marginBottom: 30 }}
				resizeMode="contain"
			/>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					dataDetectorTypes={"address"}
					placeholderTextColor={"#5d646e"}
					onChangeText={(value: string) => setForm({ ...form, email: value })}
				/>
				<TextInput
					style={styles.input}
					placeholder="Username"
					maxLength={20}
					placeholderTextColor={"#5d646e"}
					onChangeText={(value: string) => setForm({ ...form, username: value })}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					maxLength={16}
					placeholderTextColor={"#5d646e"}
					secureTextEntry
					onChangeText={(value: string) => setForm({ ...form, password: value })}
				/>
			</View>

			<TouchableOpacity style={styles.submitBtn} onPress={handdleSubmit}>
				<Text style={styles.submitText}>Register</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => router.push("/login")}
			>
				<Text style={styles.login}>Log In</Text>
			</TouchableOpacity>

			<CustomAlert
				visible={alertVisible}
				message={alertMessage}
				onClose={() => setAlertVisible(false)} />

		</GlobalView>
	);
};

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
		height: 55,
		backgroundColor: "#2b2b2b",
		borderRadius: 10,
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
		borderRadius: 10
	},
	submitText: {
		color: "white",
		fontSize: 23,
		fontWeight: "bold"
	},
	login: {
		color: "orange",
		marginTop: 40,
		fontSize: 20
	},
	modalOverlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0,0,0,0.6)",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 10
	},
	alertBox: {
		backgroundColor: "#2b2b2b",
		padding: 30,
		borderRadius: 15,
		width: 280,
		alignItems: "center"
	},
	alertText: {
		color: "white",
		fontSize: 18,
		textAlign: "center",
		marginBottom: 20
	},
	alertButton: {
		backgroundColor: "#ff9c2a",
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 10
	},
	alertButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold"
	}
});

export default SignUp;
