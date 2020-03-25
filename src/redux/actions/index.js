import { 
    IS_LOGGED,
    LOCAL_SELECTED
} from "./action-types";

export const logarUsuario = value => ({
    type: IS_LOGGED,
    status: value
});

export const selecionarLocal = value => ({
    type: LOCAL_SELECTED,
    selected: value
});