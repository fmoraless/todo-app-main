const TodoCreate = () => {
  return (
    /* overglow-hidden es para que no se desborde */
    <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
      <span className="inline-block w-5 h-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none"
      />
    </form>
  );
};

export default TodoCreate;
