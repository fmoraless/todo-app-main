import CrossIcon from "./icons/CrossIcon.jsx";

const TodoItem = () => {
  return (
    <article className="flex gap-4 border-b gray-400">
      <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
      <p className="grow text-gray-600">complete online Javascript</p>
      {/* Crear componente CROSS-ICON */}
      <button className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
