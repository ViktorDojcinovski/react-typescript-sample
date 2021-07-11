import { Todo } from "App";
import SingleTodo from "components/SingleTodo/SingleTodo.component";

import { StyledList } from "components/TodoList/TodoList.styles";

interface TodoListProps {
  todos: Todo[];
  toggleCompleted(id: number): void;
  deleteTodo(id: number): void;
  editTodo(id: number, title: string): void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleCompleted,
  deleteTodo,
  editTodo,
}) => {
  return (
    <StyledList id="items">
      {todos.map((todo) => {
        return (
          <SingleTodo
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </StyledList>
  );
};

export default TodoList;
