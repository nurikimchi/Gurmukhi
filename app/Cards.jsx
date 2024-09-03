import { Text, View, FlatList, ScrollView, Pressable } from "react-native";
import { GlobalStyles } from "./GlobalStyles";
import { useState } from 'react';
import { useRouter, useSegments, Slot, useLocalSearchParams } from "expo-router";

// Import components
import Design_ੳ_1 from '../constants/data/Design_ੳ_1';
import Design_ਅ_2 from '../constants/data/Design_ਅ_2';
import Design_ੲ_3 from '../constants/data/Design_ੲ_3';
import Design_ਸ_4 from '../constants/data/Design_ਸ_4';
import Design_ਹ_5 from '../constants/data/Design_ਹ_5';
import Design_ਖ_7 from '../constants/data/Design_ਖ_7';
import Design_ਕ_6 from '../constants/data/Design_ਕ_6';
import Design_ਗ_8 from '../constants/data/Design_ਗ_8';
import Design_ਘ_9 from '../constants/data/Design_ਘ_9';
import Design_ਙ_10 from '../constants/data/Design_ਙ_10';
import Design_ਚ_11 from '../constants/data/Design_ਚ_11';
import Design_ਛ_12 from '../constants/data/Design_ਛ_12';
import Design_ਜ_13 from '../constants/data/Design_ਜ_13';
import Design_ਝ_14 from '../constants/data/Design_ਝ_14';
import Design_ਞ_15 from '../constants/data/Design_ਞ_15';
import Design_ਟ_16 from '../constants/data/Design_ਟ_16';
import Design_ਠ_17 from '../constants/data/Design_ਠ_17';
import Design_ਡ_18 from '../constants/data/Design_ਡ_18';
import Design_ਢ_19 from '../constants/data/Design_ਢ_19';
import Design_ਣ_20 from '../constants/data/Design_ਣ_20';
import Design_ਤ_21 from '../constants/data/Design_ਤ_21';
import Design_ਥ_22 from '../constants/data/Design_ਥ_22';
import Design_ਦ_23 from '../constants/data/Design_ਦ_23';
import Design_ਧ_24 from '../constants/data/Design_ਧ_24';
import Design_ਨ_25 from '../constants/data/Design_ਨ_25';
import Design_ਪ_26 from '../constants/data/Design_ਪ_26';
import Design_ਫ_27 from '../constants/data/Design_ਫ_27';
import Design_ਬ_28 from '../constants/data/Design_ਬ_28';
import Design_ਭ_29 from '../constants/data/Design_ਭ_29';
import Design_ਮ_30 from '../constants/data/Design_ਮ_30';
import Design_ਯ_31 from '../constants/data/Design_ਯ_31';
import Design_ਰ_32 from '../constants/data/Design_ਰ_32';
import Design_ਲ_33 from '../constants/data/Design_ਲ_33';
import Design_ਵ_34 from '../constants/data/Design_ਵ_34';
import Design_ੜ_35 from '../constants/data/Design_ੜ_35';

export default function Cards() {

    const handleSVGLetterSelect = (itemLetter) => {
        console.log("HEY: \n", itemLetter)
        router.push({ pathname: "/feature", params: { itemLetter: itemLetter } }); // Remove the braces in params
    }


    const lessons = [
        {letter: 'ੳ'},
        {letter: 'ਅ'},
        {letter: 'ੲ'},
        {letter: 'ਸ'},
        {letter: 'ਹ'},
        {letter: 'ਕ'},
        {letter: 'ਖ'},
        {letter: 'ਗ'},
        {letter: 'ਘ'},
        {letter: 'ਙ'},
        {letter: 'ਚ'},
        {letter: 'ਛ'},
        {letter: 'ਜ'},
        {letter: 'ਝ'},
        {letter: 'ਞ'},
        {letter: 'ਟ'},
        {letter: 'ਠ'},
        {letter: 'ਡ'},
        {letter: 'ਢ'},
        {letter: 'ਣ'},
        {letter: 'ਤ'},
        {letter: 'ਥ'},
        {letter: 'ਦ'},
        {letter: 'ਧ'},
        {letter: 'ਨ'},
        {letter: 'ਪ'},
        {letter: 'ਫ'},
        {letter: 'ਬ'},
        {letter: 'ਭ'},
        {letter: 'ਮ'},
        {letter: 'ਯ'},
        {letter: 'ਰ'},
        {letter: 'ਲ'},
        {letter: 'ਵ'},
        {letter: 'ੜ'},
    ];

    const svgList = {
        'ੳ': Design_ੳ_1,
        'ਅ': Design_ਅ_2,
        'ੲ': Design_ੲ_3,
        'ਸ': Design_ਸ_4,
        'ਹ': Design_ਹ_5,
        'ਕ': Design_ਕ_6,
        'ਖ': Design_ਖ_7,
        'ਗ': Design_ਗ_8,
        'ਘ': Design_ਘ_9,
        'ਙ': Design_ਙ_10,
        'ਚ': Design_ਚ_11,
        'ਛ': Design_ਛ_12,
        'ਜ': Design_ਜ_13,
        'ਝ': Design_ਝ_14,
        'ਞ': Design_ਞ_15,
        'ਟ': Design_ਟ_16,
        'ਠ': Design_ਠ_17,
        'ਡ': Design_ਡ_18,
        'ਢ': Design_ਢ_19,
        'ਣ': Design_ਣ_20,
        'ਤ': Design_ਤ_21,
        'ਥ': Design_ਥ_22,
        'ਦ': Design_ਦ_23,
        'ਧ': Design_ਧ_24,
        'ਨ': Design_ਨ_25,
        'ਪ': Design_ਪ_26,
        'ਫ': Design_ਫ_27,
        'ਬ': Design_ਬ_28,
        'ਭ': Design_ਭ_29,
        'ਮ': Design_ਮ_30,
        'ਯ': Design_ਯ_31,
        'ਰ': Design_ਰ_32,
        'ਲ': Design_ਲ_33,
        'ਵ': Design_ਵ_34,
        'ੜ': Design_ੜ_35,
    };

    const router = useRouter();

    const renderItem = ({ item }) => {
        const CardSVG = svgList[item.letter];
        
        return (
            <View style={GlobalStyles.lessonCard}>
                <Pressable onPress={() => handleSVGLetterSelect(item.letter)}>
                    <CardSVG visible={true} firstPathAssist={true} secondPathAssist={true} thirdPathAssist={true} fourthPathAssist={true}/>
                </Pressable>

                <Text style={GlobalStyles.lessonName}>{item.letter}</Text>
            </View>
        );
    };


    return (
        <FlatList
            data={lessons}
            keyExtractor={(item) => item.letter}
            contentContainerStyle={GlobalStyles.lessonsGrid}
            renderItem={renderItem}
            numColumns={3} // Adjust number of columns as needed
        />
    );
}
