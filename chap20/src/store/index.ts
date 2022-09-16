// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { TabsState } from './modules/tabs/state'
import { UserState } from './modules/user/state'
import { tabsModule } from './modules/tabs'
import { userModule } from './modules/user'

export type RootState = {
  tabs: TabsState,
  user: UserState
}

const modules = {
    tabs: tabsModule,
    user: userModule
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    modules
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return store
}
