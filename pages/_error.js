import Layout from "../components/layout";

const ErrorPage = ({ statusCode }) => (
  <Layout title="Error!!">
    <p>
      {statusCode
        ? `Could not load your data: Status Code: ${statusCode}`
        : `Could not get the page, sorry!`}
    </p>
  </Layout>
);

export default ErrorPage;
