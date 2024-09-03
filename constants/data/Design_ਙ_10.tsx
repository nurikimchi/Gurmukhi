//Design_ਙ_10

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
const Design_ਙ_10 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
    <Path d="M13 14H82" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
      <AnimatedPath
          d="M13 14H82"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
      />
    }
    <Path d="M35.3715 16C35.3715 21.2407 33.4202 32.0098 39.0703 32.0098C44.6186 32.0098 46.0953 31.3137 52.941 32.7059C59.7868 34.098 66.0324 37.4607 69.33 40.3627C77.2815 47.3604 77.8526 55.0144 75.1342 64.6377C72 74 60.5 80.7808 55.5 82C48.6384 83.6731 40.6964 85.7934 34.4467 80.0392C23 69.5 37 63 47 63C50.5394 63 54.728 64 58 66.5C67.1805 73.5145 67.9922 75.5818 75.1342 87"
      stroke="#808080"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {secondPathAssist && 
      <AnimatedPath
          d="M35.3715 16C35.3715 21.2407 33.4202 32.0098 39.0703 32.0098C44.6186 32.0098 46.0953 31.3137 52.941 32.7059C59.7868 34.098 66.0324 37.4607 69.33 40.3627C77.2815 47.3604 77.8526 55.0144 75.1342 64.6377C72 74 60.5 80.7808 55.5 82C48.6384 83.6731 40.6964 85.7934 34.4467 80.0392C23 69.5 37 63 47 63C50.5394 63 54.728 64 58 66.5C67.1805 73.5145 67.9922 75.5818 75.1342 87"
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
  export default Design_ਙ_10
