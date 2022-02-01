import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../router";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  font-weight: ${({ isMain }) => isMain && "bold"};
`;

const Nav = styled("nav")``;

const List = styled("ul")`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

function Navbar() {
  return (
    <Nav>
      <List>
        <li>
          <StyledLink to={ROUTES.beers}>Beers</StyledLink>
        </li>
        <li>
          <StyledLink isMain={true} to={ROUTES.randomBeer}>
            Random beer
          </StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.newBeer}>New beer</StyledLink>
        </li>
      </List>
    </Nav>
  );
}

export default Navbar;
