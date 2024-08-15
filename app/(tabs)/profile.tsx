import { Text, View, Node } from "react-native";
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

export default function Profile() {
  return (
    <div>
      <h2 className="profile-head">Profile</h2>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img src="../app/profile.png" className="profile-icon" />
        <main className="profile">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Username</h3>
        </main>
      </View>
    </div>
  );
}