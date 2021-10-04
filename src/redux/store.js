import { createStore } from "redux"
import { addUser } from "./reducer";


export const store = createStore(addUser);