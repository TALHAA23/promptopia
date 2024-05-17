import Link from "next/link";
import React from "react";

const Form = ({ type, submitting, post, setPost, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left blue_gradient">{type} post</h1>
      <p className="desc text-left max-w-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error tempore
        atque corrupti rem doloremque cumque culpa provident unde libero ut
        repellendus repudiandae.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {" "}
            Your AI-Prompt{" "}
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) =>
              setPost((prevPost) => ({ ...prevPost, prompt: e.target.value }))
            }
            placeholder="write your prompt here"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {" "}
            Tag <span className="text-normal">
              (#webdev, #prompt, #ideas)
            </span>{" "}
          </span>
          <input
            value={post.tag}
            onChange={(e) =>
              setPost((prevPost) => ({ ...prevPost, tag: e.target.value }))
            }
            required
            placeholder="#tag"
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : "Create"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
