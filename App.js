import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChupAnh from './screens/ChupAnh';
import ChonAnh from './screens/ChonAnh';
import NgheNhac from './screens/NgheNhac';

export default function App() {
  return (
    <View style={styles.container}>
      <NgheNhac/>
      {/* <ChupAnh/> */}
      {/* <ChonAnh/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
