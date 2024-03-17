import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import React from 'react'

const Skill = () => {
  return (
    <ScrollView style={{backgroundColor: "#0F1624",}}>
    <View style={styles.tecnologiesImageView}>
      <Image style={styles.technologiesImage} source={require("../assets/Technologies.png")} />
    </View><View style={styles.section}>
        <View style={{ gap: 10 }}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.text}>
            - React {"\n"}- React Native {"\n"}- HTML/CSS/JavaScript {"\n"}- UI/UX Design
            {"\n"}- Corel Draw {"\n"}- Data Analysis {"\n"}- Python {"\n"}- And Many More
          </Text>
        </View>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  tecnologiesImageView:{
    marginBottom:20,
    
    
 },
 technologiesImage: {
   width: 500,
   height: 500,
   resizeMode: 'contain',
   
 },
 section: {
  marginBottom: 20,
  // flex:0.5
},
sectionTitle: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 10,
  color: "white",
},
text: {
  fontSize: 25,
  color: "#ffff",
},
})

export default Skill