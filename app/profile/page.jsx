"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log(session?.user);
        const response = await fetch(
          `/api/users/6644d723bd8997cd225cee24/posts`
        );
        console.log(response);
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

  return <div>MyProfile</div>;
};

export default MyProfile;
