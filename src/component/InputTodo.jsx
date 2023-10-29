import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/toDo-Reducer";

function InputTodo() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  const clickHandle = (e) => {
    if (input == "") {
      alert("isi terlebih dahulu");
      return;
    }
    e.preventDefault();

    dispatch(addTodo({ todoV: input, completeStatus: false }));
    setinput("");
  };

  return (
    <div className="w-full flex justify-between text-lg">
      <input
        className="w-9/12 p-1 px-3 rounded-md focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400"
        type="text"
        name="todo"
        placeholder="new todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button className="w-2/12 p-1 rounded-md font-bold text-white  bg-green-500 hover:bg-green-600 active:bg-green-800 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400" onClick={clickHandle}>
        Add
      </button>
    </div>
  );
}

export default InputTodo;
