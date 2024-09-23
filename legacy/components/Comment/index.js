import "./comment.css";

import { CharacterButtons } from "../ButtonLike";
import { CommentsSection } from "../CommentSection";
import { NewCommentForm } from "../newCommentForm";

export function Comment({ idCharacter }) {
  return (
    <section className="wrapComment">
      <CharacterButtons idCharacter={idCharacter} />
      <CommentsSection idCharacter={idCharacter} />
      <NewCommentForm idCharacter={idCharacter} />
    </section>
  );
}
