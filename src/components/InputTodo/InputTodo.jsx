import { useState } from 'react'
import './InputTodo.css'

function InputTodo (props) {
  const [task, setTask] = useState('')

  const handleChangeInput = (event) => {
    setTask(event.target.value)
  }

  const handleClickButton = () => {
    props.submitTodo(task)
    setTask('')
  }

  return (
    <div className="input-todo-wrap">
      <input type="text" maxLength={25} className="input-todo" placeholder="Masukkan Nama Task" value={task} onChange={handleChangeInput}></input>
      <button className="btn-todo" onClick={handleClickButton}>Tambahkan</button>
    </div>
  )
}

export default InputTodo