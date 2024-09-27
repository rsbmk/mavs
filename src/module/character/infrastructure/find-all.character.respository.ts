import { QueryFunctionContext } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import { HTTP_MARVERL } from "@/lib/http";
import { ResponseCharacter } from "../domain/character.type";

type FindAllCharacterProps = {
  limit?: number;
  page?: number;
  nameStartsWith?: string;
  comics?: string;
};

async function findAllCharacter({ limit = 10, page = 0, comics, nameStartsWith }: FindAllCharacterProps) {
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
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error("There was an error in obtaining the character data");
  }
}

export function queryFnFindAllCharacter({ queryKey, pageParam }: QueryFunctionContext<(string | undefined)[], number>) {
  const [, nameStartsWith, comics] = queryKey;
  return findAllCharacter({ page: pageParam, comics, nameStartsWith });
}
