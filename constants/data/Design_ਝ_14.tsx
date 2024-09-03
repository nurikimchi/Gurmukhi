//Design_ਝ_14 

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
  const Design_ਝ_14 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
      
    <Path d="M13 20H87" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
      <AnimatedPath
          d="M13 20H87"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
      />
    }
    <Path d="M26 22C27.5266 27.5077 31.0567 32.4673 36.4552 35.5409C44.272 39.9913 51.5249 41.405 58.3733 38.4308C68.068 35.5409 71.292 29.5021 76 22" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {secondPathAssist && 
      <AnimatedPath
          d="M26 22C27.5266 27.5077 31.0567 32.4673 36.4552 35.5409C44.272 39.9913 51.5249 41.405 58.3733 38.4308C68.068 35.5409 71.292 29.5021 76 22"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
      />
    }
    <Path d="M35.6639 41.1163C51.1938 41.1163 72.6182 38.43 73.9621 58.8822C74.5929 68.482 67.2563 73.1416 58.4378 78.0403C55.5274 79.657 52.5645 80.2066 49.2467 80.81C34.677 83.4598 28.2864 69.2832 44.6893 69.2832C55.3795 69.2832 60.2013 79.342 66.3356 85" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {thirdPathAssist && 
      <AnimatedPath
          d="M35.6639 41.1163C51.1938 41.1163 72.6182 38.43 73.9621 58.8822C74.5929 68.482 67.2563 73.1416 58.4378 78.0403C55.5274 79.657 52.5645 80.2066 49.2467 80.81C34.677 83.4598 28.2864 69.2832 44.6893 69.2832C55.3795 69.2832 60.2013 79.342 66.3356 85"
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
  export default Design_ਝ_14
