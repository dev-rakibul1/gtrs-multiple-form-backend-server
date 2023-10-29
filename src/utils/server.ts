import { Server } from 'http';
import mongoose from 'mongoose';
import config from '../config/config';
import app from '../index';

let server: Server;
const databaseConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(config.database_atlas_url as string);
    console.info('Database is connected!');

    server = app.listen(config.port, () => {
      console.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Fail to DB connected!');
  }

  process.on('unhandledRejection', error => {
    // errorLogger.log(error);
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(2);
    }
  });

  process.on('SIGTERM', () => {
    console.info('SIGTERM is received!');
    if (server) {
      server.close();
    }
  });
};

export default databaseConnect;
