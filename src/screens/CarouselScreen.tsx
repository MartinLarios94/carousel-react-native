import React from 'react';
import {
  Animated,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import data from '../../carousel.js';
import CarouselCard from '../components/carousel-card';
import FAB from '../components/fab';
import useCarousel from '../hooks/useCarousel';
import {styles} from '../styles/global.styles';

const CarouselScreen = () => {
  const {
    scrollX,
    scrollRef,
    width,
    currentIndex,
    viewConfig,
    handleButtons,
    onViewableItemsChanged,
  } = useCarousel();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={image.id}
              source={{uri: image.image}}
              style={[StyleSheet.absoluteFillObject, {opacity}]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        renderItem={({item}) => <CarouselCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(_, index: number) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEnabled={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={15}
        ref={scrollRef}
      />
      <FAB onPress={() => handleButtons(currentIndex + 1)} />
      <FAB onPress={() => handleButtons(currentIndex - 1)} Position="bl" />
    </SafeAreaView>
  );
};

export default CarouselScreen;
