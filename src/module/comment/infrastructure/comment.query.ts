import { QUERY_KEYS } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { findCommentsByCharacer } from "./comment.repository";

/**
 * React query hook to find comments by character id.
 *
 * @param {string} [characterId] - The id of the character.
 * @returns {UseQueryResult<Comment[], unknown>} The result of the query.
 */
export function useFindCommentByCharacter(characterId?: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.COMMENTS_BY_CHARACTER, characterId],
    enabled: Boolean(characterId),
    queryFn: () => findCommentsByCharacer(characterId!),
  });
}
