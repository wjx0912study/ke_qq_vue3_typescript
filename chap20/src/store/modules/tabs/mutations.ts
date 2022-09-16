import { TabsState } from "./state"
import { MutationTree } from 'vuex'

export type TabsMutations = {
    addTabs(state: TabsState, tab: string): void;
}

export const mutations: TabsMutations & MutationTree<TabsState> = {
    addTabs(state: TabsState, tab: string) {
        state.tabsList.push(tab)
    }
}
