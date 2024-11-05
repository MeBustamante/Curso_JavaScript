import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
      colors={['#FFA500', '#FF4500']} // colores en gradiente de atardecer
      style={styles.container}
    >
      
      {/* contenedor para la imagen del album */}
      <View style={styles.albumContainer}>
        
        {/* imagen del album */}
        <Image
          source={require('./assets/musica1.png')} // poner la imagen en la carpeta assets
          style={styles.albumImage}
        />
        
        {/* titulo de la cancion */}
        <Text style={styles.songTitle}>Can’t Hold Us</Text>
        
        {/* nombre del artista */}
        <Text style={styles.artist}>Macklemore & Ryan Lewis</Text>
      </View>

      {/* boton de me gusta */}
      <Pressable style={styles.likeButton}>
        <FontAwesome name="heart" size={30} color="red" />
      </Pressable>

      {/* controles de musica */}
      <View style={styles.controls}>
        <Pressable style={styles.controlButton}>
          <Ionicons name="play-skip-back-outline" size={30} color="white" />
        </Pressable>
        <Pressable style={styles.controlButton}>
          <Ionicons name="play-circle-outline" size={40} color="white" />
        </Pressable>
        <Pressable style={styles.controlButton}>
          <Ionicons name="play-skip-forward-outline" size={30} color="white" />
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    justifyContent: 'center', // centra verticalmente
    alignItems: 'center', // centra horizontalmente
  },
  albumContainer: {
    alignItems: 'center', // centra contenido del contenedor
    marginBottom: 20, // espacio debajo de la imagen
  },
  albumImage: {
    width: 200, // ancho de la imagen
    height: 200, // alto de la imagen
    borderRadius: 10, // bordes redondeados
    marginBottom: 10, // espacio debajo de la imagen
    shadowColor: '#000', // sombra para dar profundidad
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  songTitle: {
    fontSize: 20, // tamano del texto
    fontWeight: 'bold', // texto en negrita
    color: '#FFD700', // color amarillo
  },
  artist: {
    fontSize: 14, // tamano del texto del artista
    color: '#FFF', // color blanco
  },
  likeButton: {
    marginVertical: 20, // espacio alrededor del boton
  },
  controls: {
    flexDirection: 'row', // coloca los botones en fila
    justifyContent: 'space-around', // espacio entre botones
    width: '60%', // ancho de la fila
  },
  controlButton: {
    padding: 10, // espacio dentro de cada boton
    borderRadius: 5, // bordes redondeados
  },
});
