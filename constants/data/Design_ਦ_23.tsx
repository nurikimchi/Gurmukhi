
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
  const Design_ਦ_23 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M22 22H84" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M22 22H84"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M62.8748 24C62.8748 32.3756 62.8748 29.3416 62.8748 37.6324C62.8748 47.5664 62.8748 46.396 43.7117 46.396C37.1414 46.396 4.87196 48.3019 19.9861 34.7111C38.4591 26.4176 16.7804 61.6401 27.5 73.5C51 99.5 72 65.8708 72 65.8708" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M62.8748 24C62.8748 32.3756 62.8748 29.3416 62.8748 37.6324C62.8748 47.5664 62.8748 46.396 43.7117 46.396C37.1414 46.396 4.87196 48.3019 19.9861 34.7111C38.4591 26.4176 16.7804 61.6401 27.5 73.5C51 99.5 72 65.8708 72 65.8708"
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
  export default Design_ਦ_23
