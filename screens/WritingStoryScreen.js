import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class WriteStoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory = () => {
    db.collection("stories").add({
      "title": this.state.title,
      "author": this.state.author,
      "date": firebase.firestore.Timestamp.now().toDate(),
      "story": this.state.story,
    });

    // this.setState({
    //   title: "",
    //   author: "",
    //   story: "",
    // });
  };

  // initiateBookIssue = async () => {
  //   //add a transaction collection
  //   db.collection('stories').add({
  //     title: this.state.title,
  //     author: this.state.author,
  //      story: this.state.story,
  //     date: firebase.firestore.Timestamp.now().toDate(),
  //     transactionType: 'Issue',
  //   });
  // }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Title of the Story"
            placeholderTextColor="black"
            onChangeText={text => {
              this.setState({ title: text });
            }}
            value={this.state.title}
          />
          <TextInput
            style={styles.input}
            placeholder="Author of the Story"
            placeholderTextColor="black"
            onChangeText={text => {
              this.setState({ author: text });
            }}
            value={this.state.author}
          />
          <TextInput
            style={styles.storyInput}
            placeholder="Story"
            placeholderTextColor="black"
            multiline={true}
            onChangeText={text => {
              this.setState({ story: text });
            }}
            value={this.state.story}
          />
          <TouchableOpacity style={styles.button} onPress={this.submitStory}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  input: {
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop:10,
    color: "black",
    outline: "none",
  },

  storyInput: {
    height: 120,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    marginLeft: 10,
    marginTop: 10,
    color: "black",
    textAlignVertical: "center",
    outline: "none",
  },

  button: {
    alignSelf: "center",
    width: 115,
    height: 40,
    borderRadius: 10,
    borderColor: "black",
    marginTop: 20,
    backgroundColor: "black",
  },

  buttonText: {
    alignSelf: "center",
    color: "pink",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    marginTop: 9,
  },
});