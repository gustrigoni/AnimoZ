import styled, { css } from "styled-components";

import background from './../../assets/images/naruto_bg.jpg';

interface TextSpan {
  underline?: boolean;
  name?: boolean;
  date?: boolean;
  description?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #0b0b0b;
`;

export const Cover = styled.div`
  width: 100%;
  height: 100vh;
  display: fixed;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -80px;
  background-position-x: center;
  margin-bottom: -130px;
  align-items: center;
`;

export const LinearCover = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(0, 0, 0, 0), #0b0b0b), linear-gradient(rgba(0, 0, 0, 0) 5%, #0b0b0b);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  width: 50vw;
  align-self: center; 
  margin-bottom: 1vh;
  padding-bottom: 9vh;
`;

export const VideoRow = styled.div`
  display: flex;
  flex-flow: column;
  width: 50vw;
`;

export const Video = styled.div`
  box-shadow: 0vh 0vh 1.5vh #000;
  max-width: 50vw;
  max-height: 58vh;
`;

export const About = styled.div`
  padding: 1vw;
  margin-top: 1.5vw;
  background-color: #161515;
  border-radius: 0.5vw;
  width: 50vw;
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
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h2`
  margin: 0;
  color: #fff;
  padding-right: 15px;
  font-size: 2vw;
`;

export const NextOne = styled.a`
  color: #666;
  font-weight: bold;
  font-size: 0.8vw;
  text-transform: uppercase;
  &:hover {
    color: rgba(241, 181, 49, 0.8);
    text-shadow: 0px 0px 1px #000;
  }
`;

export const Comments = styled.div`
  padding-top: 1vw;
  width: 100%;                     
`;

export const Text = styled.span`
 ${(props: TextSpan) => {
    if (props.underline) {
      return css`
        font-size: 0.8vw;
        text-transform: uppercase;
        color: #333;  
        &:after {
          content:"";
          display: block;
          width: 35px;
          border-bottom: 3px solid #222;
        }
     `;
    } else if (props.name) {
      return css`
        color: #b22222;
        text-transform: unset;
        font-size: 0.9vw;
      `;
    } else if (props.date) {
      return css`
        color: #333;
        text-transform: unset;
        font-size: 0.7vw;
      `;
    } else if (props.description) {
      return css`
        color: #666;
        text-transform: unset;
        font-size: 0.6vw;
      `;
    }
  }}
`;

export const CommentsRow = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 1vw;
`;

export const CommentContainer = styled.div`
  display: flex;
  padding-left: 0.7vw;
  flex-flow: row;
  margin-top: 2vw;
  &:first-child {
    margin: 0;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-flow: column;
  padding-left: 10px;
  padding-right: 10px;
`;

export const AvatarImg = styled.img`
  width: 3.6vw;
  height: 3.6vw;
  border-radius: 100%;
  object-fit: cover;
`;