import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient'; 
import Alfa from './Alfa';

const Stack = createStackNavigator();

// componente principal de la pantalla de inicio
const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#a8e0f3', '#f3a8a1']} style={styles.container}>
      <Text style={styles.title}>ELIJA UNA OPCION</Text>
      <View style={styles.buttonContainer}>
        {/* botón para navegar a la pantalla de home */}
        <Pressable onPress={() => navigation.navigate('Alfa', { type: 'home' })} style={styles.button}>
          <Image source={require('./assets/home.png')} style={styles.icon} />
          <Text style={styles.buttonText}>HOME</Text>
        </Pressable>
        
        {/* botón para navegar a la pantalla de configuraciones */}
        <Pressable onPress={() => navigation.navigate('Alfa', { type: 'settings' })} style={styles.button}>
          <Image source={require('./assets/config.png')} style={styles.icon} />
          <Text style={styles.buttonText}>SETTINGS</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

// componente principal de la aplicación
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alfa" component={Alfa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  icon: {
    width: 50,  // Ajusta el tamaño de la imagen según sea necesario
    height: 50,
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;