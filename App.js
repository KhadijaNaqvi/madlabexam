import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Universities from './src/Universities';
import Login from "./src/login";
import UniversityData from "./src/UniversiyData";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="login"
          component={Login}
          options={{headerShown: false, tabBarStyle: {
            display: "none",},
            tabBarButton: () => null,}}
        />
        <Tab.Screen
          name="university"
          component={Universities}
          options={{headerShown: false, tabBarStyle: {
            display: "none",},
            tabBarButton: () => null,}}
        />
        <Tab.Screen
          name="Data"
          component={UniversityData}
          options={{headerShown: false, tabBarStyle: {
            display: "none",},
            tabBarButton: () => null,}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
