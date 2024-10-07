export type Comment = {
  characterId: number;
  comment: string;
  createAt: Date;
  deleteAt: Date | null;
  id: string;
  state: boolean;
  updateAt: Date;
  userId: string;
};

export type CreateComment = {
  characterId: number;
  comment: string;
};
