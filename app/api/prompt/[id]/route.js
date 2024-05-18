import Prompt from "@models/prompt";
import connectToDB from "@utils/database";
// GET

export const GET = async (req, { params }) => {
  console.log(params);
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id);
    if (!prompt) return new Response("Prompt not exists", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response("Fail to GET prompt", { status: 500 });
  }
};
// PATCH
export const PATCH = async (req, { params }) => {
  try {
    console.log(params);
    await connectToDB();
    const { prompt, tag } = await req.json();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("Prompt not exists", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (err) {
    return new Response("Fail to GET prompt", { status: 500 });
  }
};
// DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);
    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (err) {
    return new Response("Fail to GET prompt", { status: 500 });
  }
};
