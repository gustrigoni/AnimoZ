import styled from "styled-components";
import { Button as ButtonBootstrap } from "react-bootstrap";
import TiredGoku from './../../assets/images/dbz/tired-goku.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: rgb(11, 11, 11);
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const GokuIcon = styled.img.attrs({
  src: TiredGoku
})`
 -webkit-filter: drop-shadow(0px 0px 15px rgba(255, 226, 130, 0.938));
  filter: drop-shadow(0px 0px 15px rgba(255, 226, 130, 0.938));
  width: 18vw;
  object-fit: contain;
  margin-top: 5vh;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  color: #ccc;
`;

export const Message = styled.h2`
  margin-top: 0.75vw;
  font-size: 1.6vw;
`;

export const Description = styled.p`
  font-size: 3vw;
  padding: 1.5vh; 
  text-align: center;
  border-radius: 15px;
  background-color: rgba(155, 155, 155, 0.1);
`;

export const Emoji = styled.span.attrs({
  role: "img",
  ariaLabel: "Thinking head"
})``;

export const Warning = styled.span`
  font-size: 0.8vw;
`;

export const Button = styled(ButtonBootstrap).attrs({
  variant: 'danger',
  size: 'lg',
  href: '/'
})`
  width: 100%;
  height: 30%;
  font-size: 1.8vw;
  margin-top: 20px;
`;