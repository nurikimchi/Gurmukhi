
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
  const Design_ਬ_28 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M11 16H81" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M11 16H81"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M19 17C19 17 20.2403 20.3722 23.3411 24.4188C31.1575 34.6195 46.2795 41.7696 58.2922 41.7696C61.4499 41.4755 66.0131 41.3823 66.7517 41.0849C67.7698 41.3597 65.352 41.4175 64.9831 41.4175C60.421 41.4175 55.7898 41.7696 51.2479 41.7696C48.2131 41.7696 45.3904 42.5244 42.4036 42.8065C38.3832 43.1862 27.2557 49.3383 27.062 54.0938C30.1627 60.8381 37.1643 66.8269 42.4036 68.5C51.5141 71.4093 58.0244 71.0718 66.8268 66.2336" 
      stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M19 17C19 17 20.2403 20.3722 23.3411 24.4188C31.1575 34.6195 46.2795 41.7696 58.2922 41.7696C61.4499 41.4755 66.0131 41.3823 66.7517 41.0849C67.7698 41.3597 65.352 41.4175 64.9831 41.4175C60.421 41.4175 55.7898 41.7696 51.2479 41.7696C48.2131 41.7696 45.3904 42.5244 42.4036 42.8065C38.3832 43.1862 27.2557 49.3383 27.062 54.0938C30.1627 60.8381 37.1643 66.8269 42.4036 68.5C51.5141 71.4093 58.0244 71.0718 66.8268 66.2336"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M67 17V91" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {thirdPathAssist && 
        <AnimatedPath
            d="M67 17V91"
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
  export default Design_ਬ_28


