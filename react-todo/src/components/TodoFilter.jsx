const TodoFilter = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md p-4 bg-white p-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-500">Active</button>
        <button className="hover:text-blue-500">Completed</button>
      </div>
    </section>
  );
};

export default TodoFilter;
