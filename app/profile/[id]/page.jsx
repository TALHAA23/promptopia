"use client";
import Profile from "@components/Profile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const OthersProfile = () => {
  const [posts, setPosts] = useState([]);
  const { id: userId } = useParams();
  useEffect(() => {
    const getUserPrompts = async () => {
      const response = await fetch(`/api/prompt/user/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    };
    if (userId) getUserPrompts();
  }, []);

  return (
    <Profile
      name={posts.length && posts[0].creator.username}
      desc={`welcome to ${
        posts.length ? posts[0].creator.username : "user"
      } profile where you can see all there prompts`}
      data={posts}
    />
  );
};

export default OthersProfile;
