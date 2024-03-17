// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutMe from './AboutMe';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skill from './Components/Skill';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={AboutMe} options={{headerShown:false}} />
        <Stack.Screen name="Reach Me" component={Contact} options={{
          title: 'Reach Out To Me',
          headerStyle: {
            backgroundColor: '#002853',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Know Me" component={About} options={{ title: 'Get To Know Me',
          headerStyle: {
            backgroundColor: '#002853',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
        <Stack.Screen name="My Project" component={Projects} options={{ title: 'What I Have Done',
          headerStyle: {
            backgroundColor: '#002853',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
        <Stack.Screen name="Ability" component={Skill} options={{ title: 'What I Can Do',
          headerStyle: {
            backgroundColor: '#002853',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;