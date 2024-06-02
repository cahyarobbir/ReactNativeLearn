import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.font}>Hello world</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.cu,
    marginHorizontal: 16,
  },

  container: {
    backgroundColor: 'black',
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  font: {
    color: 'white',
    fontSize: 12
  }

});
