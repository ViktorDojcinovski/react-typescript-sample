import { shallow } from "enzyme";

import Footer from "../../components/Footer/Footer.component";

describe("Footer component", () => {
  it("renders four buttons for filtering", () => {
    const footer = shallow(
      <Footer
        markAll={() => {}}
        filterAll={() => {}}
        filterActive={() => {}}
        filterCompleted={() => {}}
      />
    );

    expect(footer.find("button")).toHaveLength(4);
  });
});
