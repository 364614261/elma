import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 导入状态 state
import state from './state'
// 导入方法 mutations
import mutations from './mutations'
// 导入    getters
import getters from './getters'
// 导入    actions
import actions from './actions'
// 
import createPersistedState from "vuex-persistedstate"

// store存储器用来存储组件之间共享的数据以及调用的方法
const store = new Vuex.Store({
    //共享状态：类似组件中的data数据源
    state,
    //修改状态的方法：类似组件中的methods
    mutations,
    // getters 类似于组件中的计算属性，用来处理 state 状态值的
    getters,
    // action 类似于 mutations 是用来创建方法 只不过不处理状态值，调用 mutations中的方法； action可以处理异步操作， mutations不行
    actions,
    // 处理存储器刷新清除缓存
    plugins: [createPersistedState()],
  })

  // 导出存储的 store对象 给 main.js 使用
  export default store;