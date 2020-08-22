import React from "react";
import { Menu } from "semantic-ui-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RemoveItem } from "../storage/LocalStorage";

type LoginFormProps = {
  history: any;
};
type MyState = {
  activeItem: string;
};

type MyProps = LoginFormProps & RouteComponentProps;

class MenuForm extends React.Component<MyProps, MyState> {
  state: MyState = {
    activeItem: "user",
  };

  handleItemClick = (e: any, { name }: any) => {
    this.setState({ activeItem: name });
    this.renderSwitch(name);
  };

  renderSwitch(param: any) {
    switch (param) {
      case "user":
        return this.props.history.push("/user");
      case "post":
        return this.props.history.push("/post");
      case "category":
        return this.props.history.push("/category");
      case "logout":
        RemoveItem("Authorization");
        return this.props.history.push("/");
      default:
        return;
    }
  }

  render() {
    return (
      <Menu widths={4}>
        <Menu.Item name="user" onClick={this.handleItemClick} />
        <Menu.Item name="post" onClick={this.handleItemClick} />
        <Menu.Item name="category" onClick={this.handleItemClick} />
        <Menu.Item name="logout" onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default withRouter(MenuForm);
