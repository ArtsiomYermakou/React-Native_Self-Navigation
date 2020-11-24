import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {THEME} from "../theme";
import {Platform} from "react-native";

const Stack = createStackNavigator();

export function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"MainScreen"}
                             screenOptions={{
                                 headerStyle: {backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"},
                                 headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
                             }}>
                <Stack.Screen name="MainScreen"
                              component={MainScreen}
                              options={{title: "My blog"}}
                />
                <Stack.Screen name="PostScreen"
                              component={PostScreen}
                              options={{
                                  title: "Post", headerStyle: {
                                      backgroundColor: "green"
                                  }, headerTintColor: "#fff"
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
