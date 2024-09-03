
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
  const Design_ਵ_34 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
    <Path d="M18 12L82 12" stroke="#808080" strokeWidth="4" strokeLinecap="round"/>
    {firstPathAssist && 
        <AnimatedPath
            d="M18 12L82 12"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
    <Path
      d="M68.7628 13C68.7628 15.7468 68.7628 19.9937 68.7628 22.7405C68.7628 27.1271 71 29.3211 61.3047 29.3211C49.7721 29.3211 38.3972 28.6765 27.8114 33.6528C14.4163 39.9497 14.7627 54.8647 28.6929 58.7768C35.237 60.6146 42.8167 61 49.6001 61C66.9481 61 68.7628 60.5095 71 60.5095"
      stroke="#808080"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {secondPathAssist && 
        <AnimatedPath
            d="M68.7628 13C68.7628 15.7468 68.7628 19.9937 68.7628 22.7405C68.7628 27.1271 71 29.3211 61.3047 29.3211C49.7721 29.3211 38.3972 28.6765 27.8114 33.6528C14.4163 39.9497 14.7627 54.8647 28.6929 58.7768C35.237 60.6146 42.8167 61 49.6001 61C66.9481 61 68.7628 60.5095 71 60.5095"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
    <Path d="M32 61C37.448 80.2949 53.4651 87.1802 73 84.1876" stroke="#808080" strokeWidth="4" strokeLinecap="round"/>
    {thirdPathAssist && 
        <AnimatedPath
            d="M32 61C37.448 80.2949 53.4651 87.1802 73 84.1876"
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
  export default Design_ਵ_34


