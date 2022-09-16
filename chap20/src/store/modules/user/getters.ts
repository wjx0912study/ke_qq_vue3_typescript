import { GetterTree } from "vuex"
import { UserState } from "./state"
import { RootState } from "../.."


export type UserGetters = {
    getCount(state: UserState): number;
}

export const getters: UserGetters & GetterTree<UserState, RootState> = {
    getCount(state: UserState) {
        return state.count
    }
}
