"use client";
import { useState } from "react";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({ ...post, userId: session.user.id }),
      });
      if (response.ok) router.push("/");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="create"
      submitting={submitting}
      post={post}
      setPost={setPost}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreatePrompt;
