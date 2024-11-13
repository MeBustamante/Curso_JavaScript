import React from 'react';
import { View, Linking, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button, Avatar } from 'react-native-paper';

const App = () => {
  const openSpotify = (url) => {
    Linking.openURL(url);
  };

  const openInfoPage = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Card 1 */}
      <Card style={styles.card}>
        <Card.Title
          title="Artista N°1"
          subtitle="Género Musical: Rock Alternativo"
          left={(props) => <Avatar.Icon {...props} icon="music" />}
        />
        <Card.Content>
          <Text style={styles.name}>Imagine Dragons</Text>
          <Text style={styles.description}>
            Imagine Dragons es una banda estadounidense de rock alternativo, conocida por éxitos como "Radioactive" y "Believer". Han impactado el panorama musical contemporáneo con su estilo único.
          </Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: 'https://th.bing.com/th/id/OIP.YEbMzDpR9Uy3-EfQbo2-IQHaE7?rs=1&pid=ImgDetMain' }}
          style={styles.image}
        />
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => openSpotify('https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q')}>Spotify</Button>
          <Button mode="outlined" onPress={() => openInfoPage('https://en.wikipedia.org/wiki/Imagine_Dragons')}>Más Info</Button>
        </Card.Actions>
      </Card>

      {/* Card 2 */}
      <Card style={styles.card}>
        <Card.Title
          title="Artista N°2"
          subtitle="Género Musical: Pop Rock, Rap"
          left={(props) => <Avatar.Icon {...props} icon="music" />}
        />
        <Card.Content>
          <Text style={styles.name}>Twenty One Pilots</Text>
          <Text style={styles.description}>
            Twenty One Pilots es un dúo musical estadounidense que fusiona pop, rock y rap. Alcanzaron fama mundial con éxitos como "Stressed Out" y "Heathens".
          </Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: 'https://miro.medium.com/v2/resize:fit:1054/1*rCUpJhky6ou1RckK4X6Y0Q.png' }}
          style={styles.image}
        />
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => openSpotify('https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx')}>Spotify</Button>
          <Button mode="outlined" onPress={() => openInfoPage('https://en.wikipedia.org/wiki/Twenty_One_Pilots')}>Más Info</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FAD4D8',
    padding: 16,
    paddingTop: 30,
  },
  card: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  actions: {
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default App;
