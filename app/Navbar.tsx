import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { GlobalStyles } from './GlobalStyles';

export default function Navbar() {
    return (
        <View style={ GlobalStyles.navbar }>
            <Ionicons name="person" size={32}/>
            <Text style={GlobalStyles.navbarAppTitle}>Gurmukhi</Text>
            <Ionicons name="settings" size={32}/>
        </View>
    );
}
