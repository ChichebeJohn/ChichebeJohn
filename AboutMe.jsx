import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
} from "react-native";

import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

import About from "./Components/About";
import Skill from "./Components/Skill";
import Header from "./Components/Header";
import Menu from "./Components/Menu";

const { height, width } = Dimensions.get("window");

const AboutMe = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={{ zIndex: 5 }}>
        <Menu />
      </View>

      <ScrollView style={styles.content}>
        <View>
          <About />
        </View>

        <View>
          <Skill />
        </View>
        <View>
          <Projects />
        </View>

        <View>
          <Contact />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1624",

    justifyContent: "space-around",
  },

  content: {
    padding: 10,

    // flex: 10,
    top: 0,
    zIndex: 1,
  },
});

export default AboutMe;
