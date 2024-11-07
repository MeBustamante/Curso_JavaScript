import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente para la pantalla Alfa
const Alfa = ({ route }) => {
  const { type } = route.params || {}; 
  
  // Defino el mensaje según el tipo
  let message = 'Tipo de navegación no válido'; // Mensaje predeterminado
  if (type === 'home') {
    message = 'Bienvenidos al Home';
  } else if (type === 'settings') {
    message = 'Bienvenidos a la Configuración';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

// Estilos para el componente Alfa
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
