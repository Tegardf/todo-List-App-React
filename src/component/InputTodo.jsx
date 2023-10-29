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
    <div className="w-full flex justify-between text-lg gap-1.5">
      <input
        className="w-4/5 p-1 px-3 bg-color1 font-semibold placeholder-color6 rounded-md focus:outline-none focus:border-color5 focus:ring-4 focus:ring-color5"
        type="text"
        name="todo"
        placeholder="new todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button className="grow p-1 rounded-md font-bold bg-color4 hover:bg-color2 hover:text-color6 active:bg-color1 focus:outline-none focus:border-color5 focus:ring-4 focus:ring-color5" onClick={clickHandle}>
        Add
      </button>
    </div>
  );
}

export default InputTodo;
