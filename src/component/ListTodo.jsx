import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import { getTodos } from "../redux/reducer/toDo-Reducer";

function ListTodo() {
  const { isLoading, todos } = useSelector((state) => state.toDos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  const classNameBtn = 'rounded-md text-white focus:text-blue-950 font-bold py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-1 py-2">
        <button
          className={`w-4/12 ${classNameBtn}`}
          onClick={() => dispatch(getTodos())}
        autoFocus>ALL</button>
        <button 
          className={`flex grow justify-center ${classNameBtn}`}
          onClick={() => dispatch(getTodos("?completeStatus=false"))}
        >ACTIVE</button>
        <button 
          className={`w-4/12 ${classNameBtn}`}
          onClick={() => dispatch(getTodos("?completeStatus=true"))}
        >COMPLETED</button>
      </div>
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <Todo key={todo.id} data={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
export default ListTodo;
