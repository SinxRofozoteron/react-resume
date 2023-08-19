import { PayloadAction } from "@reduxjs/toolkit";

import { ViewState, ThemeName } from "../models";

export const setThemeReducer = (state: ViewState, action: PayloadAction<ThemeName>) => {
    state.theme = action.payload
}