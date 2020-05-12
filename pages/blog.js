import Link from "next/link";
import Layout from "../components/layout";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="angular-post" title="Angular" />
      <PostLink slug="vuejs-post" title="Vuejs" />
    </ul>
  </Layout>
);

export default Blog;
