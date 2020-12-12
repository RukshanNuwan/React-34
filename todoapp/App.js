// @author phoenix|201210_1138

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

// custom components
import Header from './components/header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setToDos] = useState([
    { text: 'Buy a coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play on th switch', key: '3' }
  ])

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // functions area start
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const pressHandler = (key) => {
    setToDos((prevToDos) => {
      return prevToDos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDos((prevToDos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevToDos
        ];
      });
    } else {
      Alert.alert('Oops!', 'ToDos must be over 3 characters long', [
        { text: 'Ok', onPress: () => console.log('alert closed') }
      ]);
    }
  }

  return (
    // <Sandbox />

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  content: {
    padding: 40,
    flex: 1
  },

  list: {
    marginTop: 20,
    flex: 1
  }
});