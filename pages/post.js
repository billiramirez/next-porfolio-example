import Layout from "../components/layout";

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <p>loremgisafasfasfas</p>
  </Layout>
);

export default Post;
