import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Artista = ({ artist, onClose }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.artistName}>CAMILO </Text>
      <Text style={styles.artistDescription}> Camilo Echeverry Correa, conocido en el medio artístico como Camilo, es un cantante, actor y compositor colombiano. Nació el 16 de marzo de 1994 en Medellín, Colombia. En 2007 se dio a conocer al ganar en el programa de talentos "Factor X", transmitido por la televisión de su país.</Text>
      <Button title="Cerrar" onPress={onClose} color="#FF5733" />
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  artistName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artistDescription: {
    textAlign: 'justify',
    marginBottom: 20,
  },
});

export default Artista;
