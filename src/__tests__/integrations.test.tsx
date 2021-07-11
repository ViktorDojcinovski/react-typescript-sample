import { mount, ReactWrapper } from "enzyme";

import App from "../App";

let app: ReactWrapper;

beforeEach(() => {
  app = mount(<App />);

  const addBtn = app.find("#add-btn");
  const insertField = app.find("input[name='title']");

  insertField.simulate("change", { target: { value: "first item" } });
  addBtn.simulate("click");
  app.update();
});

afterEach(() => {
  app.unmount();
});

it("renders a list item after it is inserted through the insert input field", () => {
  const addBtn = app.find("#add-btn");
  const insertField = app.find("input[name='title']");

  insertField.simulate("change", { target: { value: "second item" } });
  addBtn.simulate("click");
  app.update();

  expect(app.find("SingleTodo").at(1).find("h2").text()).toEqual("second item");
});

it("deletes a list item after the delete button on single item is clicked", () => {
  const deleteBtn = app.find(".delete-btn").first();

  deleteBtn.simulate("click");
  app.update();

  expect(app.find("SingleTodo")).toHaveLength(0);
});

it("edits a list item after entering the edit mode and save", () => {
  let editField: ReactWrapper;
  let saveBtn: ReactWrapper;
  const editBtn = app.find(".edit-btn").first();

  editBtn.simulate("click");
  app.update();
  editField = app.find(".edit-field").first();
  saveBtn = app.find(".save-btn").first();
  editField.simulate("change", { target: { value: "new value" } });
  saveBtn.simulate("click");
  app.update();

  expect(app.find("SingleTodo").at(0).find("h2").text()).toEqual("new value");
});
