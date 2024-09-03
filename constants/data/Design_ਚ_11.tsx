//Design_ਚ_11

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
const Design_ਚ_11 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
        
      <Path d="M18 18H92" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
      <AnimatedPath
          d="M18 18H92"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
      />
    }
      <Path 
        d="M65 19C65 27.8014 65 36.5246 65 45.1216C65 53.7186 65 56.3022 65 63.4676C64.58 67.7931 64.8403 72.4979 63.9442 76.7663C60.7954 91.7655 46.929 94.2909 39.3005 82.9255C30.544 69.8796 34.3574 61.4721 32.7632 48.519C31.6675 39.6165 19.9344 48.0931 27.5603 54.2019C31.1604 57.0859 37.7152 56.3022 41.9994 56.3022C47.6621 56.3022 57.658 56.3022 63.3207 56.3022"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M65 19C65 27.8014 65 36.5246 65 45.1216C65 53.7186 65 56.3022 65 63.4676C64.58 67.7931 64.8403 72.4979 63.9442 76.7663C60.7954 91.7655 46.929 94.2909 39.3005 82.9255C30.544 69.8796 34.3574 61.4721 32.7632 48.519C31.6675 39.6165 19.9344 48.0931 27.5603 54.2019C31.1604 57.0859 37.7152 56.3022 41.9994 56.3022C47.6621 56.3022 57.658 56.3022 63.3207 56.3022"
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
  export default Design_ਚ_11
