import {useRef, useState} from 'react';
import {Animated, FlatList, useWindowDimensions} from 'react-native';

const useCarousel = () => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList<any>>();

  const handleButtons = (index: number) => {
    const nextItem = index * width;
    scrollRef.current?.scrollToOffset({
      animated: true,
      offset: nextItem,
    });
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return {
    width,
    currentIndex,
    scrollX,
    scrollRef,
    viewConfig,
    handleButtons,
    onViewableItemsChanged,
  };
};

export default useCarousel;
