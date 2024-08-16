import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from 'react';

export default function Cards() {
    const handleContinue = (lesson: string) => {
        console.log(`Continue button pressed for ${lesson}`);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.headingText}>Welcome back! Click on a lesson to Continue.</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5", "Lesson 6", "Lesson 7", "Lesson 8"].map((lesson, index) => (
                    <View key={index} style={[styles.card, styles[`card${index + 1}`]]}>
                        <Text>{lesson}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleContinue(lesson)}>
                        <a href="/feature"> </a>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    headingText: { 
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 10,        
    },
    scrollContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        height: 250,
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: '#add8e6',
        marginHorizontal: 5,
    },
    button: {
        marginTop: 10,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#4682b4',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center',
    },
    cardOne: {
        backgroundColor: '#fff0f5'
    },
    cardTwo: {
        backgroundColor: '#00bfff'
    },
    cardThree: {
        backgroundColor: '#00bfff'
    },
    cardFour: {
        backgroundColor: '#00bfff'
    },
    cardFive: {
        backgroundColor: '#00bfff'
    },
    cardSix: {
        backgroundColor: '#00bfff'
    },
    cardSeven: {
        backgroundColor: '#00bfff'
    },
    cardEight: {
        backgroundColor: '#00bfff'
    },
});
