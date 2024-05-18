import Prompt from "@models/prompt";
import connectToDB from "@utils/database";
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    if (!prompt) return new Response("Prompt not exists", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response("Fail to GET prompt", { status: 500 });
  }
};
