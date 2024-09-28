import { Exception } from "../../common/domain/exceptions";

export class InvalidCredentialsException extends Exception {
  constructor() {
    super("warning", "Invalid credentials");
  }
}
