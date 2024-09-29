import { Exception } from "../../common/domain/exceptions";

export class InvalidLoginCredentialsException extends Exception {
  constructor() {
    super("warning", "Invalid credentials for login");
  }
}

export class InvalidSignUpCredentialsException extends Exception {
  constructor() {
    super("warning", "Invalid credentials for create user");
  }
}
