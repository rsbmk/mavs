import { isAxiosError } from "axios";
import { toast } from "react-toastify";

import { Exception } from "@/module/common/domain/exceptions";

export function handleError(error: unknown, message: string) {
  if (error instanceof Exception) return toast.error(error.message);
  if (isAxiosError(error)) message = error.response?.data.message;
  toast.error(message);
  return message;
}
