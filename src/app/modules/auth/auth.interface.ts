export type IAuthLoginTypes = {
  email: string;
  password: string;
};

export type IUserLoginResponse = {
  accessToken: string;
  refreshToken?: string;
  needPasswordChange: boolean | undefined;
};

export type IRefreshToken = {
  accessToken: string;
};
