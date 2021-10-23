import React from 'react';
import {View} from 'react-native';
import CarouselScreen from './src/screens/CarouselScreen';
import {styles} from './src/styles/global.styles';

const App = () => {
  return (
    <View style={styles.container}>
      <CarouselScreen />
    </View>
  );
};

export default App;
