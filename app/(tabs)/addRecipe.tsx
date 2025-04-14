import { useEffect, useState } from "react";
import { Picker } from '@react-native-picker/picker';

import { RecipeForm } from "@/util/forms";
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { type MediaType, launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';
import { newRecipeFetch, getCategories } from "@/util/fetchConnector"; // Asumo que aquí tienes el fetch para enviar la receta

const AddRecipePage = () => {
	const [addForm, setAddForm] = useState(RecipeForm);
	const [categories, setCategories] = useState([]);

	console.log(addForm.category_id)

	// Load Categories from server 
	useEffect(() => {
		const getAllCategories = async () => {
			setCategories(await getCategories());
		};

		getAllCategories();
	}, []);


	// Image Piker
	const mediatype: MediaType = "images";

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
				image: {
					imgUrl: uri,
					name: fileName || "unknown",
					type: mimeType || "image/jpeg",
				},
			}));
		}
	};

	const handleSubmit = async () => {
		if (!addForm.title || !addForm.description || !addForm.instructions || !addForm.image?.imgUrl) {
			alert("Please fill in all fields including the image.");
			return;
		}

		const formData = new FormData();

		formData.append('title', addForm.title);
		formData.append('description', addForm.description);
		formData.append('instructions', addForm.instructions);
		formData.append('user_id', "1");
		formData.append('category_id', String(addForm.category_id));
		formData.append('image', {
			uri: addForm.image.imgUrl,
			type: addForm.image.type || 'image/jpeg',
			name: addForm.image.name || 'photo.jpg',
		} as any);


		const response = await newRecipeFetch(formData);

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

				<View style={styles.container}>
					<Picker
						selectedValue={addForm.category_id}
						onValueChange={(value: any) => { setAddForm({ ...addForm, category_id: value }) }}
						style={styles.picker}
					>
						{categories.map(({ name, id }) => (
							<Picker.Item key={id} label={name} value={id} />
						))}

					</Picker>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.h2}>Upload Image</Text>
					<TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
						<Text style={styles.uploadButtonText}>Choose Image</Text>
					</TouchableOpacity>

					{/* Mostrar la imagen seleccionada */}
					<View style={styles.imgContainer}>
						{addForm.image?.imgUrl && (
							<Image source={{ uri: addForm.image.imgUrl }} style={styles.image} />
						)}
					</View>
				</View>

				<TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
					<Text style={styles.submitText}>Submit</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scroll: {
		backgroundColor: "#161616",
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
	container: {
		margin: 20,
		width: "90%",
		backgroundColor: '#2b2b2b',
		borderRadius: 10,
	},
	picker: {
		color: 'white',
		height: 50,
	},
});

export default AddRecipePage;
