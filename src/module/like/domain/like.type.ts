export type Like = {
  id: string;
  userId: string;
  characterId: number;
  state: boolean;
  createAt: Date;
  updateAt: Date;
  deleteAt: Date | null;
  total?: number;
};

export type CreateLikeDTO = Pick<Like, "characterId">;
export type DeleteLikeDTO = Partial<Pick<Like, "id">>;

export type LikeUser = { like: Like; total: number };
