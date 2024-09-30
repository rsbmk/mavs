import { Exception } from "@/module/common/domain/exceptions";

export class InvalidLikeException extends Exception {
  constructor() {
    super("warning", "Invalid data for like");
  }
}
