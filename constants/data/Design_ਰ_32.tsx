
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
  const Design_ਰ_32 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M17 15H86" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M17 15H86"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path 
        d="M67.9309 17C67.9309 22.9019 68 19.0058 68 28.3664C68 33.0467 67.9309 39.9207 67.9309 45.5123C67.9309 55.1109 67.2906 65.0731 65.7932 74.495C64.7791 80.8758 62.8352 85.995 56.4377 87.764C42.1812 91.7061 33.8101 85.9342 26.4059 74.495C23.1758 69.5046 21.3315 62.8991 20.2287 57.1167C18.6907 49.0519 25.1404 44.052 32.6222 42.7146C36.269 42.0627 40.288 41.6824 44.005 41.6824C48.9395 41.6824 58.7713 41.6824 63.7529 41.6824"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M67.9309 17C67.9309 22.9019 68 19.0058 68 28.3664C68 33.0467 67.9309 39.9207 67.9309 45.5123C67.9309 55.1109 67.2906 65.0731 65.7932 74.495C64.7791 80.8758 62.8352 85.995 56.4377 87.764C42.1812 91.7061 33.8101 85.9342 26.4059 74.495C23.1758 69.5046 21.3315 62.8991 20.2287 57.1167C18.6907 49.0519 25.1404 44.052 32.6222 42.7146C36.269 42.0627 40.288 41.6824 44.005 41.6824C48.9395 41.6824 58.7713 41.6824 63.7529 41.6824"
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
  export default Design_ਰ_32


