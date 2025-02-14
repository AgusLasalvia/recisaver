import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const AddRecipePage = () => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Recipe Name</Text>
				<TextInput
					style={styles.input}
					placeholder="test"
					placeholderTextColor={"#94a3b8"}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Ingrredients</Text>
				<TextInput
					style={styles.input}
					placeholder="test"
					placeholderTextColor={"#94a3b8"}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Instructions</Text>
				<TextInput
					style={styles.input}
					placeholder="test"
					placeholderTextColor={"#94a3b8"}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.h2}>Upload Image</Text>
				<TextInput
					style={styles.input}
					placeholder="test"
					placeholderTextColor={"#94a3b8"}
				/>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#161616",
		display: "flex",
		alignItems: "center",
		height: '100%',
		paddingBottom: 100
	},
	h2: {
		color: "white",
		fontSize: 18
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
		paddingLeft:18,
		color:"white"
	}
})

export default AddRecipePage;