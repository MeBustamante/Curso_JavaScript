import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// componente para la pantalla Alfa
const Alfa = ({ route }) => {
  const { type } = route.params; // obtengo el tipo de la navegación
  
  // defino el mensaje según el tipo
  let message;
  if (type === 'home') {
    message = 'Bienvenidos al Home';
  } else if (type === 'settings') {
    message = 'Bienvenidos a la Configuracion';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text> {/* muestro el mensaje */}
    </View>
  );
};

// estilos para el componente Alfa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
  },
});

export default Alfa;
