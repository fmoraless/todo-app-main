import IconCross from "./icons/IconCross.jsx";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos }) => {
  return (
    <div className="rounded-t-md bg-white [&>article]:p-4 mt-8">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
