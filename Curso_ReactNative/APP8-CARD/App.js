import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Card 1 */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.YEbMzDpR9Uy3-EfQbo2-IQHaE7?rs=1&pid=ImgDetMain' }}
          style={styles.image}
        />
        <Text style={styles.name}>Imagine Dragons</Text>
        <Text style={styles.role}>Banda de Rock Alternativo</Text>
        <Text style={styles.description}>
          Imagine Dragons es una banda estadounidense de rock alternativo formada en 2008. Conocidos por sus éxitos como "Radioactive" y "Believer," han tenido un impacto significativo en la música contemporánea.
        </Text>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://miro.medium.com/v2/resize:fit:1054/1*rCUpJhky6ou1RckK4X6Y0Q.png' }}
          style={styles.image}
        />
        <Text style={styles.name}>Twenty One Pilots</Text>
        <Text style={styles.role}>Dúo de Pop Rock y Rap</Text>
        <Text style={styles.description}>
          Twenty One Pilots es un dúo musical estadounidense conocido por su mezcla de pop, rock y rap. Alcanzaron popularidad con canciones como "Stressed Out" y "Heathens," que reflejan sus letras introspectivas y ritmos únicos.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FAD4D8',
    padding: 16,
    paddingTop: 130, // Añade un margen superior para bajar el contenido
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    width: '90%',
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'justify',
  },
});

export default App;
