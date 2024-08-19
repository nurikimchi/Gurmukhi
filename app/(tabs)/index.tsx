import Navbar from "../Navbar";
import AnimatedProgress from "../AnimatedProgress"
import Cards from "../Cards";

import "./style.css";
import { SafeAreaView } from "react-native";


export default function Index(){
  const handleContinue = () => {
    console.log('Continue button pressed');
  }

  return(
    <SafeAreaView style={{padding: 20}}>
      <Navbar />
        <AnimatedProgress />
        <Cards />
    </SafeAreaView>
  )
}
