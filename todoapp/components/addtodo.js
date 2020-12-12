// @author phoenix|201211_0838

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState('');

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // functions area start
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New ToDo'
                onChangeText={changeHandler}
            />

            <Button onPress={() => submitHandler(text)} title='Add toDo' color='teal' />
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});