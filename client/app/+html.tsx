import { ScrollViewStyleReset } from 'expo-router/html';
import { StyleSheet } from "react-native"
// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" style={styles.html}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

				{/* 
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native. 
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
				<ScrollViewStyleReset />

				{/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
				{/* Add any additional <head> elements that you want globally available on web... */}
			</head>
			<body style={styles.body}>{children}</body>
		</html>
	);
}

const styles = StyleSheet.create({
	html: {
		backgroundColor: "#161616"
	},
	body: {

		backgroundColor: "#161616",
		padding: 0,
		margin: 0,
	}
})