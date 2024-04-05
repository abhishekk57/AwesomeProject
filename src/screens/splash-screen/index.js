import React from "react";
import { View, StyleSheet, Animated } from "react-native";
/**import LottieView from 'lottie-react-native';*/

const assetPath = '../../../assets/splash.png';
function SplashPage() {

    return (
        <View style={styles.container}>
            {/* <Image source={require('../../../assets/splash.png')} style={styles.image} />
            <Text style={styles.textStyle}>{"Loading..."}</Text> */}
            {/* <LottieView
                autoPlay
                source={require('../../../assets/splash.png')}
            /> */}
            <AnimatedView />
        </View>
    );
}

function AnimatedView() {
    const imageScale = new Animated.Value(0.1);

    Animated.timing(imageScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
    }).start();

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require(assetPath)}
                style={[styles.image, { transform: [{ scale: imageScale }] }]}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000"
    },
    image: {
        width: 200,
        height: 200,
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SplashPage;