import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GlobalStyles } from '../app/GlobalStyles'; // Adjust the path as necessary

interface LessonButton{
    text: string,
    onPress: () => void;
}

const LessonButton: React.FC<LessonButton> = ({ text, onPress }) => {
  return (
    <Pressable
      style={[
        GlobalStyles.lessonButtonContainer, 
        GlobalStyles.lessonButtonShadow
      ]}
      onPress={onPress}
    //   activeOpacity={0.7}
    >
      <View style={GlobalStyles.lessonButtonContent}>
        <Ionicons 
          name="checkmark-circle" 
          size={20} 
          color="white" 
          style={GlobalStyles.lessonButtonIcon} 
        />
        <Text style={GlobalStyles.lessonButtonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default LessonButton;
