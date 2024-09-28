export type Response<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type Session = {
  token: string;
  username: string;
  id: string;
};

export type Credentials = {
  username: string;
  password: string;
};
