import React from "react";
import { Redirect } from "react-router-dom";
import { getItem } from "../storage/LocalStorage";

type IStates = {
  loading: boolean;
  redirect: boolean;
};

export default function WithAuth(ComponentToProtect: any) {
  return class extends React.Component<any, IStates> {
    constructor(props: any) {
      super(props);
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      const isAuthorization = getItem("Authorization") !== null ? false : true;
      if (isAuthorization) {
        this.setState({ loading: false, redirect: true });
      } else {
        this.setState({ loading: false, redirect: false });
      }
    }

    render() {
      const { loading, redirect }: IStates = this.state;
      console.log(this.state);

      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  };
}
