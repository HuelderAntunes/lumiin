import styled from "styled-components";
import ExpandButton from "../components/ExpandButton";

export const Page = styled.div`
  margin-left: ${({ collapse }) => (collapse ? "70px" : "250px")};
  background-color: #fafafa;
  height: 100%;
`;
export const Profile = styled.div`
  position: fixed;
  float: right;
  right: 0;
  padding: 18px;
`;
