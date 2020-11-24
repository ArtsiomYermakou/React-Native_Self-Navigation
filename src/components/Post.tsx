import React from "react";
import styled from "styled-components/native";
import {DATAType} from "../data";

type PostItemPropsType = {
    post: DATAType
    onOpen: (post: DATAType) => void
}

export const PostItem: React.FC<PostItemPropsType> = ({post, onOpen}) => {
    return (
        <Post activeOpacity={0.7} onPress={() => onOpen(post)}>
            <Image source={{uri: post.img}}>
                <TextWrap>
                    <Title>{new Date(post.date).toLocaleDateString()}</Title>
                </TextWrap>
            </Image>
        </Post>
    )
}

const Post = styled.TouchableOpacity`
  margin-bottom: 15px;
  overflow: hidden;
`
const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`
const TextWrap = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 0;
  align-items: center;
  width: 100%;
`
const Title = styled.Text`
  color: #fff;
`