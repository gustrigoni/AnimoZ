import React from 'react';

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
  Comments as CommentsContainer,
  Text,
} from './styles';

import { comments } from '../../helpers/comments';
import { Comments } from '../../components/Comments';
interface CommentInterface {
  id: number;
  avatar: string;
  timeAgo: string;
  username: string;
  text: string;
}

export function Watch() {
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
                <CommentsContainer>
                  <Text>Comentários</Text>
                  {comments.map((comment: CommentInterface) => {
                    return <Comments
                      key={comment.id}
                      {...comment}
                    />
                  })}
                </CommentsContainer>
              </About>
            </VideoRow>
          </Row>
        </LinearCover>
      </Cover>
    </Container>
  );
}