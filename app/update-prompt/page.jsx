"use client";
import { Suspense, useEffect, useState } from "react";
import Form from "@components/Form";
import { useSearchParams, useRouter } from "next/navigation";

const Page = () => {
  return (
    <Suspense>
      <EditPrompt />
    </Suspense>
  );
};

const EditPrompt = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const promptId = searchParam.get("id");
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);

      if (!response.ok) return;
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!promptId) return alert("Prompt Id not found!");
    try {
      setSubmitting(true);
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify(post),
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
      type="edit"
      submitting={submitting}
      post={post}
      setPost={setPost}
      handleSubmit={handleEdit}
    />
  );
};

export default Page;
