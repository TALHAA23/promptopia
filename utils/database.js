import mongoose from "mongoose";
const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (mongoose.connection.readyState == 1) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database!");
  } catch (err) {
    console.log(err);
  }
};
export default connectToDB;
