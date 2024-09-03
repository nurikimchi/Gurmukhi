
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
  const Design_ਮ_30 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M68 13L73.5 13L79 13" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M68 13L73.5 13L79 13"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path 
        d="M67.6557 86.0001C67.6557 71.275 68.0987 57.1336 67.9797 43.7746C67.9141 36.4011 68.0226 30.9914 67.9797 26.5C67.5662 -16.772 67.8046 61.1262 67.8177 55.6965C46.9188 55.6965 33.6063 55.6965 32.275 55.6965C29.3477 58.6978 25.1523 59.5428 22.6252 65.1366C17.3002 76.9239 33.2753 79.8707 33.2753 66.9047C33.2753 46.8554 35.7013 32.9572 27.8165 14.3922L21 14.4304"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M67.6557 86.0001C67.6557 71.275 68.0987 57.1336 67.9797 43.7746C67.9141 36.4011 68.0226 30.9914 67.9797 26.5C67.5662 -16.772 67.8046 61.1262 67.8177 55.6965C46.9188 55.6965 33.6063 55.6965 32.275 55.6965C29.3477 58.6978 25.1523 59.5428 22.6252 65.1366C17.3002 76.9239 33.2753 79.8707 33.2753 66.9047C33.2753 46.8554 35.7013 32.9572 27.8165 14.3922L21 14.4304"
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
  export default Design_ਮ_30


