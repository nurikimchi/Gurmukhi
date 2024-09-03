
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
  const Design_ਧ_24 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
    <Path d="M15 15C18.9138 15 19.0862 15 23 15C27.2974 15 30.2913 22.314 31.1288 25.8169C32.0775 29.7853 32.1008 33.5911 32.1008 37.686C32.1008 45.8836 22.2031 51.8111 22.2031 51.8111C22.2031 51.8111 29.7951 63.1192 34.393 66.3633C43.1797 72.5628 55.4165 75.0176 64.3136 66.3633C70.5551 60.292 69.9865 53.4196 69.9865 45.3434C69.9865 34.1463 69.8548 26.7082 69.8548 15.3899C69.8548 13.4692 69.8547 19.1859 69.8548 20.7889C69.8577 44.8044 69.8544 65.9989 69.8544 89" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {firstPathAssist && 
        <AnimatedPath
            d="M15 15C18.9138 15 19.0862 15 23 15C27.2974 15 30.2913 22.314 31.1288 25.8169C32.0775 29.7853 32.1008 33.5911 32.1008 37.686C32.1008 45.8836 22.2031 51.8111 22.2031 51.8111C22.2031 51.8111 29.7951 63.1192 34.393 66.3633C43.1797 72.5628 55.4165 75.0176 64.3136 66.3633C70.5551 60.292 69.9865 53.4196 69.9865 45.3434C69.9865 34.1463 69.8548 26.7082 69.8548 15.3899C69.8548 13.4692 69.8547 19.1859 69.8548 20.7889C69.8577 44.8044 69.8544 65.9989 69.8544 89"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
    <Path d="M8 15L89 15" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
    {secondPathAssist && 
        <AnimatedPath
            d="M8 15L89 15"
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
  export default Design_ਧ_24
