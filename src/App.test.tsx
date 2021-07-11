import { shallow } from "enzyme";

import App from "./App";

describe("App component", () => {
  test("renders TodoList, InsertTodo and Footer components", () => {
    const app = shallow(<App />);

    expect(app.find("TodoList")).toHaveLength(1);
    expect(app.find("InsertTodo")).toHaveLength(1);
    expect(app.find("Footer")).toHaveLength(1);
  });
});
