import { shallow } from "enzyme";

import TodoList from "../TodoList/TodoList.component";
import { Todo } from "../../App";

const todosStub: Todo[] = [
  { id: 1, title: "Learn React", completed: true, isVisible: true },
  { id: 2, title: "Learn Redux", completed: false, isVisible: true },
  { id: 3, title: "Learn Next", completed: false, isVisible: true },
];

describe("TodoList", () => {
  test("renders unordered list with given todo-list", () => {
    const todoList = shallow(
      <TodoList
        todos={todosStub}
        toggleCompleted={(id: number) => {}}
        deleteTodo={(id: number) => {}}
        editTodo={(id: number, title: string) => {}}
      />
    );

    expect(todoList.find("ul")).toHaveLength(1);
    expect(todoList.find("SingleTodo")).toHaveLength(3);
  });
});
