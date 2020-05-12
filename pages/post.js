import Layout from "../components/layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>loremgisafasfasfas</p>
  </Layout>
);

export default withRouter(Post);
