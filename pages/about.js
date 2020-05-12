import Link from "next/link";

const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p> A javascript programmer</p>
    <img
      src="/images/javascript-logo.jpg"
      alt="javascript logo"
      height="200px"
    />
  </div>
);

export default About;
