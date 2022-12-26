import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { InputText } from "./component";
import {
  DrawerContent,
  FilterScreen,
  AreaScreen,
  RegisterAccountScreen,
  ListUserScreen,
  ListApplicationDorm
} from "./Screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Navigation from "./Navigation/HomeNavigation";
import TabStackScreen from "./Navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./Navigation";
import { Provider } from "react-redux";
import store from "./store";
import FlashMessage from "react-native-flash-message";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
              headerShown : false
            }}
            drawerContent={props => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
            </Drawer.Navigator>
            <FlashMessage position="top" />
            <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
