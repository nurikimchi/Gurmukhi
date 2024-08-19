export default function StartScreen({ navigation }) {
    const doubleTap = Gesture.Tap()
      .numberOfTaps(2)
      .onEnd(() => {
        navigation.navigate("OtherScreen");
      })
      .runOnJS(true);
  
    return (
      <GestureHandlerRootView style={styles.container}>
        <GestureDetector gesture={doubleTap}>
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>
              Double Tap to go to the other screen
            </Text>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    );
  }