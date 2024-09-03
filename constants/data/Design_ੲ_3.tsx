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
const Design_ੲ_3 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
      
      <Path d="M20 20.09L80 20.0899" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M20 20.09L80 20.0899"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      
      <Path d="M68.3751 21C68.3751 22.4605 69.1202 36.544 68.3751 37.8831C67.7697 38.971 59.2471 37.5289 50.5604 40.4805C45.9334 42.0526 42.8921 43.273 38.7713 45.7933C34.2092 48.5835 31.88 50.8817 27.6028 54.0577C26.1136 55.1635 21.6789 59.3571 22.0185 59.3706C25.6861 63.1486 25.3691 64.0931 29.4642 67.635C30.566 68.9252 34.8899 72.0109 36.2895 72.9479C40.9146 76.0444 43.7172 77.6312 49.3195 79.4414C57.6107 82.1204 68.5152 81.596 76 75.8995" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {secondPathAssist && 
        <AnimatedPath
            d="M68.3751 21C68.3751 22.4605 69.1202 36.544 68.3751 37.8831C67.7697 38.971 59.2471 37.5289 50.5604 40.4805C45.9334 42.0526 42.8921 43.273 38.7713 45.7933C34.2092 48.5835 31.88 50.8817 27.6028 54.0577C26.1136 55.1635 21.6789 59.3571 22.0185 59.3706C25.6861 63.1486 25.3691 64.0931 29.4642 67.635C30.566 68.9252 34.8899 72.0109 36.2895 72.9479C40.9146 76.0444 43.7172 77.6312 49.3195 79.4414C57.6107 82.1204 68.5152 81.596 76 75.8995"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      
      <Path d="M33 22C33 30.8226 42.6819 35.8897 50 40" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {thirdPathAssist && 
        <AnimatedPath
            d="M33 22C33 30.8226 42.6819 35.8897 50 40"
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
  export default Design_ੲ_3
