import React from "react";
import Navbar from "../Navbar";
import Button from "../Button";
import AnimatedProgress from "../AnimatedProgress"
import Cards from "../Cards";

import "./style.css";
import { Text, View, StyleSheet } from "react-native";


export default function Index(){
  const handleContinue = () => {
    console.log('Continue button pressed');
  }

  return(
    <View>
      <Navbar />
      <AnimatedProgress />
      <Cards />
      
        <View 
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        >
        </View>
    </View>
  )
}
