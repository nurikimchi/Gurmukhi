
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
  const Design_ਢ_19 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
    <Path d="M23 19H87" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
        <AnimatedPath
            d="M23 19H87"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
    }
    <Path d="M73.8925 21C73.8925 21.5056 74.61 40.7111 73.8925 40.923C60.8344 40.923 46.0629 40.6215 27.3043 40.6215C22.134 40.6215 34.0039 24.5754 34.0039 37.2385C34.0039 54.474 44.3051 76.2937 61.4717 77.8348C91.6193 80.5412 67.5012 48.7408 54.7722 73.7752" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {secondPathAssist && 
        <AnimatedPath
            d="M73.8925 21C73.8925 21.5056 74.61 40.7111 73.8925 40.923C60.8344 40.923 46.0629 40.6215 27.3043 40.6215C22.134 40.6215 34.0039 24.5754 34.0039 37.2385C34.0039 54.474 44.3051 76.2937 61.4717 77.8348C91.6193 80.5412 67.5012 48.7408 54.7722 73.7752"
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
  export default Design_ਢ_19
