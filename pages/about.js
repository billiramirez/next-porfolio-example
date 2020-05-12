import Layout from "../components/layout";
import { Component } from "react";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/billiramirez");
    const data = await res.json();
    return { user: data };
  }

  render() {
    const { user } = this.props;
    return (
      <Layout title="About us">
        <p> {user.name}</p>
        <img src={user.avatar_url} alt="Me" height="200px" />
      </Layout>
    );
  }
}
