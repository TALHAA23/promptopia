"use client";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptListing = ({ data, handleTagClick }) => {
  console.log(data);
  return (
    <div className="flex gap-2 m-5 flex-wrap">
      {data?.map((post) => (
        <PromptCard key={post._id} post={post} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/prompt");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="search"
          placeholder="search by tag or username"
          required
          className="search_input peer"
        />
      </form>
      <PromptListing data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
