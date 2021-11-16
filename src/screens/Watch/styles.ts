import styled from "styled-components";

import background from './../../assets/images/naruto_bg.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #0b0b0b;
`;

export const Cover = styled.div`
  width: 100%;
  height: 600px;
  display: fixed;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -80px;
  background-position-x: center;
  margin-bottom: -130px;
`;

export const LinearCover = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0), #0b0b0b), linear-gradient(rgba(0, 0, 0, 0) 5%, #0b0b0b);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  width: 960px;
  margin-bottom: 25px;
`;

export const VideoRow = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Video = styled.div`
  box-shadow: 0px 0px 15px #000;
`;

export const About = styled.div`
  padding: 20px;
  margin-top: 30px;
  background-color: rgba(60,60,60,0.2);
  border-radius: 10px;
`;

export const MovieRow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const Movie = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const Name = styled.h2`
  margin: 0;
  color: #fff;
  padding-right: 15px;
`;

export const NextOne = styled.a`
  color: #666;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  &:hover {
    color: rgba(241, 181, 49, 0.8);
    text-shadow: 0px 0px 1px #000;
  }
`;

export const Comments = styled.div``;

export const Text = styled.div``;

export const CommentsRow = styled.div``;

export const Comment = styled.div``;

export const Avatar = styled.div``;

export const AvatarImg = styled.img.attrs({
  src: 'https://media3.giphy.com/media/4ilFRqgbzbx4c/giphy.gif'
})``;
