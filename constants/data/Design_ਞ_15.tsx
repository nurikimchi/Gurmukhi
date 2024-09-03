//Design_ਞ_15

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
  const Design_ਞ_15 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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
  
      <Path d="M20 23L87.1533 23.5008" stroke="#808080" strokeWidth="5" strokeLinecap="round"/>
      {firstPathAssist && 
        <AnimatedPath
            d="M20 23L87.1533 23.5008"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path
        d="M34.7068 24.1504C34.7068 33.3731 42.567 42.3399 52.0782 42.3399C55.4481 42.3399 59.0048 42.7043 61.991 40.8241C64.325 39.3545 66.6166 37.6607 68.379 35.5068C70.9953 32.309 72.4023 28.2126 73.6842 24.3669"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M34.7068 24.1504C34.7068 33.3731 42.567 42.3399 52.0782 42.3399C55.4481 42.3399 59.0048 42.7043 61.991 40.8241C64.325 39.3545 66.6166 37.6607 68.379 35.5068C70.9953 32.309 72.4023 28.2126 73.6842 24.3669"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }
      <Path d="M63.5 44C66.6626 44 65 44 63.5 44ZM63.5 44C61.467 44 50.0591 44 48 44C42.1126 44 30.5847 46.2822 33.5 56C36.5 66 46.0448 63.8767 54.1624 63.8767C56.982 63.8767 59.6797 63.5171 62.4746 63.5171C63.1716 63.5171 64.8031 63.5171 65.5001 63.5171C66.3665 63.5171 59.5 63.6224 59.5 63.6224C53.091 63.6224 38 62.2661 41.5 74.5C43.594 79.3611 50.5 80 55.5 80C59.683 80 60.5 80 62.4746 79.5"
        stroke="#808080"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {thirdPathAssist && 
        <AnimatedPath
            d="M63.5 44C66.6626 44 65 44 63.5 44ZM63.5 44C61.467 44 50.0591 44 48 44C42.1126 44 30.5847 46.2822 33.5 56C36.5 66 46.0448 63.8767 54.1624 63.8767C56.982 63.8767 59.6797 63.5171 62.4746 63.5171C63.1716 63.5171 64.8031 63.5171 65.5001 63.5171C66.3665 63.5171 59.5 63.6224 59.5 63.6224C53.091 63.6224 38 62.2661 41.5 74.5C43.594 79.3611 50.5 80 55.5 80C59.683 80 60.5 80 62.4746 79.5"
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
  export default Design_ਞ_15
