import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { dataMock, taskMock } from "../__mocks__/method-todo.mock";
import { TodoProvider } from "../contexts/TodoContexts";
import Task from "../components/general/todo/Task";

describe("Task", () => {
  beforeEach(() => {
    render(
      <TodoProvider>
        <Task task={taskMock} index={0} />
      </TodoProvider>
    );
  });

  it("should two buttons exists at the screen for any task", async () => {
    const editButton = screen.getByRole("button", {
      name: `edit-${taskMock.id}`,
    });
    const deleteButton = screen.getByRole("button", {
      name: `delete-${taskMock.id}`,
    });

    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  it("should activated edit mode when edit button is clicked", async () => {
    const editButton = screen.getByRole("button", {
      name: `edit-${taskMock.id}`,
    });
    await userEvent.click(editButton);

    const editInput = screen.getByRole("textbox", { name: /edit task/i });
    expect(editInput).toBeInTheDocument();
  });

  it("should delete task when click delete button", async () => {
    const deleteButton = screen.getByRole("button", {
      name: `delete-${taskMock.id}`,
    });
    await userEvent.click(deleteButton);

    await waitFor(() => {
      render(
        <TodoProvider>
          <Task task={dataMock[2]} index={1} />
        </TodoProvider>
      );
      const taskText = screen.queryByText(taskMock.title);
      expect(taskText).not.toBeInTheDocument();
    });
  });
});
