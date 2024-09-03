
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
  const Design_ਨ_25 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
      
    <Path d="M13 17H83" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
        <AnimatedPath
            d="M13 17H83"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
    <Path d="M49 31C41.1053 31.7428 34.3896 31.7428 27.6842 38.4282C22.6059 43.4913 19 52.0606 19 58.4842C19 67.0713 23.6332 74.8717 33.2105 78.5402C35.1947 79.3002 41.1053 80 42.9393 80" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {secondPathAssist && 
        <AnimatedPath
            d="M49 31C41.1053 31.7428 34.3896 31.7428 27.6842 38.4282C22.6059 43.4913 19 52.0606 19 58.4842C19 67.0713 23.6332 74.8717 33.2105 78.5402C35.1947 79.3002 41.1053 80 42.9393 80"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
    <Path d="M51 31C58.8788 32.4848 59.6667 32.8832 66.2851 37.1105C72.9035 41.3378 77 48.0758 77 55.5C77 64.5445 76.2121 73.2815 63.6061 78.5152C61.678 79.3157 56.1423 80 53.3636 80" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {thirdPathAssist && 
        <AnimatedPath
            d="M51 31C58.8788 32.4848 59.6667 32.8832 66.2851 37.1105C72.9035 41.3378 77 48.0758 77 55.5C77 64.5445 76.2121 73.2815 63.6061 78.5152C61.678 79.3157 56.1423 80 53.3636 80"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
    <Path d="M49 18.5V31" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {fourthPathAssist && 
        <AnimatedPath
            d="M49 18.5V31"
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
  export default Design_ਨ_25


