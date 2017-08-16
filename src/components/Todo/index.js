import React, { Component } from 'react'
import TodoInput from './TodoInput'
import dateTimeFormatter from 'UTIL/dateTimeFormatter'

export default class Todo extends Component {
  // 点击删除后出现的对话框确认是否删除，如果确认，则将所点击的todo的todoId传给props中的delTodo
  delTodo (todoId) {
    if (!confirm('确认删除？')) return
    this.props.delTodo(todoId)
  }

  render () {
    // 这里的props的运用方式：还要看看todo组件在哪里使用的问题，或者路由配置方式。地址：/Todo
    let { todos, addTodo, toggleTodo } = this.props
    return (
      <div>
        <ul>
          { todos.map(todo =>
            <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
              <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                { todo.content }
              </span>
              <a href="javascript:;"
                style={{textDecoration: 'none'}}
                className="pull-right"
                onClick={() => this.delTodo(todo.id)}>
                &otimes;
              </a>
              <span className="label label-default pull-right">
                { dateTimeFormatter(todo.createdAt) }
              </span>
            </li>
          )}
        </ul>
        <TodoInput addTodo={addTodo} />
      </div>
    )
  }
}
