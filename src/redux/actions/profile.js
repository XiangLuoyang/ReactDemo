// ================================
// Action Type
// ================================
const ADD_PROFILE = 'ADD_PROFILE'
const DEL_PROFILE = 'DEL_PROFILE'
const TOGGLE_PROFILE = 'TOGGLE_PROFILE'

// ================================
// Action Creator
// ================================

// 生成个人主页的用户名 
// const userName = (userData) => ({
//   type: USER_NAME,
//   payload: userData
// })


const addProfile = (content) => ({
  type: ADD_PROFILE,
  payload: {
    id: setTimeout(() => {}), // 生成唯一 ID 的一种方式
    content,
    completed: false,
    createdAt: Date.now()
  }
})

const toggleProfile = (profileId) => ({
  type: TOGGLE_PROFILE,
  payload: profileId
})

const delProfile = (profileId) => ({
  type: DEL_PROFILE,
  payload: profileId
})

/* default 导出所有 Action Creators */
export default {
  // 虽然是同步的函数，但请不要自行 bindActionCreators
  // 皆因调用 connect 后，react-redux 已经帮我们做了，见：
  // https://github.com/reactjs/react-redux/blob/master/src/utils/wrapActionCreators.js
  addProfile, toggleProfile, delProfile
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [ADD_PROFILE]: (profiles, { payload }) => [ ...profiles, payload ],
  [TOGGLE_PROFILE]: (profiles, { payload: profileId }) => profiles.map(
    profile => profile.id === profileId ? { ...profile, completed: !profile.completed } : profile
  ),
  [DEL_PROFILE]: (profiles, { payload: profileId }) => profiles.filter(
    profile => profile.id !== profileId
  )
}
