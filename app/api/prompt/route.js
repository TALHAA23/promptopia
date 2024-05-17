import Prompt from "@models/prompt";
import connectToDB from "@utils/database";
export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts));
  } catch (err) {
    return new Response("Fail to fetch prompts", { status: 500 });
  }
};
