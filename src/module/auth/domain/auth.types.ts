export type Session = {
  token: string;
  username: string;
  id: string;
};

export type LogInCredentials = {
  username: string;
  password: string;
};

export type SignUpCredentials = {
  name: string;
  password: string;
  username: string;
};

export type User = {
  characters: number[];
  createAt: string;
  deleteAt: string | null;
  id: string;
  name: string;
  state: boolean;
  updateAt: string;
  username: string;
};
