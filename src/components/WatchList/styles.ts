import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
`;

export const Title = styled.h2`
  color: #666;
  font-weight: bold;
  font-size: 2rem;
`;

export const Movies = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  overflow: auto;
  padding-bottom: 5px;
  margin-bottom: 100px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(50,50,50);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(255, 47, 47);
  }

`;

export const Movie = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  width: 19vw;
  height: 28vh;
  cursor: pointer;
  margin-right: 10px;
  &:last-child {
    margin: 0;
  }
`;

export const Poster = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 18vw;
  height: 90%;
  &:hover {
    width: 19vw;
    height: 92%;
    z-index: 1;
    filter: drop-shadow(0px 0px 5px #000);
  }
`;

export const Stars = styled.div`
  height: 20px;
  overflow: hidden;
`;

export const About = styled.div`
  width: 100%;
  padding: 15px;
  bottom: 0;
  position: absolute;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Name = styled.h2`
  width: 95%;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;