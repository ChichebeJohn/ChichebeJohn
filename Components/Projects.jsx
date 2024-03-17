import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView } from "react-native";
import React from "react";

const Projects = () => {
  return (
    <ScrollView style={{backgroundColor: "#0F1624",}}>
      <View style={{ marginBottom: 20, gap: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
            color: "white",
          }}
        >
          Projects
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://example.com")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "blue",
              textDecorationLine: "underline",
              marginBottom: 5,
            }}
          >
            Project 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://example.com")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "blue",
              textDecorationLine: "underline",
              marginBottom: 5,
            }}
          >
            Project 2
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Projects;


// npm install expo@50.0.13
