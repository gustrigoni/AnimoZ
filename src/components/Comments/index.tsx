import React from 'react';

import {
  CommentsRow,
  CommentContainer,
  Comment,
  AvatarImg,
  Text
} from './styles';

interface Props {
  key: number;
  id: number;
  avatar: string;
  timeAgo: string;
  username: string;
  text: string;
}

export function Comments(props: Props) {
  return (
    <CommentsRow>
      <CommentContainer>
        <AvatarImg src={props.avatar} />
        <Comment>
          <Text name={true}>{props.username}</Text>
          <Text date={true}>{props.timeAgo}</Text>
          <Text description={true}>{props.text}</Text>
        </Comment>
      </CommentContainer>
    </CommentsRow>
  )
}