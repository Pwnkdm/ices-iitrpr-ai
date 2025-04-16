import mongoose from "mongoose";
import Admin from "../model/adminModel.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const createSuperAdmin = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);

    // Check if superadmin already exists
    const superAdminExists = await Admin.findOne({ role: "supremeadmin" });

    if (superAdminExists) {
      console.log("supremeadmin already exists");
      mongoose.disconnect();
      return;
    }

    // Create superadmin with details from environment variables or cli arguments
    const email = process.argv[2] || process.env.SUPERADMIN_EMAIL;
    const password = process.argv[3] || process.env.SUPERADMIN_PASSWORD;
    const name =
      process.argv[4] || process.env.SUPERADMIN_NAME || "Supreme Admin";

    if (!email || !password) {
      console.error(
        "Email and password required. Use: node createSuperAdmin.js email password [name]"
      );
      mongoose.disconnect();
      return;
    }

    const superAdmin = await Admin.create({
      name,
      email,
      password,
      role: "supremeadmin",
    });

    console.log(`supremeadmin created successfully: ${superAdmin.email}`);
    mongoose.disconnect();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    mongoose.disconnect();
  }
};

createSuperAdmin();
