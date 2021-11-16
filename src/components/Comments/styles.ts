import styled, { css } from "styled-components";

interface TextSpan {
  name?: boolean;
  date?: boolean;
  description?: boolean;
}

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

export const Text = styled.span`
  ${(props: TextSpan) => {
    if (props.name) {
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
  }};
`;