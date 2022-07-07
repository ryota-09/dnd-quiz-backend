export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type JwtPayload = {
  email: string;
  sub: string;
};
