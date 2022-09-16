// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import tabs, { TabsState } from './modules/tabs'
import menu, { MenuState } from './modules/menu'

export type RootState = {
    tabs: TabsState,
    menu: MenuState
}

export const modules = {
    tabs,
    menu
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    modules
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return store
}
