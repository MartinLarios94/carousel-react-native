import React from 'react';
import {View, Image, useWindowDimensions, Text} from 'react-native';
import {styles} from '../styles/global.styles';

interface carouselCardProps {
  data: {
    id: number;
    title: string;
    image: string;
  };
}

const CarouselCard: React.FC<carouselCardProps> = ({data}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.carouselContainer, {width}]}>
      <Image
        source={{uri: data.image}}
        style={[styles.image, {width: width - 100}]}
      />
      <View style={[styles.textContainer, {width: width - 100}]}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </View>
  );
};

export default CarouselCard;
