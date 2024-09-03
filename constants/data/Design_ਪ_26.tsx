
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
  const Design_ਪ_26 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M22 15H32" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M22 15H32"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M73 15H83" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M73 15H83"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path 
        d="M31.7606 15.5597C41.2254 22.8358 28.5003 38.3943 25 45.2239C32.3741 60.8651 52.5885 71.4286 70.6068 56.9203C73 55.7299 72.7513 53.5415 72.7513 51.651C72.7513 47.4059 72.7513 43.1608 72.7513 38.9157C72.7513 31.9649 73 25.0166 73 18.0541C73 -4.90992 73 109.91 73 86.9459"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {thirdPathAssist && 
        <AnimatedPath
            d="M31.7606 15.5597C41.2254 22.8358 28.5003 38.3943 25 45.2239C32.3741 60.8651 52.5885 71.4286 70.6068 56.9203C73 55.7299 72.7513 53.5415 72.7513 51.651C72.7513 47.4059 72.7513 43.1608 72.7513 38.9157C72.7513 31.9649 73 25.0166 73 18.0541C73 -4.90992 73 109.91 73 86.9459"
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
  export default Design_ਪ_26


