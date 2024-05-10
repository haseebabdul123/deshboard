import {combineReducers} from "redux"

import { taskResucers } from "./taskReducers"

const rootReducer = combineReducers({
    task:taskResucers,
    user:()=>null
})

export default rootReducer