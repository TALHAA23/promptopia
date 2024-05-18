"use client";
import { useEffect, useRef, useState } from "react";
import PromptCard from "./PromptCard";

const PromptListing = ({ data, handleTagClick }) => {
  return (
    <div className="flex gap-2 m-5 flex-wrap">
      {data?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const timeoutId = useRef();
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const regEx = new RegExp(searchText, "i");
      const filteredPost = posts?.filter(
        (post) =>
          regEx.test(post.creator.username) ||
          regEx.test(post.tag) ||
          regEx.test(post.prompt)
      );
      setFilteredPost(filteredPost);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  const handleTagClick = (tagText) => {
    setSearchText(tagText);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="search"
          placeholder="search by tag or username"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className="search_input peer"
        />
      </form>
      <PromptListing
        data={filteredPost.length ? filteredPost : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
