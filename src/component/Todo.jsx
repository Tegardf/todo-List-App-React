import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/reducer/toDo-Reducer";
import { useState } from "react";
import { EditIcon } from "../assets/EditIcon";
import { DeleteIcon } from "../assets/DeleteIcon";
import {DoneIcon} from "../assets/Doneicon"

function Todo({ data }) {
  const { id, todoV, completeStatus } = data;
  const dispatch = useDispatch();

  let [editText, setEdit] = useState({
    state: false,
    todoValue: todoV,
  });

  const handlerDell = (id) => {
    dispatch(deleteTodo(id));
  };

  const handlerEdit = (idTodo) => {
    if (editText.state) {
      dispatch(updateTodo(idTodo, { todoV: editText.todoValue }));
    }
    setEdit({
      state: !editText.state,
      todoValue: editText.todoValue,
    });
  };
  const handlerCheck = (idTodo, isChecked) => {
    dispatch(updateTodo(idTodo, { completeStatus: isChecked }));
  };

  if (editText.state == false) {
    return (
      <div className="flex flex-row gap-1 items-start">
        <input
          type="checkbox"
          name="checkDone"
          className="relative peer appearance-none mt-1.5 w-5 h-5 border-2 shrink-0 border-color5 rounded-xl bg-color1
          checked:bg-color3
          focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-color5"
          onChange={(e) => handlerCheck(id, e.target.checked)}
          checked={completeStatus}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mt-1.5 w-5 h-5 absolute hidden peer-checked:block pointer-events-none "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <p
          className={
            (completeStatus ? "line-through " : "") + "grow text-lg mx-2"
          }
        >
          {todoV}
        </p>
        <button onClick={() => handlerEdit(id)}>
          <EditIcon></EditIcon>
        </button>
        <button onClick={() => handlerDell(id)}>
          <DeleteIcon></DeleteIcon>
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex gap-4 pr-4">
        <input
          type="text"
          name="editToDo"
          className="grow p-1 px-3 bg-color1 font-semibold placeholder-color6 rounded-md focus:outline-none focus:border-color5 focus:ring-2 focus:ring-color5"
          id={data.id}
          value={editText.todoValue}
          onChange={(e) =>
            setEdit({ state: editText.state, todoValue: e.target.value })
          }
        />
        <button onClick={() => handlerEdit(data.id)}><DoneIcon></DoneIcon></button>
      </div>
    );
  }
}

export default Todo;
