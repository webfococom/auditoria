import { IS_LOGGED } from "./action-types";

export const logarUsuario = value => ({
    type: IS_LOGGED,
    status: value
});