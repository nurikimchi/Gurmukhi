import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { GlobalStyles } from "./GlobalStyles";

export default function Cards() {
    const handleContinue = (lesson: string) => {
        console.log(`Continue button pressed for ${lesson}`);
    };

    return (
        <View style={{height: '90%'}}>
            {/* Ensure that height of cards are NOT percentages. */}
            <ScrollView style={GlobalStyles.cardScrollView}>
                <View style={GlobalStyles.cardGridContainer}>
                    {["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5", "Lesson 6", "Lesson 7", "Lesson 8"].map((lesson, index) => (
                        <View style={GlobalStyles.card} key={index}> 
                        {/* styles[`card${index + 1}`] */}
                            <Text style={GlobalStyles.lsnText}>{lesson}</Text>
                            <TouchableOpacity style={GlobalStyles.button} onPress={() => handleContinue(lesson)}>
                            {/* <a href="/feature"> </a> */}
                                <Text style={GlobalStyles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
