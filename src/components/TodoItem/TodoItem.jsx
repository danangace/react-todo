import './TodoItem.css'
import moment from 'moment'
import 'moment/locale/id'

function TodoItem ({ todo, deleteTodo }) {

  const formatDate = (date) => {
    return moment(date).format('LL')
  }

  const handleDeleteTodo = () => {
    deleteTodo(todo.title)
  }

  return (
    <div className="box-todo-wrap">
      <h3>{todo.title}</h3>
      <div className="todo-info-wrap">
        <p className="info-todo">Dibuat: <span classNames="info-date">{formatDate(todo.created_at)}</span></p>
        <p className="delete-todo" onClick={handleDeleteTodo}>Hapus</p>
      </div>
    </div>
  )
}

export default TodoItem