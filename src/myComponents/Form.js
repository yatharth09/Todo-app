import React from 'react';

function Form({setText , todos , setTodos, Text, setStatus}) {

  const TextHandler = (e) => {
    setText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: Text, completed: false, id: Math.random() * 1000},
    ]);
    setText("");

  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return(
    <form>
      <input onChange={TextHandler} value={Text} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
