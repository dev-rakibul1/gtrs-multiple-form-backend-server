import { Server } from "http";
import mongoose from "mongoose";
import config from "../config/config";
import app from "../index";

let server: Server;
const databaseConnect = async () => {
  try {
    await mongoose.connect(config.database_local_url as string);
    console.info("Database is connected!");

    server = app.listen(config.port, () => {
      console.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error("Fail to DB connected!");
  }
};

export default databaseConnect;
