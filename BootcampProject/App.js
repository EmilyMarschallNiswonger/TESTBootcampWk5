import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Alexa's profile"
        onPress={() => navigation.navigate("AlexaProfile", { name: "Jane" })}
      />
      <Button
        title="Go to Alexis's profile"
        onPress={() => navigation.navigate("AlexisProfile", { name: "Jane" })}
      />
      <Button
        title="Go to Kaitlins's profile"
        onPress={() => navigation.navigate("KaitlinProfile", { name: "Jane" })}
      />
      <Button
        title="Go to Luis's profile"
        onPress={() => navigation.navigate("LuisProfile", { name: "Jane" })}
      />
      <Button
        title="Go to Nola's profile"
        onPress={() => navigation.navigate("NolaProfile", { name: "Jane" })}
      />
      <Button
        title="Go to Verania's profile"
        onPress={() => navigation.navigate("VeraniaProfile", { name: "Jane" })}
      />
    </View>
  );
};

const AlexaProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

const AlexisProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

const KaitlinProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

const LuisProfileScreen = ({ navigation, route }) => {
  return ( 
  <View style={luisstyles.container}>
    <Text style={luisstyles.wcolor}>This is my profile</Text>
    <Text style={luisstyles.wcolor}>:3</Text>
  </View>
  );
};

const NolaStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A3E25',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "50px"
  },

  text1: {
    fontSize: 75,
    fontWeight: '800',
    fontFamily: 'Futura',
    color: '#7AB083'
  },

  text2: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Times New Roman',
    color: '#517557',
    textAlign: 'center',
  },

  image: {
      width: '67%',
      height: '45%',
      
  },


});


const NolaProfileScreen = ({ navigation, route }) => {
  const napImage = {uri: "https://thumb.ac-illust.com/c0/c0bdb4834d2131f8c0b05641208f6d6b_t.jpeg"}
  return (
    <View style ={NolaStyle.container}>
      <Text style = {NolaStyle.text1}>Hello!!</Text>
      <Text style = {NolaStyle.text2}> I am going to go home and take a nap</Text>
      <Image source = {napImage} style = {NolaStyle.image}></Image>
    </View>
  
  );
};

const VeraniaProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};
const addMe = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
}; 


//imported// 

const luisstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'forestgreen', 
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  wcolor: {
    color: 'ghostwhite',
    fontFamily: 'Trebuchet MS', 
    fontWeight: 'bold',
    fontSize: 30, 
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="AlexaProfile" component={AlexaProfileScreen} />
        <Stack.Screen name="AlexisProfile" component={AlexisProfileScreen} />
        <Stack.Screen name="KaitlinProfile" component={KaitlinProfileScreen} />
        <Stack.Screen name="LuisProfile" component={LuisProfileScreen} />
        <Stack.Screen name="NolaProfile" component={NolaProfileScreen} />
        <Stack.Screen name="VeraniaProfile" component={VeraniaProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
