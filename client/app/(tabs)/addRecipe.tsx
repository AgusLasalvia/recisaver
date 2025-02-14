import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";
import { type MediaType, requestCameraPermissionsAsync, launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';

const AddRecipePage = () => {
	const [imageUri, setImageUri] = useState<string | null>(null);

	const mediatype: MediaType = "images"

	const pickImage = async () => {
		const permissionResult = await requestMediaLibraryPermissionsAsync();
		if (permissionResult.granted === false) {
			alert("Permission to access gallery is required!");
			return;
		}


		const result = await launchImageLibraryAsync({
			mediaTypes: mediatype,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled && result.assets && result.assets[0]) {
			const uri = result.assets[0].uri;
			setImageUri(uri);
		}
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Recipe Name</Text>
				<TextInput style={styles.input} placeholder="Enter Recipe Name" placeholderTextColor={"#94a3b8"} />
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Ingredients</Text>
				<TextInput style={styles.input} placeholder="Enter Ingredients" placeholderTextColor={"#94a3b8"} />
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Instructions</Text>
				<TextInput style={styles.input} placeholder="Enter Instructions" placeholderTextColor={"#94a3b8"} />
			</View>

			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Upload Image</Text>
				<TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
					<Text style={styles.uploadButtonText}>Choose Image</Text>
				</TouchableOpacity>

				{/* Mostrar la imagen seleccionada */}
				<View style={styles.imgContainer}>
					{imageUri && (
						<Image source={{ uri: imageUri }} style={styles.image} />
					)}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#161616",
		display: "flex",
		alignItems: "center",
		height: '100%',
		paddingBottom: 100,
	},
	h2: {
		color: "white",
		fontSize: 18,
	},
	inputContainer: {
		width: "90%",
		margin: 15,
	},
	input: {
		marginTop: 10,
		backgroundColor: "#2b2b2b",
		height: 60,
		borderRadius: 20,
		paddingLeft: 18,
		color: "white",
	},
	uploadButton: {
		marginTop: 10,
		backgroundColor: "#FF8C00",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 10,
	},
	uploadButtonText: {
		color: "white",
		fontSize: 16,
	},
	imgContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",


	},
	image: {
		marginTop: 10,
		width: 350,
		height: 350,
		borderRadius: 30,
	},
});

export default AddRecipePage;
