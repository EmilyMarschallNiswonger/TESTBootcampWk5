import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button, StyleSheet } from "react-native";
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
  return (
    <View style={alexaStyles.container}>
      <Text
        style={{
          color: "green",
          // height: 40,
          // borderColor: "pink",
          // borderWidth: 3,
          // backgroundColor: "lavenderblush",
          
        }}
      >
        {" "}
        My Profile Asf{" "}
      </Text>
    </View>
  );
};

const alexaStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "pink",
    borderWidth: 3,
    backgroundColor: "lavenderblush",
  },
});

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
