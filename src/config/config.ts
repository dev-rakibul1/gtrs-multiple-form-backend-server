import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT || 1000,
  database_local_url: process.env.DATABASE_LOCAL,
  database_atlas_url: process.env.DATABASE_ATLAS,
};
