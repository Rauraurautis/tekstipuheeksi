import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState("")
  const [language, setLanguage] = useState("")

  const speak = () => {
    Speech.speak(text, {language: language})
    setText("")
  }


  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 5}}>Current language: {language === "fi" ? "Finnish" : "English"}</Text>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} placeholder="Text here"/>
      <Button title="Text to speech" onPress={speak}/>
      <View style={styles.languages}>
        <Button title="English" onPress={() => setLanguage("en")}/>
        <Button title="Finnish" onPress={() => setLanguage("fi")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languages: {
    flexDirection: "row",
    paddingTop: 20,
    width: "50%",
    justifyContent: "space-between"
  },
  input: {
    width: "50%",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth : 1.0
  }
});
