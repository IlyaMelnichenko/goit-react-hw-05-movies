import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav= styled.nav`
list-style: none;
display: flex;
flex-direction: row;
gap:30px;
text-decoration: none;
`
export const Link=styled(NavLink)`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
`