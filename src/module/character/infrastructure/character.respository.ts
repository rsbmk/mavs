import { HTTP_MARVERL } from "@/lib/http";
import { handleError } from "@/module/common/utils";
import { ResponseCharacter } from "../domain/character.type";

type FindAllCharacterProps = {
  limit?: number;
  page?: number;
  nameStartsWith?: string;
  comics?: string;
};

export async function findAllCharacter({ limit = 10, page = 0, comics, nameStartsWith }: FindAllCharacterProps) {
  try {
    const { data } = await HTTP_MARVERL.get<ResponseCharacter>("/characters", {
      params: {
        ...(nameStartsWith && { nameStartsWith }),
        ...(comics && { comics }),
        limit,
        offset: limit * page,
        orderBy: "-modified",
      },
    });
    return data.data;
  } catch (error) {
    throw handleError(error, "We have an error getting characters");
  }
}

export async function findOneCharacter(id: number) {
  try {
    const { data } = await HTTP_MARVERL.get<ResponseCharacter>(`/characters/${id}`);
    return data.data;
  } catch (error) {
    throw handleError(error, "We have an error getting character");
  }
}
