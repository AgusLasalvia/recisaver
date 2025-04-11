// components/CustomAlert.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CustomAlertProps {
	visible: boolean;
	message: string;
	onClose: () => void;
}

const CustomAlert = ({ visible, message, onClose }:CustomAlertProps) => {
	if (!visible) return null;

	return (
		<View style={styles.modalOverlay}>
			<View style={styles.alertBox}>
				<Text style={styles.alertText}>{message}</Text>
				<TouchableOpacity style={styles.alertButton} onPress={onClose}>
					<Text style={styles.alertButtonText}>OK</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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
		width: 250,
		alignItems: "center",
		height: 200,
		justifyContent: "center",
		gap:20
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

export default CustomAlert;
