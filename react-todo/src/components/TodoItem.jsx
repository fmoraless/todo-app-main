import IconCross from "./icons/IconCross.jsx";
import IconCheck from "./icons/IconCheck.jsx";

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b gray-400">
      {/*<button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        <IconCheck />
      </button>*/}

      {/*
        CONTINUAR CON LOS ESTILOS DE LOS BOTONES DE ACUERDO A CONDICION DE COMPLETED 2 HRAS CON 08 MIN
        */}
      <button
        className="flex h-5 w-5 flex-none rounded-full border-2
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
      >
        <IconCheck />
      </button>
      <p className="grow text-gray-600">{title}</p>
      <button className="flex-none">
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
