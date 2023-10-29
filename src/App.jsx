import InputTodo from "./component/InputTodo";
import ListTodo from "./component/ListTodo";
import './App.css'
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center px-6 bg-color2">
        <div className="flex flex-col gap-3 p-6 my-10 shadow-custom w-full max-w-xl border-solid rounded-2xl border-4 border-color5 bg-color3 text-color5">
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
