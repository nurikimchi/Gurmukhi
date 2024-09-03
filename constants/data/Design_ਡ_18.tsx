
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
  const Design_ਡ_18 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
    <Path d="M15 15L85 15" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
        <AnimatedPath
            d="M15 15L85 15"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
    }
    <Path d="M65.7135 16C65.7135 21.0595 63.4523 24.979 60.0307 28.604C52.3106 36.7829 42.1068 39.4899 32 38.245C29.5 37.937 39.5313 38.2965 42.205 38.245C52.26 38.0511 61.3093 45.0445 64.5409 54.215C68.1174 64.3644 64.8166 71.9194 57.9336 78.9511C52.7517 84.245 39.4182 85 32.4326 85C25.6032 85 20.7681 78.0325 22.277 71.25C23.8162 64.3311 34.5 63.5 40.0052 65.8889C43.7208 67.9766 53 73 55.5 78.5" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {secondPathAssist && 
        <AnimatedPath
            d="M65.7135 16C65.7135 21.0595 63.4523 24.979 60.0307 28.604C52.3106 36.7829 42.1068 39.4899 32 38.245C29.5 37.937 39.5313 38.2965 42.205 38.245C52.26 38.0511 61.3093 45.0445 64.5409 54.215C68.1174 64.3644 64.8166 71.9194 57.9336 78.9511C52.7517 84.245 39.4182 85 32.4326 85C25.6032 85 20.7681 78.0325 22.277 71.25C23.8162 64.3311 34.5 63.5 40.0052 65.8889C43.7208 67.9766 53 73 55.5 78.5"
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
  export default Design_ਡ_18
