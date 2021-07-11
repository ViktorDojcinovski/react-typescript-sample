import { useState } from "react";

import InsertTodo from "components/InsertTodo/InsertTodo.component";
import TodoList from "components/TodoList/TodoList.component";
import Footer from "components/Footer/Footer.component";

import { AppWrapper } from "App.styles";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  isVisible: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (title: string) => {
    const newTodo = {
      id: Math.random(),
      title,
      completed: false,
      isVisible: true,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleCompletedHandler = (id: number) => {
    const toggledTodo = todos.find((todo) => todo.id === id);

    setTodos(
      todos.map((todo) => {
        if (toggledTodo && todo.id === toggledTodo.id)
          todo.completed = !todo.completed;

        return todo;
      })
    );
  };

  const deleteTodoHandler = (id: number) => {
    const deletedTodo = todos.find((todo) => todo.id === id);

    setTodos(
      todos.filter((todo) => {
        if (deletedTodo && todo.id === deletedTodo.id) return false;
        return true;
      })
    );
  };

  const editTodoHandler = (id: number, newTitle: string) => {
    const editedTodo = todos.find((todo) => todo.id === id);

    setTodos(
      todos.map((todo) => {
        if (editedTodo && todo.id === editedTodo.id) {
          editedTodo.title = newTitle;

          return editedTodo;
        }

        return todo;
      })
    );
  };

  const markAllHandler = () => {
    const allCompleted = todos.map((todo) => {
      todo.completed = true;

      return todo;
    });

    setTodos(allCompleted);
  };

  const filterActiveHandler = () => {
    const active = todos.map((todo) => {
      if (todo.completed) {
        todo.isVisible = false;
      }

      return todo;
    });

    setTodos(active);
  };

  const filterCompletedHandler = () => {
    const completed = todos.map((todo) => {
      if (!todo.completed) {
        todo.isVisible = false;
      }

      return todo;
    });

    setTodos(completed);
  };

  const filterAllHandler = () => {
    const all = todos.map((todo) => {
      todo.isVisible = true;

      return todo;
    });

    setTodos(all);
  };

  return (
    <AppWrapper className="wrapper">
      <InsertTodo addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompletedHandler}
        deleteTodo={deleteTodoHandler}
        editTodo={editTodoHandler}
      />
      <Footer
        markAll={markAllHandler}
        filterAll={filterAllHandler}
        filterActive={filterActiveHandler}
        filterCompleted={filterCompletedHandler}
      />
    </AppWrapper>
  );
};

export default App;
