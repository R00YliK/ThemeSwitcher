import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Styles from "../Styles";
import { useTheme } from "../context/useTheme";

export default function Home (){
    const {isDarkMode} = useTheme()

    return(
        <View style= {[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light}>Toimiiko home</Text>
        </View>
    )
}