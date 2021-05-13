import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Dean Sorie is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Dean, Dean Sorie, Sorie, web developer, Dean web developer, Sorie developer, mern stack, Dean portfolio"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Dean Sorie",
};
