import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // importa LinearGradient

export default function App() {
  return (
    <LinearGradient 
      colors={['#e7ad5c', '#70ee76', '#9056b8']} // color de grandientes, se sacan de una web
      style={styles.container}
    >
      <Text style={styles.text}>¡Hola Amigos, esta es una prueba entre con un texto y un gradiente de fondo.</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20, // Tamaño del texto
    fontWeight: '600', // Semi-negrita (600)
    color: 'green', // Color verde
  },
});
