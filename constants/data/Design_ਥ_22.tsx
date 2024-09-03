
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
  const Design_ਥ_22 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M8 19H89" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M8 19H89"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }

      <Path d="M27.0266 20.5653C33.4325 24.3035 28.3733 44.5931 25 51.3316C25 51.3316 31.6289 61.7497 35.2165 63.7653C41.1549 67.1018 55.2077 69.0059 65.6936 60.3614C68 59.1869 67.7604 57.0276 67.7604 55.1623C67.7604 50.9738 67.7604 46.7853 67.7604 42.5968C67.7604 35.7387 68 28.883 68 22.0133C68 -0.64445 68 112.644 68 89.9867" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M27.0266 20.5653C33.4325 24.3035 28.3733 44.5931 25 51.3316C25 51.3316 31.6289 61.7497 35.2165 63.7653C41.1549 67.1018 55.2077 69.0059 65.6936 60.3614C68 59.1869 67.7604 57.0276 67.7604 55.1623C67.7604 50.9738 67.7604 46.7853 67.7604 42.5968C67.7604 35.7387 68 28.883 68 22.0133C68 -0.64445 68 112.644 68 89.9867"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }

      <Path d="M30 41C41.7408 41 56.2592 41 68 41" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {thirdPathAssist && 
        <AnimatedPath
            d="M30 41C41.7408 41 56.2592 41 68 41"
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
  export default Design_ਥ_22
