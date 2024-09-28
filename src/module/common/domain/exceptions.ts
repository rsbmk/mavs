type ExceptionType = "error" | "warning" | "info" | "success";

export class Exception extends Error {
  type: ExceptionType;
  constructor(type: ExceptionType, message: string) {
    super(message);
    this.type = type;
  }
}
