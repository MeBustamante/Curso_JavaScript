import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // importa el LinearGradient

export default function App() {
  return (
    <LinearGradient 
      colors={['#833ab4', '#fd1d1d', '#fcb045']} // los codigos de colores, se buscan en google
      style={styles.container} // aplica el estilo container para el tamaño
    >
      <Text style={styles.text}>Hola mundo, con una imagen cálida de fondo.</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // para toda la pantalla
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20, // tamaño del texto
    fontWeight: '600', // negrita
    color: 'black', // letra color negro
  },
});
