import { Module } from "vuex";
import { RootState } from "../..";
import { TabsState } from "./state";

import { actions } from "./actions"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { state } from "./state"

export const tabsModule: Module<TabsState, RootState> = {
    state,
    actions,
    getters,
    mutations
}
