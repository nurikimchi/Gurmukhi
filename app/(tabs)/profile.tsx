import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../GlobalStyles";

export default function Profile() {
  return (
    <View
      style={{
        margin: 0,
        height: 30,
      }}>
      <View style={{alignItems: "center",}}>
        <Image style={{
          margin: 50,
          padding: 60,
          flex: 1,
          alignItems: "center",
        }} 
          source={{
          uri:'../app/profile.png',
        }}/>
      </View>
      <View
        style={{
          margin: 0,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 30,
        }}>
        <View>
          <Text style={GlobalStyles.textBox}>
            Name
          </Text>
          <Text style={GlobalStyles.textBox}>
            Email
          </Text>
          <Text style={GlobalStyles.textBox}>
            Username
          </Text>
        </View>
      </View>
    </View>
  );
}