export type Comment = {
  characterId: number;
  comment: string;
  id: string;
  userId: string;
  user: {
    id: string;
    username: string;
  };
  createAt: Date;
  deleteAt: Date | null;
  state: boolean;
  updateAt: Date;
};

export type CreateComment = {
  characterId: number;
  comment: string;
};
