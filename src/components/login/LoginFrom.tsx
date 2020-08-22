import React from "react";
import { Button, Form } from "semantic-ui-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import AuthenticateService from "../../services/AuthenticateService";
import { setItem } from "../storage/LocalStorage";

type LoginFormProps = {
  history: any;
};
type MyState = {
  userName: string;
  password: string;
};

type MyProps = LoginFormProps & RouteComponentProps;

class LoginForm extends React.Component<MyProps, MyState> {
  state: MyState = {
    userName: "",
    password: "",
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = e.currentTarget;
    this.setState({ [name]: value } as Pick<any, any>);
  };

  loginAndContinue = async () => {
    try {
      const { userName, password }: MyState = this.state;
      const data = {
        username: userName,
        password: password,
      };
      const res = await AuthenticateService.signin(data);
      setItem("Authorization", res.data.access_token);
      this.props.history.push("/user");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { userName, password }: MyState = this.state;
    return (
      <Form onSubmit={this.loginAndContinue}>
        <Form.Field required>
          <label>User Name</label>
          <input
            name="userName"
            onChange={this.handleChange}
            value={userName}
            placeholder="User Name"
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default withRouter(LoginForm);
