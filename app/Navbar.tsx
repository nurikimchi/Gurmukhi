import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'
import { MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', marginBottom: -50 }}>
            {/* <ul className="left-nav">
                <li> */}
                    {/* <a href="/profile" className="nav-item"> */}
                        <CgProfile className="profile-icon" />
                    {/* </a>
                </li>
            </ul> */}
            {/* <a href="/" className="site-title">Gurmukhi</a> */}
            <Text>Gurmukhi</Text>
            {/* <ul>
                <li>
                    <a href="/settings" className="nav-item"> */}
                        <MdSettings className="icon-settings" />
                    {/* </a>
                </li>
            </ul> */}
        </View>
    );
}
