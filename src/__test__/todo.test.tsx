import { cleanup, render } from "@testing-library/react";
import Todo from "../components/general/Todo";

describe("Todo", () => {
  afterEach(cleanup);
  afterEach(jest.clearAllMocks);

  beforeEach(() => {
    render(<Todo />);
  });
});
