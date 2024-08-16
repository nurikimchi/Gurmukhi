import React, { FunctionComponent, useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('screen');

const AnimatedProgress: FunctionComponent = () => {
    return (
        <View style={styles.barWrapper}>
            <ProgressBar />
        </View>
    );
};

const ProgressBar: FunctionComponent = () => {
    const barWidth = React.useRef(new Animated.Value(0)).current;
    const finalWidth = width * 0.4; 
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
        <View style={styles.progressWrapper}>
            <Text style={styles.progressText}>{`Progress: ${progress}%`}</Text>
            <View style={styles.barContainer}>
                <Animated.View style={[styles.progressBar, { width: barWidth }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressWrapper: {
        alignItems: 'center',
        paddingHorizontal: 20, 
    },
    barContainer: {
        width: '100%',
        maxWidth: 300, 
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        marginTop: 5, 
    },
    progressBar: {
        backgroundColor: 'purple',
        height: 20, 
        borderRadius: 15,
    },
    progressText: {
        fontSize: 14, 
        fontWeight: 'bold',
        marginBottom: 5, 
        textAlign: 'center', 
    },
});

export default AnimatedProgress;
