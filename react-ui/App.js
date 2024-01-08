import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';

import { Puzzle } from "./components/Puzzle.js";

export default function App() {
  return (
    <PaperProvider style={styles.container}>
    <Appbar.Header style={{ backgroundColor: '#2E6C7B', color: 'white', alignItems: 'center'}}>
      <Appbar.Content title="Sudoku Solver" />
    </Appbar.Header>
    <Puzzle/>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E6C7B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
