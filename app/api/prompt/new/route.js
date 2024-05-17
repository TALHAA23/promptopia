import Prompt from "@models/prompt";

export const POST = async (req) => {
  try {
    const { userId, prompt, tag } = await req.json();
    const newPrompt = await Prompt.create({ creator: userId, prompt, tag });
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err) {
    return new Response("Faild to create a new prompt", { status: 500 });
  }
};
