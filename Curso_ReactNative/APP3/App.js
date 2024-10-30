import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // importa

export default function App() {
  // Función para mostrar el alert
  const showAlert = () => {
    Alert.alert("Boton de Prueba");
  };

  return (
    <LinearGradient 
      colors={['#e7ad5c', '#70ee76', '#9056b8']} // colores del gradiente se saca de la web
      style={styles.container} // aplica el estilo container para el tamaño
    >
    
      <Image //logo
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />

      <Text style={styles.text}>Departamento de Medio Ambiente.</Text>


      <Button 
        title="Botón con Button" //boton usando button
        onPress={showAlert} 
      />

      <TouchableHighlight //boton usando touch
        style={styles.touchableButton}
        onPress={showAlert}
        underlayColor="#7BC043"
      >
        <Text style={styles.buttonText}>Botón con TouchableHighlight</Text>
      </TouchableHighlight>


      <Pressable //boton usando pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#3D9970' : '#FF851B'
          },
          styles.pressableButton
        ]}
        onPress={showAlert}
      >
        <Text style={styles.buttonText}>Botón con Pressable</Text>
      </Pressable>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    alignItems: 'center', // centra horizontalmente
    justifyContent: 'center', // centra verticalmente
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
    marginBottom: 40, // espacio entre el texto y los botones
  },
  touchableButton: {
    backgroundColor: '#7BC043',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  pressableButton: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
