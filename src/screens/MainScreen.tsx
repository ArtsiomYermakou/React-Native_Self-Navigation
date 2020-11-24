import React from "react";
import styled from "styled-components/native";
import {FlatList} from "react-native";
import {DATA, DATAType} from "../data";
import {PostItem} from "../components/Post";

type MainScreenPropsType = {
    navigation: any
}

export const MainScreen: React.FC<MainScreenPropsType> = ({navigation}) => {

    const openPostHandler = (post: DATAType) => {
        navigation.navigate("PostScreen", {postId: post.id, date: post.date})
    }

    return (
        <Wrapper>
            <FlatList data={DATA} keyExtractor={post => post.id.toString()}
                      renderItem={({item}) => <PostItem post={item} onOpen={openPostHandler}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
  padding: 10px;
`