import React from 'react';
import Login from './components/screen/auth/login/Login';
import List from './components/screen/dashboard/List';
import { View } from 'react-native';
import Grid from './components/learning/Grid';
import FlatListCompo from './components/learning/FlatList';

function App() {
  return (
    <View>
      {/* <Login /> */}
      {/* <List /> */}
      {/* <Grid /> */}
      <FlatListCompo />
    </View>
  );
}

export default App;