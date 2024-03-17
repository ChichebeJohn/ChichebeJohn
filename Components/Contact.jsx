import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Style,
  Linking,
  StyleSheet,
  ScrollView
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Menu from "./Menu";

const openLinkedIn = () => {
  Linking.openURL("https://www.linkedin.com/in/your-linkedin-profile/");
};

const openWhatsApp = () => {
  Linking.openURL("https://wa.link/hdxjmm");
};

const openGitHub = () => {
  Linking.openURL("https://github.com/your-github-profile/");
};

const Contact = () => {
  return (
    <ScrollView style={{backgroundColor:'#0F1624', flex:1}}>

      
      <View style={{ marginBottom: 20, gap: 20 , marginTop:50}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
            color: "white",
          }}
        >
          Contact
        </Text>
        <TouchableOpacity onPress={openLinkedIn}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{
              borderRadius: 5,
              width: 100,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#1CA8C8",
                marginBottom: -2,
              }}
            >
              . . LinkedIn
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={openGitHub}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{
              borderRadius: 5,
              width: 100,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginBottom: -2,
                textAlign:'center'
              }}
            >
                     .GitHub
            </Text>
            
          </LinearGradient>
        </TouchableOpacity>
        <Image style={{height:50, width:50, marginRight:10, top:-60, left:-10}} source={require('../assets/Github.png')}/>
        <Image style={{height:25, width:25, marginRight:10, top:-168, left:2}} source={require('../assets/Linkedin.png')}/>
        <Text style={{ fontSize: 16, color: "#ffff" }}>
          Email: chichebenmesoma@gmail.chichebenmesoma
        </Text>
        <Text style={{ fontSize: 16, color: "#ffff" }}>Phone: 09169357395</Text>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Image
            style={{ height: 51, width: 51, marginRight: 5 }}
            source={require("../assets/whatsapp.png")}
          />

          
          <Button
            title="Click To Message me on Whatsapp "
            onPress={openWhatsApp}
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;
