import { Schema, model, models } from "mongoose";
const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "prompt can't be empty"],
  },
  tag: {
    type: String,
    required: [true, "tag can't be empty"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
