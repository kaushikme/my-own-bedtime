import * as React from 'react';
import { Text, View,KeyboardAvoidingView,StyleSheet,TouchableWithoutFeedback,Platform,Keyboard,TextInput,Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ReadScreen() {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <Text style={styles.header}>Read stories</Text>
        <TextInput placeholder="Username" style={styles.textInput} />
        <View style={styles.btnContainer}>
          <Button title="Submit" onPress={() => null} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}

function WriteScreen() {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <Text style={styles.header}>Write your stories</Text>
        <TextInput placeholder="Username" style={styles.textInput} />
        <View style={styles.btnContainer}>
          <Button title="Submit" onPress={() => null} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e4512e',
      }}
    >
      <Tab.Screen
        name="ReadScreen"
        component={ReadScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
   
      <Tab.Screen
        name="WriteScreen"
        component={WriteScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor:'lavender',
  },
  header: {
    fontSize: 36,
    marginBottom: 148
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
