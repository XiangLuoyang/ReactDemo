import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
  path: 'profile',

  /* 布局基页 */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('VIEW/profile').default)
    }, 'profileView')
  },

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        // 注入 Reducer
        injectReducer('profiles', require('REDUCER/profile').default)

        /* 组件连接 state */
        const ProfileContainer = createContainer(
          ({ profiles }) => ({ profiles }),        // mapStateToProps,
          require('ACTION/profile').default,    // mapActionCreators,
          require('COMPONENT/Profile/').default // 木偶组件
        )

        cb(null, ProfileContainer)
      }, 'profile')
    }
  }
}
