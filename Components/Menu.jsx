import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemPress = (menuItem) => {
    console.log("Menu item pressed:", menuItem);
    // Navigate based on the menu item pressed
    switch (menuItem) {
      case "Home":
        navigation.navigate("Home");
        break;
      case "About":
        navigation.navigate("Know Me");
        break;
      case "Skills":
        navigation.navigate("Ability");
        break;
      case "Projects":
        navigation.navigate("My Project");
        break;
      case "Contact":
        navigation.navigate("Reach Me");
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Ionicons
            name={menuOpen ? "close-outline" : "menu-outline"}
            size={30}
            color="red"
          />
        </TouchableOpacity>

        {menuOpen && (
          <View style={[styles.menu, styles.menuOpen]}>
            <Pressable
              onPress={() => handleMenuItemPress("Home")}
              style={[styles.menuItem, styles.pointerCursor]}
            >
              <Text style={styles.menuItemText}>Home</Text>
            </Pressable>
            <Pressable
              onPress={() => handleMenuItemPress("About")}
              style={[styles.menuItem, styles.pointerCursor]}
            >
              <Text style={styles.menuItemText}>About</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => handleMenuItemPress("Skills")}
              style={[styles.menuItem, styles.pointerCursor]}
            >
              <Text style={styles.menuItemText}>Skills</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleMenuItemPress("Projects")}
              style={[styles.menuItem, styles.pointerCursor]}
            >
              <Text style={styles.menuItemText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleMenuItemPress("Contact")}
              style={[styles.menuItem, styles.pointerCursor]}
            >
              <Text style={styles.menuItemText}>Contact</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = {
  menuButton: {
    position: "absolute",
    top: -30,
    right: 5,
    zIndex: 9999,
  },
  menu: {
    position: "absolute",
    top: 20,
    right: 50,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,

    zIndex: 1,
    width: 90,
    height: 170,
  },
  menuOpen: {
    zIndex: 2,
  },
  menuItem: {
    marginBottom: 10,
    cursor: "pointer", // Apply pointer cursor to all menu items
    zIndex: 9999,
  },
  menuItemText: {
    fontSize: 18,
    color: "red",
  },
};

export default Menu;
