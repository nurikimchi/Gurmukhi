//Design_ਜ_13

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
  const Design_ਜ_13 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
      
    <Path d="M21 16.0272L84 15.778" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
      <AnimatedPath
          d="M21 16.0272L84 15.778"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
      />
    }
    <Path d="M68 17V88" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {secondPathAssist && 
      <AnimatedPath
          d="M68 17V88"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
      />
    }
    <Path d="M67 52.9152C53.312 52.9152 39.624 52.9152 25.936 52.9152C21.3881 52.9152 23.062 45.956 24.7408 43.3193C26.2973 40.8747 30.9568 39.6401 34.0398 43.3193C35.4977 44.701 35.4486 47.317 35.4977 49.1996C35.5909 52.7706 35.4977 56.5099 35.4977 60.4461C35.4977 63.8201 35.4977 67.2023 35.4977 70.568C35.4977 73.583 35.4977 75.9848 35.4977 79.0028C35.4977 82.4542 35.4977 84.5825 35.4977 88" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {thirdPathAssist && 
      <AnimatedPath
          d="M67 52.9152C53.312 52.9152 39.624 52.9152 25.936 52.9152C21.3881 52.9152 23.062 45.956 24.7408 43.3193C26.2973 40.8747 30.9568 39.6401 34.0398 43.3193C35.4977 44.701 35.4486 47.317 35.4977 49.1996C35.5909 52.7706 35.4977 56.5099 35.4977 60.4461C35.4977 63.8201 35.4977 67.2023 35.4977 70.568C35.4977 73.583 35.4977 75.9848 35.4977 79.0028C35.4977 82.4542 35.4977 84.5825 35.4977 88"
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
  export default Design_ਜ_13
