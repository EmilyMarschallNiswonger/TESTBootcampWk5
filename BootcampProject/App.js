import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={Homestyles.container}>
      <View style={Homestyles.button}>
        <Button
          title="Go to Alexa's profile"
          onPress={() => navigation.navigate("AlexaProfile", { name: "Jane" })}
          color="#000000"
        />
      </View>
      <View style={Homestyles.button}>
        <Button
          title="Go to Alexis's profile"
          onPress={() => navigation.navigate("AlexisProfile", { name: "Jane" })}
          color="#000000"
        />
      </View>
      <View style={Homestyles.button}>
        <Button
          title="Go to Kaitlins's profile"
          onPress={() =>
            navigation.navigate("KaitlinProfile", { name: "Jane" })
          }
          color="#000000"
        />
      </View>
      <View style={Homestyles.button}>
        <Button
          title="Go to Luis's profile"
          onPress={() => navigation.navigate("LuisProfile", { name: "Jane" })}
          color="#000000"
        />
      </View>
      <View style={Homestyles.button}>
        <Button
          title="Go to Nola's profile"
          onPress={() => navigation.navigate("NolaProfile", { name: "Jane" })}
          color="#000000"
        />
      </View>
      <View style={Homestyles.button}>
        <Button
          title="Go to Verania's profile"
          onPress={() =>
            navigation.navigate("VeraniaProfile", { name: "Jane" })
          }
          color="#000000"
        />
      </View>
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
  return <Text>This is my profile</Text>;
};

const NolaProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

const VeraniaProfileScreen = ({ navigation, route }) => {
  return <Text>This is my profile</Text>;
};

const Homestyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0C2B35",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 1,
  },

  button: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#FCF6E5",
    height: "20%",
    width: "70%",
    margin: "2%",
    borderRadius: 10,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome!" }}
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
