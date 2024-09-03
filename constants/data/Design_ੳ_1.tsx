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
const Design_ੳ_1 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

  // length of strokeDasharray
  const strokeDashoffset = useSharedValue(400);

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
      
      <Path d="M14 35L90 35" stroke="#808080"
      strokeWidth="5" strokeLinecap="round"/>

      {firstPathAssist && 
        <AnimatedPath
            d="M14 35L90 35"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }

      <Path d="M82.3923 35.7887C81.8172 27.4142 81.5613 18.0394 74.1387 11.4162C64.3081 3.24621 48.5663 5.14183 38.5001 11.4162C26.2332 19.0623 23.5787 32.4684 24.3549 45.0266C24.8183 52.5249 25.3243 57.1504 26.3118 64.7222C27.0001 70 29.0666 79.2487 32.5001 84.5C41.0001 97.5 55.8977 95.5 63.0001 94C81.4331 90.107 79.0001 65.5 63.0001 59C58.6055 57.2147 5.00012 58 38.0001 58C66.2281 58 69.3299 59.565 82.3923 35.7887Z"
      stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {
        secondPathAssist &&
        <AnimatedPath
            d="M82.3923 35.7887C81.8172 27.4142 81.5613 18.0394 74.1387 11.4162C64.3081 3.24621 48.5663 5.14183 38.5001 11.4162C26.2332 19.0623 23.5787 32.4684 24.3549 45.0266C24.8183 52.5249 25.3243 57.1504 26.3118 64.7222C27.0001 70 29.0666 79.2487 32.5001 84.5C41.0001 97.5 55.8977 95.5 63.0001 94C81.4331 90.107 79.0001 65.5 63.0001 59C58.6055 57.2147 5.00012 58 38.0001 58C66.2281 58 69.3299 59.565 82.3923 35.7887Z"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={400}
            animatedProps={animatedProps}
        />
      }
      
      </Svg>
   )}
  export default Design_ੳ_1
