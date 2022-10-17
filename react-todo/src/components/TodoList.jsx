import CrossIcon from "./icons/CrossIcon.jsx";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
  return (
    <div className="rounded-t-md bg-white [&>article]:p-4 mt-8">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
