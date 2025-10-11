import {setupWorker} from "msw/browser";
import {boardsHandlers} from "./handlers/boards";

export const worker = setupWorker(...boardsHandlers);
