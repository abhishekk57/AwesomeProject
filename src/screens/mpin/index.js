import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, View, Button, KeyboardAvoidingView, Keyboard } from "react-native";
import PropTypes from 'prop-types';
import { colors } from '../../util/constant';

import { PinInput } from '@pakenfit/react-native-pin-input';
import SplashPage from '../splash-screen';

function MpinPage({ navigation }) {

    const [code, setCodeState] = useState('');

    const [status,setStatus] = useState(true);

    useEffect(() => {

    }, [code]);

    useEffect(()=>{
        setTimeout(()=>{
            setStatus(false);
        },1500);
    },[])

    const _checkCode = (code) => setCodeState(code);

    const navigate = () => {
        Keyboard.dismiss();
        navigation.navigate('tabs')
    }


    if(status){
        return <SplashPage/>
    }


    return (<SafeAreaView style={{ flex: 1, backgroundColor: "#3b3c43" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text style={{
                padding: 10, fontSize: 28, fontWeight: "bold", letterSpacing: 3,
                color: "#FFF"
            }}>{'Enter Your MPIN'}</Text>
            <Text style={{ color: "#FFF", padding: 10, fontSize: 18, letterSpacing: 2 }}>{'Please enter your 4 digit MPIN'}</Text>
            <View style={{ marginTop: 50 }}></View>
            <KeyboardAvoidingView behavior="padding">
                <PinInput inputStyle={{ color: "#006899" }} inputProps={{ placeholder: '', cursorColor: "#006899" }} length={4} onFillEnded={_checkCode} />

            </KeyboardAvoidingView>


        </View>
        <Pressable
            onPress={() => {
                navigate();
            }}
            style={{
                width: "90%", height: 48, backgroundColor: colors.buttonColor,
                justifyContent: "center", alignItems: "center", borderRadius: 36, margin: 10, alignSelf: "center"
            }}>
            <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "700" }}>{'Continue'}</Text>
        </Pressable>
    </SafeAreaView>)
}
export default MpinPage;

MpinPage.propTypes = {
    navigation: PropTypes.object.isRequired,
};