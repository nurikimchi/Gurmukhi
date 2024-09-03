//Design_ਛ_12

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
const Design_ਛ_12 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
      
    <Path d="M24 20H90" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
      <AnimatedPath
          d="M24 20H90"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
    />}
    <Path d="M66.3592 21L67.6419 37.5772C65.8192 40.6667 32.2197 31.4118 25.2147 40.0563C23.1072 42.657 21.833 46.9852 22.5094 49.8722C23.1857 52.7592 26.3087 56.2537 32.2197 56.2537C40.7703 56.2537 50.4029 55.0688 58.3549 55.0688C65.1182 55.0688 68.271 53.7996 72.6874 59.93C85.4082 77.5875 42.1229 83.9588 28.5963 77.5875C8.98264 68.3491 26.8348 53.3205 43.3292 57.856C48.4088 59.2527 52.3179 61.3914 52.3179 77.5875" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {secondPathAssist && 
      <AnimatedPath
          d="M66.3592 21L67.6419 37.5772C65.8192 40.6667 32.2197 31.4118 25.2147 40.0563C23.1072 42.657 21.833 46.9852 22.5094 49.8722C23.1857 52.7592 26.3087 56.2537 32.2197 56.2537C40.7703 56.2537 50.4029 55.0688 58.3549 55.0688C65.1182 55.0688 68.271 53.7996 72.6874 59.93C85.4082 77.5875 42.1229 83.9588 28.5963 77.5875C8.98264 68.3491 26.8348 53.3205 43.3292 57.856C48.4088 59.2527 52.3179 61.3914 52.3179 77.5875"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
    />}
  
    </Svg>
 )}
  export default Design_ਛ_12
