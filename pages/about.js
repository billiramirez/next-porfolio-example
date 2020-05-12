import { Component } from "react";
import Layout from "../components/layout";
import ErrorPage from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/billiramirez");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <ErrorPage statusCode={statusCode} />;
    }
    return (
      <Layout title="About us">
        <h3> {user.name}</h3>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt="Me" height="200px" />
      </Layout>
    );
  }
}
