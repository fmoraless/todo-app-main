import IconCross from "./components/icons/IconCross.jsx";
import Header from "./components/Header.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import { useState } from "react";

const initialstateTodos = [
  { id: 1, title: "Complete online Javascript course", completed: true },
  { id: 2, title: "Jog around the park 3x", completed: false },
  { id: 3, title: "10 minutes meditation", completed: false },
  { id: 4, title: "Read for 1 hour", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialstateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <TodoList todos={todos} />

        <TodoComputed />

        <TodoFilter />
      </main>

      <footer className="mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
