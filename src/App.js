import { useState } from 'react';
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';
import TodoItem from './components/TodoItem/TodoItem';
import EmptyState from './components/EmptyState/EmptyState'

function App() {
  const [todos, setTodos] = useState([])
  const handleSubmitTodo = (title) => {
    const todo = {
      title,
      created_at: Date.now()
    }
    setTodos([
      ...todos,
      todo
    ])
  }

  const deleteTodo = (title) => {
    const newTodo = todos.filter(item => item.title !== title)
    setTodos(newTodo)
  }

  return (
    <div className="wrapper-app">
      <div className="container box-wrap">
        <h2 className="app-title">React Todo</h2>
        <InputTodo submitTodo={handleSubmitTodo}></InputTodo>
        { 
          todos.length ? (
            <div className="todo-list-wrap">
            {todos.map((todo,index) => {
              return <TodoItem todo={todo} key={index} deleteTodo={deleteTodo}></TodoItem>
            })}
          </div>
          ) : (
            <EmptyState></EmptyState>
          )
        }
      </div>
    </div>
  );
}

export default App;
