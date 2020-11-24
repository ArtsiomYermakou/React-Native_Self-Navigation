import {Text} from "react-native";
import React from "react";
import styled from "styled-components/native";

export const PostScreen = () => {
    return (
        <Center>
            <Text>
                PostScreen
            </Text>
        </Center>
    )
}

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`