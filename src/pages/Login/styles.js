import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f203b;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div > * {
    margin: 5px;
  }
`;
