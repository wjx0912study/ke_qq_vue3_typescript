import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'
type _Func = {
    [K:string]:(...args:any)=>any
}

export type CommonStore<S,M extends _Func,A extends _Func,G extends _Func> = 
Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
}

