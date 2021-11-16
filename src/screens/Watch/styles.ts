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
  align-self: center;
  width: 100%;
  padding-bottom: 20px;

`;

export const VideoRow = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 90%;
  max-width: 58vw;
  height: 58vh;
`;

export const Video = styled.div`
  box-shadow: 0vh 0vh 1.5vh #000;
`;

export const About = styled.div`
  padding: 1vw;
  margin-top: 1.5vw;
  background-color: #161515;
  border-radius: 0.5vw;
  width: 100%;
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