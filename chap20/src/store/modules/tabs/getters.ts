import { TabsState } from "./state"
import { GetterTree } from "vuex"
import { RootState } from "../.."

export type TabsGetters = {
    getTabs(state: TabsState): string[];
}

export const getters: TabsGetters & GetterTree<TabsState, RootState> = {
    getTabs(state: TabsState) {
        return state.tabsList
    }
}
