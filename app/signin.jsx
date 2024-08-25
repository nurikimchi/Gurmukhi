import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from './GlobalStyles';
import { useRouter, useSegments } from "expo-router";

export default function signin() {
    const router = useRouter();

    function handleSuccessfulsignIn() {
        router.navigate('/')
    }

    return (
        <View style={GlobalStyles.signInContainer}>
        <View style={GlobalStyles.signInInnerContainer}>
            {/* <Image
                source={{ uri: '' }}
                style={GlobalStyles.signInLogo}
                resizeMode="contain"
            /> */}
            <Text style={GlobalStyles.signInHeading}>Sign in to your account</Text>
        </View>

        <View style={GlobalStyles.signInInnerContainer}>
            <View style={GlobalStyles.signInForm}>
            <View style={GlobalStyles.signInFormField}>
                <Text style={GlobalStyles.signInLabel}>Email address</Text>
                <TextInput
                style={GlobalStyles.signInInput}
                placeholder="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                />
            </View>

            <View style={GlobalStyles.signInFormField}> 
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={GlobalStyles.signInLabel}>Password</Text>
                    <TouchableOpacity>
                        <Text style={GlobalStyles.signInForgotPasswordLink}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={GlobalStyles.signInInput}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCompleteType="password"
                />
            </View>

            <TouchableOpacity style={GlobalStyles.signInSubmitButton} onPress={handleSuccessfulsignIn}>
                <Text style={{ color: '#FFFFFF' }}>Sign in</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
  }
  