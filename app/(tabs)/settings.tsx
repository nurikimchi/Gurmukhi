import { useState } from "react";
import { Text, View, Button, Modal, Switch, StyleSheet, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../GlobalStyles";

export default function Settings() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
  const [text, setText] = useState('Turn on/off notifications: ');

  const toggleSwitch = () => {
    if (isToggled) {
      setText('Notifications Off')
    } else {
      setText('Notifications On')
    }

    setIsToggled(previousState => !previousState)
  }

  return (
    <View 
      style={{
        margin: 0,
      }}>
      <Text style={GlobalStyles.header}>
        Settings
      </Text>
      <View style={{padding: 20,}}>
        <View>
          <Button
            title="Notifications"
            onPress={() => setIsModalVisible(true)}
            color="#c6bccc"
          />
          <Modal visible={isModalVisible}>
            <View style={{ flex: 1, backgroundColor: "white", padding: 60, fontSize:14,}}>
              <Text style={GlobalStyles.text}>
                {text}
              </Text>
              <Switch 
                trackColor={{false: 'gray', true: '#d481d4'}}
                thumbColor={isToggled ? 'white' : 'white'}
                onValueChange={toggleSwitch}
                value={isToggled}
              />
              <Text>{"\n"}</Text>
              <Button
                title="Back"
                color="#c6bccc"
                onPress={() => setIsModalVisible(false)}
              />
            </View>
          </Modal>

          <Button
            title="Gurmukhi Tips"
            onPress={() => setIsModalVisible2(true)}
            color="#c6bccc"
          />
          <Modal visible={isModalVisible2}>
            <View style={{ flex: 1, backgroundColor: "white", padding: 60}}>
              <Text style={GlobalStyles.text}>
                Here are some tips to support your learning:{"\n"} 
                1.{"\n"}
                2.{"\n"}
                3.{"\n"}
              </Text>
              <Button
                title="Back"
                color="#c6bccc"
                onPress={() => setIsModalVisible2(false)}
              />
            </View>
          </Modal>

          <Button
            title="Logout"
            onPress={() => setIsModalVisible3(true)}
            color="tomato"
          />
          <Modal visible={isModalVisible3}>
            <View style={{ flex: 1, backgroundColor: "white", padding: 60, fontSize:14,}}>
              <Text style={GlobalStyles.text}>
                Are you sure you want to logout?
              </Text>
              <Button
                title="Logout"
                color="tomato"
                onPress={() => setIsModalVisible3(false)}
              />
              <Button
                title="Back"
                color="#c6bccc"
                onPress={() => setIsModalVisible3(false)}
              />
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}