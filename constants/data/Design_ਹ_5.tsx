// ਹ

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
const design_ਹ_5 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
      <Path d="M34 23.0832H77.7064" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M34 23.0832H77.7064"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }

      <Path d="M59.0251 23.7111C59.0251 38.0899 59.0251 51.9686 59.0251 66.3474C59.0251 73.9549 56.972 80.1574 48.9999 77.5C39.9049 74.4683 30.5779 62.1885 33 52.5C34.1152 48.039 42.9999 49 46.4999 49.5"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M59.0251 23.7111C59.0251 38.0899 59.0251 51.9686 59.0251 66.3474C59.0251 73.9549 56.972 80.1574 48.9999 77.5C39.9049 74.4683 30.5779 62.1885 33 52.5C34.1152 48.039 42.9999 49 46.4999 49.5"
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
  export default design_ਹ_5
