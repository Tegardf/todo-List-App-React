import axios from "axios";


const API_URL = "https://6524b948ea560a22a4ea08db.mockapi.io/todoList"
const initialState = {
  todos: [],
  todosAll: [],
  isLoading: false,
  error:""
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        isLoading:true
      }
    case "SUCCESS_GET_TODOS":
      return{
        ...state,
        isLoading:false,
        todos:action.payload,
        todosALL:action.payload
      }
    default:
      return state;
  }
}

function startFetching() {
  return{
    type:"START_FETCHING"
  }
}
function successGetTodos(data) {
  return{
    type:"SUCCESS_GET_TODOS",
    payload:data
  }
}
export function getTodos(param='') {
  return async function(dispatch){
    if (param=='') {
      dispatch(startFetching())
    }
    const {data} = await axios(API_URL+param)
    dispatch(successGetTodos(data))
  }
}

export const addTodo = (newTodo) => async (dispatch) =>{
  dispatch(startFetching())
  await axios.post(API_URL,newTodo)
  dispatch(getTodos())
}

export const deleteTodo = (id) => async (dispatch) =>{
  dispatch(startFetching())
  await axios.delete(API_URL+`/${id}`)
  dispatch(getTodos())
}

export const updateTodo = (id,value) => async (dispatch)=>{
  dispatch(startFetching())
  await axios.put(API_URL+`/${id}`,value)
  dispatch(getTodos())
}

export default todoReducer;
