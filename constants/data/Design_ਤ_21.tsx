
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
  const Design_ਤ_21 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M17 20C43.2738 20 62.7262 20 89 20" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M17 20C43.2738 20 62.7262 20 89 20"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      
      <Path d="M73.0502 20C73.0502 20 78.5841 30.2097 62.9364 40.8932C59.4895 43.2465 54.3981 43.8668 50.467 44.7103C47.2967 45.3906 43.4167 45.4444 40.2097 45.4444C38.9176 45.4444 26.7367 45.522 31.7891 45.4444C36.8415 45.3668 40.2097 45.4444 44.4201 45.3769C55.0442 47.4494 62.1034 48.007 69.2309 57.9969C76.7062 70.4728 70.5242 79.6278 57.8932 82.3382C53.3161 83.3203 39.479 83.7533 31.7891 79.6278C26.7369 76.9175 20 67.8829 20 67.8829" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M73.0502 20C73.0502 20 78.5841 30.2097 62.9364 40.8932C59.4895 43.2465 54.3981 43.8668 50.467 44.7103C47.2967 45.3906 43.4167 45.4444 40.2097 45.4444C38.9176 45.4444 26.7367 45.522 31.7891 45.4444C36.8415 45.3668 40.2097 45.4444 44.4201 45.3769C55.0442 47.4494 62.1034 48.007 69.2309 57.9969C76.7062 70.4728 70.5242 79.6278 57.8932 82.3382C53.3161 83.3203 39.479 83.7533 31.7891 79.6278C26.7369 76.9175 20 67.8829 20 67.8829"
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
  export default Design_ਤ_21
