<script setup lang="ts">
    import { computed } from '@vue/reactivity';
    import { ref } from 'vue'
    import { useStore } from '../store'
    
    defineProps<{ msg: string }>()
    
    const store = useStore()
    const count = computed(()=> store.getters['getCouter'])
    const tabs = computed(()=> store.getters['getTabs'])

    const oldCount = ref(0)
    const addBtn = ()=> {
        store.commit('addCount', ++oldCount.value)
    }
    const addTabs = ()=> {
        store.commit('addTabs', '菜单1')
    }
    </script>
    
    <template>
      <h1>{{ msg }}</h1>
      <button @click="addBtn">add</button>
      <h3 v-for="tab in tabs" :key="tab">{{ tab }}</h3>
      <button @click="addTabs">新增tabs</button>
      <h1>{{ count }}</h1>
    
      <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test HMR
        </p>
      </div>
    
      <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
          >create-vue</a
        >, the official Vue + Vite starter
      </p>
      <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
      </p>
      <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </template>
    
    <style scoped>
    .read-the-docs {
      color: #888;
    }
    </style>
    