//Design_ਟ_16

import React, { useEffect, useState } from 'react'
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
  withRepeat
} from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface DesignProps {
  visible: boolean;
  firstPathAssist: boolean;
  secondPathAssist: boolean;
  thirdPathAssist?: boolean;
  fourthPathAssist?: boolean;
}  
  const Design_ਟ_16 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

  // length of strokeDasharray
  const strokeDashoffset = useSharedValue(250);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: strokeDashoffset.value,
    };
  });

  useEffect(() => {
    strokeDashoffset.value = withRepeat(
      withTiming(0, {
        duration: 2500,
        easing: Easing.linear,
      }),
      -1,  // numberOfReps --> infinity
      false  // reverse --> false
    );
  }, []);

  const [strokeColor, setStrokeColor] = useState('#808080')
  if (!visible) {
    setStrokeColor('transparent')
  }
    return (
    <Svg
      width={100}
      height={100}
      fill="none"
    >
  
    <Path d="M17 21H84" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
        <AnimatedPath
            d="M17 21H84"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
    }
    <Path d="M57.6372 22C57.6372 25.997 57.6372 29.994 57.6372 33.991C57.6372 36.9533 56.0905 35.834 53.8984 36.8116C46.7239 40.0112 39.0183 42.0297 32.9599 47.3792C29.5253 50.4119 23.8757 53.8922 26.8242 59.2179C34.0639 72.2935 50.2006 86.4993 65 76.7925"
      stroke="#808080"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {secondPathAssist && 
        <AnimatedPath
            d="M57.6372 22C57.6372 25.997 57.6372 29.994 57.6372 33.991C57.6372 36.9533 56.0905 35.834 53.8984 36.8116C46.7239 40.0112 39.0183 42.0297 32.9599 47.3792C29.5253 50.4119 23.8757 53.8922 26.8242 59.2179C34.0639 72.2935 50.2006 86.4993 65 76.7925"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
    </Svg>
 )}
  export default Design_ਟ_16
