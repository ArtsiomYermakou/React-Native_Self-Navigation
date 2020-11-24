import {Text} from "react-native";
import React from "react";
import styled from "styled-components/native";

type PostScreenPropsType = {
    navigation: any
    route: any
}

export const PostScreen = (props: PostScreenPropsType) => {

    const {postId} = props.route.params;

    return (
        <Center>
            <Text>
                Post: {postId}
            </Text>
        </Center>
    )
}

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`