import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './myComponents/Form';
import TodoList from './myComponents/TodoList';

function App(){
  const [Text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");






  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };
  };


  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {

    filterHandler();
    saveLocalTodos();

  },[todos, status]);


  const saveLocalTodos = () => {
    {
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos')=== null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }

  return(
    <div className="App">
      <header>
        <h1>Luci's TODO List </h1>
      </header>
      <Form
         setStatus={setStatus}
         todos={todos}
         setTodos={setTodos}
         setText={setText}
         Text={Text} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos} />
    </div>
  );


}

export default App;
