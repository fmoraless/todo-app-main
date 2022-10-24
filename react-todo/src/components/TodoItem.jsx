import IconCross from "./icons/IconCross.jsx";
import IconCheck from "./icons/IconCheck.jsx";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b gray-400 transition-all duration-1000">
      {/*<button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        <IconCheck />
      </button>*/}

      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
            : "inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {/*cuando el ternario no tiene un caso contrario (else), se puede usar un && */}
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow text-gray-600 dark:text-gray-300 ${
          completed && "line-through"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
