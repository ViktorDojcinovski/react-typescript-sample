import { shallow, ShallowWrapper } from "enzyme";

import InsertTodo from "../InsertTodo/InsertTodo.component";
import { Todo } from "../../App";

describe("InsertTodo component", () => {
  let insertTodo: ShallowWrapper;
  beforeEach(() => {
    insertTodo = shallow(<InsertTodo addTodo={(title: string) => {}} />);
  });

  it("renders one input field and one button", () => {
    const input = insertTodo.find("input");
    const button = insertTodo.find("button");

    expect(input).toHaveLength(1);
    expect(button).toHaveLength(1);
  });

  it("changes the value of title on text insert", () => {
    insertTodo.find("input").simulate("change", { target: { value: "test" } });
    insertTodo.update();

    expect(insertTodo.find("input").prop("value")).toEqual("test");
  });

  it("empties the input field on button click", () => {
    insertTodo.find("input").simulate("change", { target: { value: "test" } });
    insertTodo.find("button").simulate("click");
    insertTodo.update();

    expect(insertTodo.find("input").prop("value")).toEqual("");
  });
});
