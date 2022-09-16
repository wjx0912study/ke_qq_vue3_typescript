import { MutationTree } from "vuex"
import { UserState } from "./state"

export type UserMutations = {
    addCount(state: UserState, count: number): void;
}

export const mutations: UserMutations & MutationTree<UserState> = {
    addCount(state: UserState, count: number) {
        state.count += count
    }
}
