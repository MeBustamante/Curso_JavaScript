import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import Home from './Home'; // importa la pantalla home.js que cree

// para la navegacion
const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  const [name, setName] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); //boton

  const handleNameChange = (text) => {
    setName(text);
    setIsButtonEnabled(text.trim().length > 0); // habilita el boton en caso que haya un nombre
  };

  const navigateToHome = () => {
    if (!isButtonEnabled) {
      Alert.alert("Error", "Por favor ingresa tu nombre para continuar.");
      return;
    }
    navigation.navigate('Home', { name }); // envia el nombre a home para mensaje
  };

  return (
    <LinearGradient 
      colors={['#e7ad5c', '#70ee76', '#9056b8']} // colores del gradiente
      style={styles.container}
    >
      {/* logo */}
      <Image 
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />

      <Text style={styles.text}>Departamento de Medio Ambiente</Text>

      {/* nombre */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={name}
        onChangeText={handleNameChange}
      />

      {/* botón que navega a la pantalla Home */}
      <Pressable 
        style={[styles.pressableButton, { opacity: isButtonEnabled ? 1 : 0.5 }]}
        onPress={navigateToHome}
        disabled={!isButtonEnabled} // desactiva el botón si el nombre no esta ingresado
      >
        <Text style={styles.buttonText}>Comienza a Reciclar</Text>
      </Pressable>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{ headerShown: false }} // oculta la barra de encabezado
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 250,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  pressableButton: {
    backgroundColor: '#3D9970',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
