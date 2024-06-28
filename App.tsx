import React from 'react';
import Login from './src/screen/auth/login/Login';
import List from './src/screen/dashboard/List';
import { View } from 'react-native';
import Grid from './src/learning/Grid';
import FlatListCompo from './src/learning/FlatList';
import { NativeBaseProvider,extendTheme } from 'native-base';
import { BoxImage } from './src/screen/dashboard/BoxImage';
import { SwiggyLogin } from './src/screen/auth/login/SwiggyLogin';

function App() {

  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props: any) => {
          return {
            _light: { color: 'red.300' },
            _dark: { color: 'blue.300' },
          };
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
     <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <SwiggyLogin />
      {/* <Login /> */}
      {/* <BoxImage /> */}
      {/* <List /> */}
      {/* <Grid /> */}
      {/* <FlatListCompo /> */}
    </View>
    </NativeBaseProvider>
  );
}

export default App;