import { Todo } from "./constants";
import axios from "axios"
export const addTodo=async(newTodo:Todo)=>{
   let res=await axios.post("http://localhost:8081/todos")
}