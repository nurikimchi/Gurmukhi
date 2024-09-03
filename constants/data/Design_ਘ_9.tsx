//Design_ਕ_6

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
  
const Design_ਘ_9 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path 
        d="M18 17C25.5558 17 18.587 17 26.1429 17C30.7337 17 31.6932 36.4131 29.3999 41.5702C27.7714 45.2322 20.8947 49.8796 18 49.3638C22.3157 57.8793 24.631 63.7784 36.7286 62.9165C39.4844 62.7201 43.2429 61.4634 45.6858 58.3154C49.5776 53.3002 49.5776 12.4255 49.5776 20.4429C49.5776 29.3231 49.9264 38.1996 49.9264 47.0789C49.9264 51.7264 49.6035 56.6741 54.0918 59.7104C57.2534 61.8493 66.0429 65.8899 75 58.3154"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {firstPathAssist && 
          <AnimatedPath
              d="M18 17C25.5558 17 18.587 17 26.1429 17C30.7337 17 31.6932 36.4131 29.3999 41.5702C27.7714 45.2322 20.8947 49.8796 18 49.3638C22.3157 57.8793 24.631 63.7784 36.7286 62.9165C39.4844 62.7201 43.2429 61.4634 45.6858 58.3154C49.5776 53.3002 49.5776 12.4255 49.5776 20.4429C49.5776 29.3231 49.9264 38.1996 49.9264 47.0789C49.9264 51.7264 49.6035 56.6741 54.0918 59.7104C57.2534 61.8493 66.0429 65.8899 75 58.3154"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray={250}
              animatedProps={animatedProps}
          />
      }
      
      <Path d="M75 17C80.1702 17 81.7919 17 87 17" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
          <AnimatedPath
              d="M75 17C80.1702 17 81.7919 17 87 17"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray={250}
              animatedProps={animatedProps}
          />
      }

      <Path d="M75 17V84" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {thirdPathAssist && 
          <AnimatedPath
              d="M75 17V84"
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
  export default Design_ਘ_9
