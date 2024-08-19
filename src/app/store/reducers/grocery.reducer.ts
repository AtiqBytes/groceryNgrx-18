import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

const initialState:Grocery[]=[
    {"id":1, "name":"milk",type:"fruit"},
    {"id":2, "name":"Banana", type : "fruit"},
    {"id":3, "name" : "Smily chips", type : "snacks"},
    {"id":4, "name" : "Salman Choran", type : "snacks" }
]


export const groceryReducer = createReducer(initialState);
  
  