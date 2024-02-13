import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, div} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Groupstyle = StyleSheet.create({ //Group Stuff
  container: {
    flex: 1,
    backgroundColor: '#16404F',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: "10px"
  },


  image: {
    width: '100%',
    height: '100%',
    borderRadius: '1pt',
    resizeMode: 'contain'
  },

  imagecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '60%',
  },

  text: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'rubik',
    color: '#EEE8D7'
  }
});

const HomeScreen = ({ navigation }) => {
  return (
    <View >
 
      <Button
        title="Go to Alexa's profile"
        onPress={() => navigation.navigate("AlexaProfile", { name: "Jane" })}
      />
      <Button
        title="Go to Alexis's profile"
        onPress={() => navigation.navigate("AlexisProfile", { name: "Jane" })}
      />
      <Button
        title=".✧⁺ Go to Kaitlins's Profile ⁺✧."
        onPress={() => navigation.navigate("KaitlinProfile", { name: "Kaitlin" })}
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

const Kaitlinstyle = StyleSheet.create({ //Kaitlin's stuff :D
  container: {
    flex: 1,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "50px"
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: '1pt',
    resizeMode: 'contain'
  },

  imagecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '60%',
  },

  Catimage: {
    width: '50%',
    height: '50%',
  },


  text: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});

const KaitlinProfileScreen = ({ navigation, route }) => {
  const [IsMouthOpen, setIsMouthOpen] = useState (false);
  const Catimage = { uri: "https://i.pinimg.com/originals/a4/53/67/a45367e27c573bc1df81f414f6d40e3f.png" }
  const OpenCatimage = { uri: "https://i.pinimg.com/originals/f9/c7/13/f9c7138852fda495d64c79954dcb3e49.png" }

  return( 
  <View style={Kaitlinstyle.container}>  
    <Text style={Kaitlinstyle.text}>♡ Welcome to Kaitlin's Profile! ♡</Text>

    <TouchableOpacity activeOpacity={1} onPress={ () => {
        setIsMouthOpen(!IsMouthOpen);
    }} style={Kaitlinstyle.imagecontainer}> 
       
     <Image source = {IsMouthOpen ? OpenCatimage : Catimage} style={Kaitlinstyle.image}>
     </Image>
    </TouchableOpacity>
  </View>
  );

};

const LuisProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

const NolaProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

const VeraniaProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

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
