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

const Design_ਸ_4 : React.FC<DesignProps> = ({ visible, firstPathAssist, secondPathAssist, thirdPathAssist, fourthPathAssist}) => {

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

      <Path d="M17 17.3745L86.9947 18.2218" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" />
      {firstPathAssist && 
        <AnimatedPath
            d="M17 17.3745L86.9947 18.2218"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }


      <Path 
        d="M31.8419 20C40.185 37.2592 37.618 50.1798 37.618 68.8189C37.618 80.8729 21.5644 78.5295 27.199 67.5712C29.8729 62.3709 33.3384 60.0712 37.199 58.3991C87.3384 58.3991 52.199 58.3991 65.699 58.3991" 
        stroke={strokeColor}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {secondPathAssist && 
        <AnimatedPath
            d="M31.8419 20C40.185 37.2592 37.618 50.1798 37.618 68.8189C37.618 80.8729 21.5644 78.5295 27.199 67.5712C29.8729 62.3709 33.3384 60.0712 37.199 58.3991C87.3384 58.3991 52.199 58.3991 65.699 58.3991"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={250}
            animatedProps={animatedProps}
        />
      }


      <Path d="M66 20L67 84" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" />
      {thirdPathAssist && 
        <AnimatedPath
            d="M66 20L67 84"
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
export default Design_ਸ_4
