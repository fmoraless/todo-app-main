import CrossIcon from "./components/CrossIcon.jsx";
import MoonIcon from "./components/MoonIcon.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        {/* overglow-hidden es para que no se desborde */}
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
          <span className="inline-block w-5 h-5 rounded-full border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white [&>article]:p-4">
          {/* ARTICULOS */}
          <article className="flex gap-4 border-b gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">complete online Javascript</p>
            {/* Crear componente CROSS-ICON */}
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">complete online Javascript</p>
            {/* Crear componente CROSS-ICON */}
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">complete online Javascript</p>
            {/* Crear componente CROSS-ICON */}
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between py-4 px-4">
            <span className="text-gray-400">5 items lef</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>
      {/* Seccion bajo las TODOs */}
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md p-4 bg-white p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-500">Active</button>
          <button className="hover:text-blue-500">Completed</button>
        </div>
      </section>
      <p className="mt-8 text-center">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
