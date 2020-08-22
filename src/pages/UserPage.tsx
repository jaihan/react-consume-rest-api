import React from "react";
import { Container, Segment } from "semantic-ui-react";

class UserPage extends React.Component<any, any> {
  render() {
    return (
      <Container style={{ margin: "5em" }}>
        <Segment>Welcome to User page.</Segment>
      </Container>
    );
  }
}

export default UserPage;
