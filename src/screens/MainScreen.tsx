import {Button, Text} from "react-native";
import React from "react";
import styled from "styled-components/native";

type MainScreenPropsType = {
    navigation: any
}

export const MainScreen: React.FC<MainScreenPropsType> = ({navigation}) => {

    const goToPost = () => {
        navigation.navigate("PostScreen")
    }

    return (
        <Center>
            <Text>
                MainScreen
            </Text>
            <Button title={"Go to post"} onPress={goToPost}/>
        </Center>
    )
}

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`