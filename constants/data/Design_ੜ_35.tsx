
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
  const Design_ੜ_35 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M20 12H89" stroke="#808080" strokeWidth="4" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M20 12H89"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path
        d="M79 13C79 16.2 75.1733 20.6952 73.203 23.4C70.6458 26.9104 65.8383 31.1212 62.449 33.8C57.7838 37.4873 43.4838 38.8213 37.6015 38.8213C31.0617 38.8213 31.815 30.8973 39.8168 30.6C48.046 30.2943 55.1688 31.8579 62.449 35.9107C64.5338 37.0713 69.0623 38.8213 73.2029 43.4C81.432 52.4998 73.7427 64.5334 60.7808 68.2283C54.7288 69.9534 15.557 68.5969 22.9172 55.1668C27.6234 46.5794 34.6376 62.205 35.9365 65.0283C36.662 66.6053 44.1726 83.4812 45.0461 85"
        stroke="#808080"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M79 13C79 16.2 75.1733 20.6952 73.203 23.4C70.6458 26.9104 65.8383 31.1212 62.449 33.8C57.7838 37.4873 43.4838 38.8213 37.6015 38.8213C31.0617 38.8213 31.815 30.8973 39.8168 30.6C48.046 30.2943 55.1688 31.8579 62.449 35.9107C64.5338 37.0713 69.0623 38.8213 73.2029 43.4C81.432 52.4998 73.7427 64.5334 60.7808 68.2283C54.7288 69.9534 15.557 68.5969 22.9172 55.1668C27.6234 46.5794 34.6376 62.205 35.9365 65.0283C36.662 66.6053 44.1726 83.4812 45.0461 85"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M59 70C59.5379 70.7136 66 79 66 79" stroke="#808080" strokeWidth="4" strokeLinecap="round"/>
      {thirdPathAssist && 
        <AnimatedPath
            d="M59 70C59.5379 70.7136 66 79 66 79"
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
  export default Design_ੜ_35


