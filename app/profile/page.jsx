"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user?.id}/posts`);
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

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfrim = confirm("Are you sure to delete the prompt?");
    if (!hasConfrim) return;
    try {
      await fetch(`/api/prompt/${post._id}`, {
        method: "DELETE",
      });
      const filteredPost = posts.filter((item) => item._id !== post._id);
      setPosts(filteredPost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Profile
      name="my"
      desc="welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
