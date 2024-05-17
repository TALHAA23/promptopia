import Prompt from "@models/prompt";
import connectToDB from "@utils/database";
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    console.log(">>>>>>", params);
    const prompts = await Prompt.find({ creator: params.userId }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts));
  } catch (err) {
    return new Response("Fail to fetch prompts", { status: 500 });
  }
};
