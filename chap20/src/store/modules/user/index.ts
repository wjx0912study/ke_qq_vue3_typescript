import { Module } from "vuex";
import { RootState } from "../..";
import { UserState } from "./state";

import { actions } from "./actions"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { state } from "./state"

export const userModule: Module<UserState, RootState> = {
    state,
    actions,
    getters,
    mutations
}
