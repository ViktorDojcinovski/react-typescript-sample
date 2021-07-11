import { ChangeEvent, useState } from "react";

import { Wrapper } from "components/InsertTodo/InsertTodo.styles";

interface InsertTodoProps {
  addTodo(title: string): void;
}

const InsertTodo: React.FC<InsertTodoProps> = ({ addTodo, ...props }) => {
  const [title, setTitle] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onClickHandler = () => {
    if (!title.trim()) return;
    addTodo(title);

    // empty input field after todo is added
    setTitle("");
  };

  return (
    <Wrapper {...props}>
      <h2>What would you like to learn?</h2>
      <input
        name="title"
        type="text"
        value={title}
        onChange={onChangeHandler}
      />
      <button id="add-btn" onClick={onClickHandler}>
        Add
      </button>
    </Wrapper>
  );
};

export default InsertTodo;
