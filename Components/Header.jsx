import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from './Menu'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <View style={styles.header}>

    <View style={styles.logoView}>
  
    <Image style={styles.logo} source={require("../assets/Nmesoma.png")} />
    </View>

    <View style={styles.textView}>
   
    <Text style={styles.headerText}>Front-End Developer From Nigeria</Text>
   
    <Image style={styles.flag} source={require("../assets/Nigeria.png")} />
    </View>
<View>
    
    </View>
    
    
  
   
     
  </View>
  )
}


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: "#002853",
    height:80,
    
    gap:40
  },
  logoView: {
    flex:0.80
  },

  logo: {
    width: 55,

    height: 55,
    borderRadius: 35,
    marginRight:-100
    },

    textView:{
      flex:9.434,
      flexDirection:'row',
      gap:2,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      marginRight:'auto'
    },
  
  
    headerText: {
      fontWeight: "bold",
      fontSize:20,
      color: "#fff",
      
      
    },
    flag: {
      width: 25,
      height: 15,
      marginTop:5
  
      
    },
})

export default Header