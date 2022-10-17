import CrossIcon from "./components/icons/CrossIcon.jsx";
import Header from "./components/Header.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoFilter from "./components/TodoFilter.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate />

        <TodoList />

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
