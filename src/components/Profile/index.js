import React, { Component } from 'react'
import ProfileInput from './ProfileInput'
import dateTimeFormatter from 'UTIL/dateTimeFormatter'

export default class Profile extends Component {
  delProfile (profileId) {
    if (!confirm('确认删除？')) return
    this.props.delProfile(profileId)
  }

  render () {
    let { profiles, addProfile, toggleProfile } = this.props
    return (
      <div>
        
          { profiles.map(profile =>
            <div key={profile.id} onClick={() => toggleProfile(profile.id)}>
              <span style={{textDecoration: profile.completed ? 'line-through' : 'none'}}>
                { profile.content }
              </span>
              {/* 删除记录 */}
              <a href="javascript:;"
                style={{textDecoration: 'none'}}
                className="pull-right"
                onClick={() => this.delProfile(profile.id)}>
                &otimes;
              </a>
              {/* 添加时间显示  */}
              <span className="label label-default pull-right">
                { dateTimeFormatter(profile.createdAt) }
              </span>
            </div>
          )}
        
        <ProfileInput addProfile={addProfile} />
      </div>
    )
  }
}
