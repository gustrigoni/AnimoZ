import React, { useState } from 'react';

import "video-react/dist/video-react.css";

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  LoadingSpinner,
  Shortcut,
  BigPlayButton
} from 'video-react';

import {
  Container,
  Cover,
  LinearCover,
  Row,
  VideoRow,
  Video,
  About,
  MovieRow,
  Movie,
  Name,
  NextOne,
  Comments,
  Text,
  CommentsRow,
  CommentContainer,
  Comment,
  AvatarImg,
} from './styles';

import { comments } from '../../helpers/comments';

export function Watch() {

  const [rate, setRate] = useState(4);

  return (
    <Container>
      <Cover>
        <LinearCover>
          <Row>
            <VideoRow>
              <Video>
                <Player
                  fluid={true}
                  width={'50vw'}
                  height={'10vh'}
                  preload={true}
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  autoPlay={false}
                  startTime={0}
                >
                  <ControlBar autoHide={false}>
                    <ForwardControl seconds={10} order={3.2} />
                    <ReplayControl seconds={10} order={2.2} />
                  </ControlBar>
                  <BigPlayButton position="center" />
                  <Shortcut clickable={true} />
                  <LoadingSpinner />
                </Player>
              </Video>
              <About>
                <Movie>
                  <MovieRow>
                    <Name>Naruto</Name>
                  </MovieRow>
                  <NextOne>Próximo episódio</NextOne>
                </Movie>
                <Comments>
                  <Text underline={true}>Comentários</Text>
                  {comments.map(comment => {
                    return <CommentsRow>
                      <CommentContainer>
                        <AvatarImg src={comment.avatar} />
                        <Comment>
                          <Text name={true}>{comment.username}</Text>
                          <Text date={true}>{comment.timeAgo}</Text>
                          <Text description={true}>{comment.text}</Text>
                        </Comment>
                      </CommentContainer>
                    </CommentsRow>
                  })}
                </Comments>
              </About>
            </VideoRow>
          </Row>
        </LinearCover>
      </Cover>
    </Container>
  );
}