import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Prompts to use AI tools at their very best.</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool to 
        <strong> create and share creative prompts.</strong>
      </p>
      <p className="desc text-center">
        Just Sign-in and create a prompt with the appropriate hashtag in the
        respective section. Search bar coming up soon! Scroll down for demo prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
