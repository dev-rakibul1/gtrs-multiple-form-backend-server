import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT || 1000,
  database_local_url: process.env.DATABASE_LOCAL,
  database_atlas_url: process.env.DATABASE_ATLAS,
  password_salt: process.env.PASSWORD_SALT,
  jwtAccessKey: process.env.JWT_ACCESS_SECRET,
  jwtAccessExpireDate: process.env.JWT_ACCESS_SECRET_EXPIRE_IN,
  jwtRefreshKey: process.env.JWT_REFRESH_SECRET,
  jwtRefreshExpireDate: process.env.JWT_REFRESH_SECRET_EXPIRE_IN,
  env: process.env.NODE_ENV,
};
