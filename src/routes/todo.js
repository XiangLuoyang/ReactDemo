/**
 * Route 中的 todo.js 文件主要用于配置 TODO代办事件 的路由项
 */

import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
  path: 'todo',

  /* 布局基页 */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('VIEW/todo').default)
    }, 'todoView')
  },

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        // 注入 Reducer
        injectReducer('todos', require('REDUCER/todo').default)

        /* 组件连接 state */
        const TodoContainer = createContainer(
          ({ todos }) => ({ todos }),        // mapStateToProps,
          require('ACTION/todo').default,    // mapActionCreators,
          require('COMPONENT/Todo/').default // 木偶组件
        )

        cb(null, TodoContainer)
      }, 'todo')
    }
  }
}

/**
 * 【拓展】
 * 在 msg 的路由中，Reducer 是在 布局基页 中注入
 * 而在这里就可以在 indexRoute 中注入
 * 这主要取决于 Reducer 的作用范围
 */

/**
 * 【后来人注】
 * 这个地方的路由配置其实看的不是很懂
 * 比如这里的布局基页指的是什么东西不甚明了
 * 我试着删除了“布局基页”这一部分，在 TODO 中其实影响并不大，但在 MSG 里删除会报错，可能是有无注入 Reducer 的缘故
 * 不说别的，就是【拓展部份】的说明其实也很晦涩
 * 什么是 Reducer 的作用范围？
 * 还有就是这个 Route 的配置和我平时做的好像不太一样？
 */
