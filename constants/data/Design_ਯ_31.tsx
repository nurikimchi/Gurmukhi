
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
  const Design_ਯ_31 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M17.4634 20.3675H82.5" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M17.4634 20.3675H82.5"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M26.5 20.5C31.0027 20.7501 34.959 30.2645 35.077 34.5116C35.2672 41.359 33.3684 45.1452 26.804 48.0627C25.9445 48.4447 24.5212 48.6047 23.6016 48.6558C22.3982 48.7226 28.2824 58.1403 29.4134 59.2713C32.2493 62.1072 35.2341 64.489 39.0208 65.7948C42.8784 67.125 46.7763 67.3058 50.6148 65.7355C55.6084 63.6927 62.031 58.7737 62.031 52.6588C62.031 48.5471 61.15 47.8531 58.5616 44.9196C58.1555 44.4593 61.0038 44.8603 68.5 44.8603C68.9518 44.8603 71.8486 45.1837 72.1721 44.8603C72.4332 44.5991 72.1721 42.0747 72.1721 41.7023C72.1721 40.0566 72.1721 30.1457 72.1721 28.5C72.1721 -5.19722 72.1721 81.5 72.1721 81.5" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M26.5 20.5C31.0027 20.7501 34.959 30.2645 35.077 34.5116C35.2672 41.359 33.3684 45.1452 26.804 48.0627C25.9445 48.4447 24.5212 48.6047 23.6016 48.6558C22.3982 48.7226 28.2824 58.1403 29.4134 59.2713C32.2493 62.1072 35.2341 64.489 39.0208 65.7948C42.8784 67.125 46.7763 67.3058 50.6148 65.7355C55.6084 63.6927 62.031 58.7737 62.031 52.6588C62.031 48.5471 61.15 47.8531 58.5616 44.9196C58.1555 44.4593 61.0038 44.8603 68.5 44.8603C68.9518 44.8603 71.8486 45.1837 72.1721 44.8603C72.4332 44.5991 72.1721 42.0747 72.1721 41.7023C72.1721 40.0566 72.1721 30.1457 72.1721 28.5C72.1721 -5.19722 72.1721 81.5 72.1721 81.5"
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
  export default Design_ਯ_31


