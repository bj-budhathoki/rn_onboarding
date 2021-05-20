import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
  Animated,
  TouchableOpacity,
} from 'react-native';
//theme
import { COLORS, FONTS, images, SIZES } from '../../constants/';

const { onboarding1, onboarding2, onboarding3 } = images;

//dummay data
const onBoardings = [
  {
    title: `Let's Travelling`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    img: onboarding1,
  },
  {
    title: `Navigation`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    img: onboarding2,
  },
  {
    title: `Destination`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    img: onboarding3,
  },
];
export default function OnBoarding() {
  const [isCompleted, setIsCompleted] = React.useState(false);
  const scrollX = new Animated.Value(0);
  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setIsCompleted(true);
      }
    });
    return () => scrollX.removeListener();
  }, []);

  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        scrollEnabled
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
      >
        {onBoardings?.map((item, index) => (
          <View
            key={index}
            style={{
              width: SIZES.width,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.gray,
                  textAlign: 'center',
                }}
              >
                {item?.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}
              >
                {item?.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };
  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        {onBoardings?.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            ></Animated.View>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotRootContainer}>{renderDots()}</View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: 60,
          width: 150,
          justifyContent: 'center',
          backgroundColor: COLORS.blue,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          paddingLeft: 20,
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white,
          }}
        >
          {isCompleted ? 'completed' : 'Skip'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '25%',
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});
