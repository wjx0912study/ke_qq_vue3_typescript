export type MenuState = {
    count: number,
    collapse: boolean
}

export const state: MenuState = {
    count: 0,
    collapse: false
}

export const mutations = {
    setCount(state: MenuState, count: number) {
      state.count = count
    },
    setCollapse: (state: MenuState, collapse: boolean)=>{
        state.collapse = collapse
    }
}

export const actions = {
    setCount({ commit }: any, count: number) {
      commit('setCount', count)
    }
}

export const getters = {
    getCount(state: MenuState) {
      return state.count
    },
    getCollapse: (state: MenuState)=>{
      return state.collapse
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}