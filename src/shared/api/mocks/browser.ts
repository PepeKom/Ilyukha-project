import { setupWorker } from "msw/browser";
import {boardsHandlers } from "./handlers/boards.ts";

export const worker = setupWorker(...boardsHandlers);
