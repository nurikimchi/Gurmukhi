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
  
const Design_ਖ_7 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path
        d="M16 15.9594C19.5318 15.9594 20.0897 15.9594 23.6215 15.9594C27.4994 15.9594 30.2987 22.6358 31.0544 25.8853C31.9106 29.5668 31.9316 33.0975 31.9316 36.8962C31.9316 44.5011 23 50 23 50C23 50 29.8509 60.4905 34 63.5C41.9291 69.2513 52.9714 71.5286 61 63.5C62.6036 61.8964 65.239 58.7327 66 57"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {firstPathAssist && 
        <AnimatedPath
            d="M16 15.9594C19.5318 15.9594 20.0897 15.9594 23.6215 15.9594C27.4994 15.9594 30.2987 22.6358 31.0544 25.8853C31.9106 29.5668 31.9316 33.0975 31.9316 36.8962C31.9316 44.5011 23 50 23 50C23 50 29.8509 60.4905 34 63.5C41.9291 69.2513 52.9714 71.5286 61 63.5C62.6036 61.8964 65.239 58.7327 66 57"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }

      
      <Path d="M66 15C69.7402 15 72.5 15 76.5 15" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M66 15C69.7402 15 72.5 15 76.5 15"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }

      <Path d="M32 41C38.4299 41 44.8616 41 51.2914 41C56.3587 41 60.892 41 66 41" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {thirdPathAssist && 
        <AnimatedPath
            d="M32 41C38.4299 41 44.8616 41 51.2914 41C56.3587 41 60.892 41 66 41"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      
      <Path d="M66 15V85.2419" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {fourthPathAssist && 
        <AnimatedPath
            d="M66 15V85.2419"
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
  export default Design_ਖ_7
