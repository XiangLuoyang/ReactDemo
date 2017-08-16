import React, { Component} from 'react'
import handleChange from 'MIXIN/handleChange'
import { connect } from 'react-redux'

@connect(
  ({ userData }) => ({ userData }),
  require('ACTION/user').default
)

export default class ProfileInput extends Component {
  constructor (props) {
    super(props)
    this.state = { inputVal: '' }
    this.props = { userData: '' }
    this.handleChange = handleChange.bind(this)
  }

  handleSubmit () {
    let content = this.state.inputVal.trim()
    if (!content) return

    this.props.addProfile(content)
    this.setState({ inputVal: '' }) // 清空输入框
  }

  render () {
    return (
      <form onSubmit={
        (e) => {
          e.preventDefault() // 防页面跳转
          this.handleSubmit()
        }
      }>
        <div className="form-group">
            <p>用户姓名:{ this.props.userData ? this.props.userData.username : '游客' }</p>
        </div>
        <div className="form-group">
            <p>头像:</p>
            <img src="../static/image/tx.jpg" width="100px" height="100px"/>
        </div>
        <div className="form-group">
          <p>邮箱:</p>
          <input
            type="text"
            className="form-control"
            name="inputVal"
            placeholder="请输入您的绑定邮箱,按回车确认输入"
            required
            value={this.state.inputVal}
            onChange={this.handleChange} />
        </div>

      </form>
    )
  }
}
