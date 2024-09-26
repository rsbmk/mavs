import { isAxiosError } from 'axios';

import { HTTP_MARVERL } from "@/lib/http";
import { ResponseCharacter } from '../domain/character.type';

type FindAllCharacterProps = {
  limit?: number;
  page?: number;
  nameStartsWith?: string
  comics?: string
}

export async function findAllCharacter({ limit = 50, page = 1, comics, nameStartsWith }: FindAllCharacterProps) {
  try {
    const { data } = await HTTP_MARVERL.get<ResponseCharacter>('/characters', {
      params: {
        ...(nameStartsWith && { nameStartsWith }),
        ...(comics && { comics }),
        limit,
        offset: limit * page,
        orderBy: '-modified'
      }
    });
    return data.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error("There was an error in obtaining the character data");
  }
}