import styled from "styled-components";
import { Link } from "react-router-dom";
export const Head = styled.header`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  color: black;
  font-weight: 600;
  font-family: Arial;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: green;
  padding: 8px 16px;
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
