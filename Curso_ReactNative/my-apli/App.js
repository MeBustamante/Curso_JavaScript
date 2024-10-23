import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // importa

export default function App() {
  return (
    <LinearGradient 
      colors={['#833ab4', '#fd1d1d', '#fcb045']} // colores del gradiente que se sacan de google
      style={styles.container} // aplica el estilo container para el tamaño
    >
      {/* Imagen local (Logo) */}
      <Image 
      source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />

      {/* Texto debajo de la imagen local */}
      <Text style={styles.text}>Departamento de Medio Ambiente.</Text>
      
      {/* Imagen desde Internet en la parte baja */}
      <Image 
        source={{ uri: 'https://i1.wp.com/www.drupal.org/files/issues/2020-01-26/google_logo.png' }} // imagen desde Internet
        style={styles.bottomImage} 
        resizeMode="contain" 
      />
      
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    alignItems: 'center', // centra horizontalmente
    justifyContent: 'center', // centra verticalmente
    position: 'relative', // para posicionar la imagen inferior
  },
  logo: {
    width: 350, // ancho de la imagen del logo 
    height: 250, // alto de la imagen del logo 
    marginBottom: 20, // espacio entre el logo y el texto
  },
  text: {
    fontSize: 20, // tamaño del texto
    fontWeight: '600', // negrita
    color: 'black', // letra color negro
    marginBottom: 100, // espacio entre imagenes
  },
  bottomImage: {
    width: 200, // ancho de la imagen inferior
    height: 100, // alto de la imagen inferior
    position: 'absolute', // posiciona la imagen absolutamente
    bottom: 30, // 30 pixeles desde la parte inferior de la pantalla
  },
});
