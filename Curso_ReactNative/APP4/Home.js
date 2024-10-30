import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Haz tomado una excelente decisión para tu Comuna.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Fondo blanco
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
});
