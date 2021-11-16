import styled from "styled-components";
import background from './../../assets/images/naruto_bg.jpg';
import logo from './../../assets/images/logo-white.png'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  background-color: #0b0b0b;
`;

export const Cover = styled.div`
  width: 100%;
  height: 600px;
  display: fixed;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -80px;
  background-position-x: center;
  margin-bottom: -130px;
`;

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle ,rgba(0,0,0,0), #0b0b0b), linear-gradient(rgba(0,0,0,0) 5%, #0b0b0b);
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  width: 25vw;
  height: 25vh;
  object-fit: contain;
  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(241, 181, 49, 0.8));
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin-bottom: 60px;
`;

export const SearchField = styled.input.attrs({
  placeholder: 'O que vamos assistir hoje?'
})`
  background-color: #fff;
  width: 60%;
  height: 80px;
  border-radius: 60px;
  border: 0;
  outline: none;
  border: 4px solid #ccc;
  padding: 30px;
  font-size: 30px;
  filter: drop-shadow(0px 0px 10px #0b0b0b);
`;

export const Videos = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  margin-bottom: 60px;
  background-color: #0b0b0b;
`;