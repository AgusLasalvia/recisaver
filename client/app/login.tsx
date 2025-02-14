import { useState } from "react";
import { useRouter } from "expo-router"; // Importa useRouter de expo-router
import { TextInput, View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const router = useRouter(); // Usamos el hook useRouter

  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación
    router.push("/(tabs)/home"); // Usamos router.push para navegar a la página de inicio
  };

  return (
    <View style={styles.container}>
      <Image source={require('@assets/images/login.png')} style={styles.img} />
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

      <TouchableOpacity style={styles.submitBtn} onPress={handleLogin}>
        <Text style={styles.submitText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.signup}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
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
    marginBottom: 20
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
    height: 60,
    backgroundColor: "#2b2b2b",
    borderRadius: 30,
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
