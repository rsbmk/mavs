export type Like = {
  id: string;
  userId: string;
  characterId: number;
  state: boolean;
  createAt: Date;
  updateAt: Date;
  deleteAt: Date | null;
};

export type CreateLikeDTO = Pick<Like, "characterId">;
export type FindFilter = Partial<Pick<Like, "characterId">>;
