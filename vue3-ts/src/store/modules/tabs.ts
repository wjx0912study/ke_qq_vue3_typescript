import { ITable } from '../type/index'

export type TabsState = {
    tabsList: Array<ITable>
}

export const state: TabsState = {
    tabsList: []
}

export const mutations = {
    addTab: (state: TabsState, tab: ITable)=>{
        console.log('store: ', tab)
        if (state.tabsList.some(item=> item.path === tab.path)) {
            return
        }
        state.tabsList.push(tab)
    }
}

export const actions = {
}

export const getters = {
    getTabs: (state: TabsState)=>{
        return state.tabsList
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
