import Todo from "../components/general/Todo";

const TodoListPage = () => {
  return (
    <article className="w-full min-h-screen bg-gray-300 flex justify-center items-center flex-col">
      <section className="w-full max-w-xl mt-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
          Todo list
        </h1>
      </section>
      <Todo />
    </article>
  );
};

export default TodoListPage;
