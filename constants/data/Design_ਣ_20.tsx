
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
  const Design_ਣ_20 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M19.5 18.5H87.5" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M19.5 18.5H87.5"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M34 19C39.205 27.6568 48.7438 35 60.2075 35C63.1384 35 66.0692 35 69 35" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M34 19C39.205 27.6568 48.7438 35 60.2075 35C63.1384 35 66.0692 35 69 35"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M80 74.1864C77.6188 76.9653 72.5055 79.8077 68.5877 81.1017C51.9079 87.2486 17.957 60.0982 26.2978 52.798C30.3544 49.2474 37.2096 45.7628 42.2513 43.7456C46.389 42.09 50.06 42.6836 54.5416 42.6836C62.5996 42.6836 62.5 45 61.5 36" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {thirdPathAssist && 
        <AnimatedPath
            d="M80 74.1864C77.6188 76.9653 72.5055 79.8077 68.5877 81.1017C51.9079 87.2486 17.957 60.0982 26.2978 52.798C30.3544 49.2474 37.2096 45.7628 42.2513 43.7456C46.389 42.09 50.06 42.6836 54.5416 42.6836C62.5996 42.6836 62.5 45 61.5 36"
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
  export default Design_ਣ_20
