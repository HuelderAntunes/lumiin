import styled from "styled-components";
import colors from "../../styles/colors"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};

  h3 {
    color: ${colors.primary};
  }

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
