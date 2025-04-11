import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import { Link } from "expo-router"

interface RecipeItemProp {
  id: number
  img: any
  title: string
}

const RecipeItem = (params: RecipeItemProp) => {
  return (
		// <Link href={`/recipe/${params.id}`} style={styles.contentContainer}>
		// 	<Image source={params.img} style={styles.img} resizeMode="cover" />
		// 	<Text style={styles.title} numberOfLines={1}>{params.title}</Text>
		// 	{/* <TouchableOpacity style={styles.details}>
		// 		<Text style={styles.text}>Details</Text>
		// 	</TouchableOpacity> */}
		// </Link>
		<></>
  )
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#1d1d1d",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    width: "80%",
    borderRadius: 30,
    paddingBottom: 20, // Agrega un poco de espacio abajo para evitar que el contenido toque el borde
  },
  img: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    width: "100%",
    textAlign: "left",
    paddingLeft: 20,
    marginTop: 20,
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    flexShrink: 1, // Hace que el texto se reduzca si es necesario
    overflow: 'hidden', // Evita que el texto se desborde
  },
  details: {
    backgroundColor: "#ff9c2a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 45,
    borderRadius: 20,
    marginTop: 25
  },
  text: {
    color: "white",
    fontSize: 19
  }
})

export default RecipeItem;
