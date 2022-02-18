import styled from "styled-components";

export const Character = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  ${(props) =>
    props.backgroundRed === true ? `background: red;` : `background: white`}
`;
