import { View, Text, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const About = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.text}>
          Hi, I'm Chichebe John Nmesoma, a frontend developer. 
          Skilled in React and React Native.  {"\n"} {"\n"}
          As a passionate frontend developer, I thrive on crafting immersive digital experiences that captivate and delight users.  {"\n"}With a keen eye for design and a love for clean, efficient code,  {"\n"}I specialize in building dynamic web and mobile applications using cutting-edge technologies such as React, React Native, and JavaScript.{"\n"}{"\n"}

With several years of experience under my belt, I've honed my skills in translating design concepts into interactive user interfaces that seamlessly blend aesthetics with functionality. {"\n"} {"\n"} From sleek single-page applications to feature-rich mobile apps, I've tackled a diverse range of projects,  {"\n"}each presenting its unique set of challenges and opportunities for innovation. {"\n"} {"\n"}

My journey into the world of frontend development began with a fascination for the limitless possibilities of the web. Since then, I've dedicated myself to mastering the latest tools and techniques, constantly pushing the boundaries of what's possible in the digital realm. {"\n"}

What sets me apart is not just my technical expertise, but also my commitment to delivering exceptional user experiences. I believe that great software isn't just about lines of code; it's about understanding the needs of the end user and crafting solutions that exceed their expectations. {"\n"} {"\n"}

Whether I'm collaborating with designers to bring their visions to life or diving deep into complex codebases to solve tricky bugs, I approach each project with enthusiasm and a relentless pursuit of excellence. I thrive in fast-paced environments where innovation is valued, and I'm always eager to tackle new challenges head-on. {"\n"} {"\n"}

When I'm not coding, you'll often find me exploring the latest advancements in frontend development, attending tech meetups, or contributing to open-source projects. I'm a firm believer in the power of community and collaboration, and I'm always eager to share my knowledge and learn from others in the ever-evolving world of technology. {"\n"} {"\n"}

In summary, I'm a frontend developer with a passion for creating elegant solutions that make a difference. If you're looking for someone who can turn your ideas into reality and elevate your digital presence to the next level, I'd love to connect and discuss how we can bring your vision to life.
        </Text>
        <Image style={{width:400,height:400,left:100, top:-2000}} source={require('../assets/Design.png')}/>
      </View>
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  content: {
    padding: 10,

    // flex: 0.1,
    zIndex: 1,
    backgroundColor: "#0F1624",
    gap: 5,
  },

  section: {
    marginBottom: 20,
    // flex:0.5
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center'
  },
  text: {
    fontSize: 25,
    color: "#ffff",
  },
});

export default About;
