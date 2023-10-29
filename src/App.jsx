import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodo";
import './App.css'
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center px-6 bg-blue-100">
        <div className="flex flex-col gap-3 p-6 mt-10 w-full border-solid rounded-2xl bg-green-300 ">
          <h1 className="text-4xl font-bold text-center my-5 ">
            My Todo List
          </h1>
          <InputTodo />
          <ListTodo />
        </div>
      </div>
    </>
  );
}

export default App;
