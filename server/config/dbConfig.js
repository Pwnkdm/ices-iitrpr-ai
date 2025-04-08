import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI
      //   {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    );
    console.log("DB connected Successfully");
  } catch (err) {
    console.log("Error in connection", err);
    process.exit(1); // Optional: Exit the process on connection failure
  }
};

export default connectDB;
