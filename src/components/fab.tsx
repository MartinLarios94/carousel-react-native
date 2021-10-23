import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';
import {styles} from '../styles/global.styles';

interface FABProps {
  Position?: 'bl' | 'br';
  onPress: () => void;
}

const arrow = {
  right:
    'https://cdn4.iconfinder.com/data/icons/neutro-interface/32/chevron-right-256.png',
  left: 'https://cdn4.iconfinder.com/data/icons/neutro-interface/32/chevron-left-256.png',
};

const FAB: React.FC<FABProps> = ({onPress, Position = 'br'}) => {
  return (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        Position === 'bl' ? styles.left : styles.right,
      ]}
      onPress={onPress}>
      <ImageBackground
        style={styles.fab}
        source={{
          uri: Position === 'bl' ? arrow.left : arrow.right,
        }}
        resizeMode={'cover'}
      />
    </TouchableOpacity>
  );
};

export default FAB;
