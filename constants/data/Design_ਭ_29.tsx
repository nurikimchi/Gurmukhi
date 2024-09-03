
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
  const Design_ਭ_29 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M25 17L86 17" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M25 17L86 17"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M76.9701 18C76.9701 21.5854 77.0013 27.03 75.9957 30.5C74.7554 34.78 73.4502 37.7458 71.0758 41.1086C68.7014 44.4714 64.6278 48.4338 61.2307 50.3731C56.1393 53.2796 50.0344 53.2348 45.5 52.5C41.163 51.7972 37.4726 48.3431 39 44.5C40.5274 40.6569 48 39.5 54 41.5C55.6128 42.0376 57.2281 42.9661 59 44C60.7926 45.0459 62.8946 46.5551 64.5926 48C66.2907 49.4449 70.2538 53.7356 71 55C71.4426 55.75 73.9512 58.7138 75.5 62.5C81.7138 77.6906 68.7148 91 52.5752 91C41.3741 91 30.1729 83.8628 28 79.8875"
      stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M76.9701 18C76.9701 21.5854 77.0013 27.03 75.9957 30.5C74.7554 34.78 73.4502 37.7458 71.0758 41.1086C68.7014 44.4714 64.6278 48.4338 61.2307 50.3731C56.1393 53.2796 50.0344 53.2348 45.5 52.5C41.163 51.7972 37.4726 48.3431 39 44.5C40.5274 40.6569 48 39.5 54 41.5C55.6128 42.0376 57.2281 42.9661 59 44C60.7926 45.0459 62.8946 46.5551 64.5926 48C66.2907 49.4449 70.2538 53.7356 71 55C71.4426 55.75 73.9512 58.7138 75.5 62.5C81.7138 77.6906 68.7148 91 52.5752 91C41.3741 91 30.1729 83.8628 28 79.8875"
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
  export default Design_ਭ_29


