//Design_ਠ_17

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
  const Design_ਠ_17 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M22 20H79" stroke="#808080" strokeWidth="4" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M22 20H79"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path 
        d="M49.1291 21.4531C49.1291 20.5896 48.694 21.0933 48.8641 21.8561C49.1068 22.9439 49.2987 24.1029 49.3662 25.2466C49.6438 29.9482 51.3807 34.9597 46.2699 34.9597C33.8103 34.9597 24.2853 47.1566 25.0422 59.2217C25.3159 63.5859 28.0205 70.7235 31.2681 73.3599C35.5738 76.8553 40.2602 78.1094 45.9631 79.3566C50.6847 80.3893 59.0459 80.3098 63.5395 78.1485C69.2854 75.3849 74.1748 73.2462 76.94 66.92C77.935 64.6436 78 61.7235 78 59.2773C78 56.6785 77.6059 54.759 77.0516 52.2738C76.4137 49.4138 74.8966 47.0245 73.1742 44.7146C71.3923 42.3246 70.1892 40.9858 68.3459 39.1556C63.9512 34.7923 55.0483 34.6696 49.807 34.9597"
        stroke="#808080"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M49.1291 21.4531C49.1291 20.5896 48.694 21.0933 48.8641 21.8561C49.1068 22.9439 49.2987 24.1029 49.3662 25.2466C49.6438 29.9482 51.3807 34.9597 46.2699 34.9597C33.8103 34.9597 24.2853 47.1566 25.0422 59.2217C25.3159 63.5859 28.0205 70.7235 31.2681 73.3599C35.5738 76.8553 40.2602 78.1094 45.9631 79.3566C50.6847 80.3893 59.0459 80.3098 63.5395 78.1485C69.2854 75.3849 74.1748 73.2462 76.94 66.92C77.935 64.6436 78 61.7235 78 59.2773C78 56.6785 77.6059 54.759 77.0516 52.2738C76.4137 49.4138 74.8966 47.0245 73.1742 44.7146C71.3923 42.3246 70.1892 40.9858 68.3459 39.1556C63.9512 34.7923 55.0483 34.6696 49.807 34.9597"
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
  export default Design_ਠ_17
