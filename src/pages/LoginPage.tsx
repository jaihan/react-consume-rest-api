import React from "react";
import { Container } from "semantic-ui-react";
import LoginFrom from "../components/login/LoginFrom";

function LoginPage() {
  return (
    <Container style={{ margin: "5em" }}>
      <LoginFrom />
    </Container>
  );
}

export default LoginPage;
