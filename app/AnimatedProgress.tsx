import React, { FunctionComponent, useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from './GlobalStyles';

const { width } = Dimensions.get('screen');

const AnimatedProgress: FunctionComponent = () => {
    return (
        <View style={GlobalStyles.barContainer}>
            <ProgressBar />
        </View>
    );
};

const ProgressBar: FunctionComponent = () => {
    const barWidth = React.useRef(new Animated.Value(0)).current;
    const finalWidth = width; 
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        Animated.timing(barWidth, {
            toValue: finalWidth,
            duration: 2000,
            useNativeDriver: false,
        }).start();

        barWidth.addListener((progress) => {
            const progressPercent = Math.round((progress.value / finalWidth) * 100);
            setProgress(progressPercent);
        });

        return () => {
            barWidth.removeAllListeners();
        };
    }, [finalWidth]);

    return (
        <View style={GlobalStyles.progressWrapper}>
            <Text style={GlobalStyles.progressText}>{`Progress: ${progress}%`}</Text>
            <View style={GlobalStyles.barContainer}>
                <Animated.View style={[GlobalStyles.progressBar, { width: barWidth }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default AnimatedProgress;
