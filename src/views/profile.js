import React from 'react'

/* 待办事项 布局基页 */
const ProfileView = ({ children }) => (
  <div className="center-block">
    <div role="alert"
      className="alert alert-warning alert-dismissible">
      <button
        type="button"
        className="close"
        data-dismiss="alert">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>这是个人主页页面，具体内容待定</strong>
    </div>
    { children }
  </div>
)

export default ProfileView
