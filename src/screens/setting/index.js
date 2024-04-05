import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

import { webUrl1 } from "../../util/constant";

function SettingPage({ route, navigation }) {
    const webView = useRef(null);
    const handleWebViewMessage = (event) => {
        const messageA = event.nativeEvent.data;
        const jsCode = `
        window.postMessage('${messageA}', '*');
    `;
        console.log(jsCode);
        /**  webViewB.current.injectJavaScript(jsCode);*/
    };
    useEffect(() => {
        /** console.log(route.params);*/
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                ref={webView}
                source={{ uri: webUrl1 }}
                style={{ flex: 1, margin: 10 }}
                onMessage={handleWebViewMessage}
                javaScriptEnabled={true}
            />
        </SafeAreaView>
    )
}
export default SettingPage;

SettingPage.propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};