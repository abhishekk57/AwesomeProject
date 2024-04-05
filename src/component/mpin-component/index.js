import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const MPINInput = ({ length, onChange, onComplete }) => {
    const [pin, setPin] = useState('');

    const handlePinChange = (text) => {
        setPin(text);
        onChange(text);
    };

    /**  const handlePinComplete = () => {
         onComplete(pin);
     }; */

    return (
        <View style={styles.container}>
            {Array.from({ length }).map((_, index) => (
                <TextInput
                    key={index}
                    style={styles.pinInput}
                    keyboardType="numeric"
                    maxLength={1}
                    value={pin[index]}
                    onChangeText={(text) => handlePinChange(text)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    pinInput: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
    },
});

export default MPINInput;