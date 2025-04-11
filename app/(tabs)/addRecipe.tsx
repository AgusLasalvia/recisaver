import { useState } from "react";
import { RecipeForm } from "@/util/forms";
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { type MediaType, launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';

const AddRecipePage = () => {
	const [addForm, setAddForm] = useState(RecipeForm)


	const mediatype: MediaType = "images"
	const pickImage = async () => {

		const permissionResult = await requestMediaLibraryPermissionsAsync();
		if (!permissionResult.granted) {
			alert("Permission to access gallery is required!");
			return;
		}

		const result = await launchImageLibraryAsync({
			mediaTypes: mediatype,
			allowsEditing: true,
			aspect: [16, 9],
			quality: 1,
		});

		if (!result.canceled && result.assets?.length > 0) {
			const { uri, fileName, mimeType } = result.assets[0];
			setAddForm((prevForm) => ({
				...prevForm,
				file: {
					imgUrl: uri,
					name: fileName || "unknown",
					type: mimeType || "image/jpeg",
				},
			}));
		}
	};








	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.mainContainer}>

				<View style={styles.inputContainer}>
					<Text style={styles.h2}>Recipe Name</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter Recipe Name"
						placeholderTextColor={"#94a3b8"}
						onChangeText={(value: string) => { setAddForm({ ...addForm, title: value }) }}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.h2}>Description</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter Short Description"
						placeholderTextColor={"#94a3b8"}
						onChangeText={(value: string) => { setAddForm({ ...addForm, description: value }) }}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.h2}>Instructions</Text>
					<TextInput
						style={styles.instruction}
						multiline={true}
						placeholder="Enter Instructions With Ingredients Included"
						placeholderTextColor={"#94a3b8"}
						onChangeText={(value: string) => { setAddForm({ ...addForm, instructions: value }) }}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.h2}>Upload Image</Text>
					<TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
						<Text style={styles.uploadButtonText}>Choose Image</Text>
					</TouchableOpacity>

					{/* Mostrar la imagen seleccionada */}
					<View style={styles.imgContainer}>
						{addForm.file.imgUrl && (
							<Image source={{ uri: addForm.file.imgUrl }} style={styles.image} />
						)}
					</View>
				</View>

				<TouchableOpacity style={styles.submitBtn} onPress={()=>{}}>
					<Text style={styles.submitText}>Submit</Text>
				</TouchableOpacity>

				<View>
					{/* <TouchableOpacity onPress={ }>
					<Text style={styles.uploadButtonText}></Text>
				</TouchableOpacity> */}
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scroll: {
		backgroundColor: "#161616",
		// display: "flex",
		// alignItems: "center",
		// height: '100%',
		// paddingBottom: 100
	},
	mainContainer: {
		backgroundColor: "#161616",
		display: "flex",
		alignItems: "center",
		height: '100%',
		paddingBottom: 100
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
		borderRadius: 10,
		paddingLeft: 18,
		color: "white",
	},
	instruction: {
		marginTop: 10,
		backgroundColor: "#2b2b2b",
		height: 150,
		borderRadius: 10,
		paddingLeft: 18,
		paddingTop: 15,
		color: "white",
		textAlignVertical: "top"
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
		height: 250,
		borderRadius: 30,
	},
	submitBtn: {
		marginTop: 20,
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
});

export default AddRecipePage;
