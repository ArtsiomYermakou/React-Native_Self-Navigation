import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"MainScreen"}>
                <Stack.Screen name="MainScreen" component={MainScreen}/>
                <Stack.Screen name="PostScreen" component={PostScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
