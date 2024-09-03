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
}

const Design_ਕ_6: React.FC<DesignProps> = ({ visible, firstPathAssist, secondPathAssist }) => {

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

      <Path d="M10 20H92" stroke="#808080" strokeWidth="5" strokeLinecap="round" />
      {firstPathAssist &&
        <AnimatedPath
          d="M10 20H92"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          // strokeDashoffset={strokeDashoffset.value}
          animatedProps={animatedProps}
        />
      }

      <Path d="M75 20.5C75 28 73.6473 33.821 71 41.821C69.7826 45.5 66.4676 53.023 64.5 56.5M64.5 56.5C61 50.5 58.5 45.679 51.5 42.5C44.5 39.321 39 38 31 41C23 44 20 49.8753 20 55.5C20 62.2292 24.6811 69.9858 31 72.5C35 74.0916 42.1613 75.4193 52 70.5C59 67 60.5387 63.5 64.5 56.5ZM64.5 56.5C67.0131 62.2861 69.7225 67.0656 72 73C73.5 76.9084 76 84.5 76 88.5"
        stroke="#808080" strokeWidth="5" strokeLinecap="round" />
      {secondPathAssist &&
        <AnimatedPath
          d="M75 20.5C75 28 73.6473 33.821 71 41.821C69.7826 45.5 66.4676 53.023 64.5 56.5M64.5 56.5C61 50.5 58.5 45.679 51.5 42.5C44.5 39.321 39 38 31 41C23 44 20 49.8753 20 55.5C20 62.2292 24.6811 69.9858 31 72.5C35 74.0916 42.1613 75.4193 52 70.5C59 67 60.5387 63.5 64.5 56.5ZM64.5 56.5C67.0131 62.2861 69.7225 67.0656 72 73C73.5 76.9084 76 84.5 76 88.5"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={250}
          animatedProps={animatedProps}
        />
      }

    </Svg>
  )
}
export default Design_ਕ_6
