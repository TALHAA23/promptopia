import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="w-full flex flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className=" max-md:hidden" />{" "}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolore
        culpa repellendus suscipit optio ea! Omnis, cum, asperiores impedit
        voluptatibus dolorem id, at suscipit illum ipsam quaerat excepturi. Quo,
        modi.
      </p>
      <Feed />
    </section>
  );
};

export default page;
