import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './Home'; // Importa la pantalla Home

// Configura el stack de navegación
const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  return (
    <LinearGradient 
      colors={['#e7ad5c', '#70ee76', '#9056b8']} // colores del gradiente
      style={styles.container}
    >
      {/* Logo */}
      <Image 
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />

      <Text style={styles.text}>Departamento de Medio Ambiente</Text>

      {/* Botón que navega a la pantalla Home */}
      <Pressable 
        style={styles.pressableButton}
        onPress={() => navigation.navigate('Home')}
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
          options={{ headerShown: false }} // Oculta la barra de encabezado
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
    marginBottom: 40,
  },
  pressableButton: {
    backgroundColor: '#3D9970',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});