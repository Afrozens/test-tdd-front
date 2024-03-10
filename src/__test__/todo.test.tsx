import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "../components/general/todo/Todo";
import { dataMock, taskMock } from "../__mocks__/method-todo.mock";
import { TodoProvider } from "../contexts/TodoContexts";

describe("Todo", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <Todo />
      </TodoProvider>
    );
  });

  it("should one input and two buttons exists at the screen", async () => {
    const todoInput = screen.getByRole("textbox", {
      name: /write task/i,
    });
    const saveButton = screen.getByRole("button", {
      name: /save/i,
    });
    const clearButton = screen.getByRole("button", {
      name: /clear/i,
    });

    expect(todoInput).toBeDefined();
    expect(saveButton).toBeDefined();
    expect(clearButton).toBeDefined();

    expect(todoInput).toHaveValue("");
  });

  it("should render Task when the save button is clicked", async () => {
    const todoInput = screen.getByRole("textbox", {
      name: /write task/i,
    });
    const saveButton = screen.getByRole("button", {
      name: /save/i,
    });

    await userEvent.type(todoInput, taskMock.title);

    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(todoInput).toHaveValue("");
      const titleTask = screen.queryByText(taskMock.title, {
        selector: "span",
      });
      expect(titleTask).toBeInTheDocument();
    });
  });

  it("should selected todos when clear button is clicked and clear", async () => {
    const clearButton = screen.getByRole("button", {
      name: /clear/i,
    });
    await userEvent.click(clearButton);
    dataMock.filter((task) => !task.isCompleted);

    const titleTask2 = screen.queryByText(dataMock[1].title, {
      selector: "span",
    });
    await waitFor(() => {
      expect(titleTask2).not.toBeInTheDocument();
    });
  });
});
