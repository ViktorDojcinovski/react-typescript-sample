import { ChangeEvent, useState } from "react";
import Switch from "react-switch";

import { Todo } from "App";
import edit from "assets/edit.svg";
import remove from "assets/delete.svg";
import save from "assets/save.svg";
import cancel from "assets/cancel.svg";

import {
  ShowModeWrapper,
  EditModeWrapper,
  MenuWrapper,
  ImageWrapper,
  InputWrapper,
} from "components/SingleTodo/SingleTodo.styles";

interface SingleTodoProps {
  todo: Todo;
  toggleCompleted(id: number): void;
  deleteTodo(id: number): void;
  editTodo(id: number, title: string): void;
}

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  toggleCompleted,
  deleteTodo,
  editTodo,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const onClickEditHandler = (id: number, title: string) => {
    editTodo(id, title);
    setNewTitle("");
    setEditMode(false);
  };

  return (
    <>
      {todo.isVisible ? (
        <>
          {editMode ? (
            <EditModeWrapper>
              <InputWrapper>
                <input
                  className="edit-field"
                  name="todo"
                  type="text"
                  value={newTitle || todo.title}
                  onChange={onChangeHandler}
                />
              </InputWrapper>
              <MenuWrapper>
                <ImageWrapper
                  className="save-btn"
                  onClick={() => onClickEditHandler(todo.id, newTitle)}
                >
                  <img src={save} alt="save" />
                </ImageWrapper>
                <ImageWrapper onClick={() => setEditMode(false)}>
                  <img src={cancel} alt="cancel" />
                </ImageWrapper>
              </MenuWrapper>
            </EditModeWrapper>
          ) : (
            <ShowModeWrapper>
              <h2>{todo.title}</h2>
              <MenuWrapper>
                <Switch
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                />
                <ImageWrapper
                  className="edit-btn"
                  onClick={() => setEditMode(true)}
                >
                  <img src={edit} alt="edit" />
                </ImageWrapper>
                <ImageWrapper
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <img src={remove} alt="remove" />
                </ImageWrapper>
              </MenuWrapper>
            </ShowModeWrapper>
          )}
        </>
      ) : null}
    </>
  );
};

export default SingleTodo;
