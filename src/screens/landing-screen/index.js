import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from '../../util/constant';

function LandingPage({ navigation }) {


    useEffect(() => { }, []);


    const navigateToPage1 = () => {
        navigation.navigate('HomePage');
    }
    const navigateToPage2 = () => {
        navigation.navigate('WebviewB');
    }
    const navigateToPage3 = () => {
        navigation.navigate('Logs');
    }

    return (<View style={cStyle.container}>
        <Pressable style={[styles.buttonStyle]} onPress={() => { navigateToPage1(); }}>
            <Text style={cStyle.textStyle}>{'WebView PageA'}</Text>
        </Pressable>
        <Pressable style={[styles.buttonStyle]} onPress={() => { navigateToPage2(); }}>
            <Text style={cStyle.textStyle}>{'WebView PageB'}</Text>
        </Pressable>
        <Pressable style={[styles.buttonStyle]} onPress={() => { navigateToPage3(); }}>
            <Text style={cStyle.textStyle}>{'Logs'}</Text>
        </Pressable>
    </View>)
}

export default LandingPage;

LandingPage.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const cStyle = StyleSheet.create({
    textStyle: { fontSize: 16, letterSpacing: 1, fontWeight: "700" },
    container: { flex: 1, justifyContent: "center", alignItems: "center" }
});