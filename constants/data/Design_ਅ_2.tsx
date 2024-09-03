import React, { useEffect, useState } from 'react'
import Svg, { Path } from 'react-native-svg';

import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
  withDelay
} from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface DesignProps {
  visible: boolean;
  firstPathAssist: boolean;
  secondPathAssist: boolean;
  thirdPathAssist?: boolean;
  fourthPathAssist?: boolean;
}
const Design_ਅ_2 : React.FC<DesignProps> = ({ visible,  firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {
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
      fill='none'
    >
      <Path
        d='M13 25.2287C17.9215 25.2287 23.3807 25.2287 28.2307 25.2287C29.5516 25.2287 31.4027 38.8363 31.4027 40.3713C31.4027 46.1061 31.7835 51.7522 31.1798 57.4924C30.9233 59.932 26.3175 68.6857 20.9905 64.8789C15.3182 53.0808 42.1439 30.6131 50.5602 26.1672C51.6088 25.6133 53.3221 55.8303 53.3221 60.3067C53.3221 64.4323 53.3829 67.4933 51.887 71.4049C49.3279 78.0964 43.19 74.9482 44.0806 70.1852C47.2369 53.3033 64.1421 48.5541 70 47.0817'
        stroke='#808080'
        strokeWidth='5'
        strokeLinecap='round'
      />
      {firstPathAssist &&
        <AnimatedPath
          d='M13 25.2287C17.9215 25.2287 23.3807 25.2287 28.2307 25.2287C29.5516 25.2287 31.4027 38.8363 31.4027 40.3713C31.4027 46.1061 31.7835 51.7522 31.1798 57.4924C30.9233 59.932 26.3175 68.6857 20.9905 64.8789C15.3182 53.0808 42.1439 30.6131 50.5602 26.1672C51.6088 25.6133 53.3221 55.8303 53.3221 60.3067C53.3221 64.4323 53.3829 67.4933 51.887 71.4049C49.3279 78.0964 43.19 74.9482 44.0806 70.1852C47.2369 53.3033 64.1421 48.5541 70 47.0817'
          stroke='black'
          strokeWidth='5'
          strokeLinecap='round'
          fill='transparent'
          strokeDasharray={250} // this is the path length
          // strokeDashoffset={strokeDashoffset.value}
          animatedProps={animatedProps}
        />
      }

      <Path d='M72 22C74 21.9974 82 21.9974 84 21.9974' stroke='#808080' strokeWidth='5' strokeLinecap='round' />
      {secondPathAssist &&
        <AnimatedPath
          d='M72 22C74 21.9974 82 21.9974 84 21.9974'
          stroke='black'
          strokeWidth='5'
          strokeLinecap='round'
          fill='transparent'
          strokeDasharray={250}
          animatedProps={animatedProps}
        />
      }

      <Path d='M71.9971 22.0001L72.8323 80.7969' stroke='#808080' strokeWidth='5' strokeLinecap='round' />
      {thirdPathAssist &&
        <AnimatedPath
          d='M71.9971 22.0001L72.8323 80.7969'
          stroke='black'
          strokeWidth='5'
          strokeLinecap='round'
          fill='transparent'
          strokeDasharray={250}
          animatedProps={animatedProps}
        />
      }
    </Svg>

  )
}
export default Design_ਅ_2
