import React from 'react';
import { StyleSheet, Text, Image, Pressable, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

      {/* Marcelo Bustamante - Kathya Mansilla*/}

function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Pressable 
        style={styles.iconButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Image 
          source={require('./assets/camiloo.png')}
          style={styles.imagenprincipal}
        />
      </Pressable>
      <Text style={styles.text}>Camilo</Text>
      <Text style={styles.subtitulo}>20 Canciones</Text>

      <View style={styles.rowContainer}>
        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/bunkers.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Los Bunkers</Text>
          <Text style={styles.subtitulo}>8 Canciones</Text>
        </View>

        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/jere.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Jere Klein</Text>
          <Text style={styles.subtitulo}>10 Canciones</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/marciano.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Marcianeke</Text>
          <Text style={styles.subtitulo}>9 Canciones</Text>
        </View>

        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/miranda.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Miranda</Text>
          <Text style={styles.subtitulo}>17 Canciones</Text>
        </View>
      </View>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  artistContainer: {
    alignItems: 'center',
    flex: 1,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: 'black',
  },
  iconButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  imagenprincipal: {
    width: 350,
    height: 220,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
});
