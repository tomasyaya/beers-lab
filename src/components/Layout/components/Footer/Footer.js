import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../router";
import styled from "styled-components";

const Container = styled.div``;

function Footer() {
  return (
    <Container>
      <Link to={ROUTES.root}>Home</Link>
    </Container>
  );
}

export default Footer;
