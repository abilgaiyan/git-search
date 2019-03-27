import { SELECT_REPO } from "../actions/actiontypes";

export default function(state=null,action){
    switch(action.type){
        case SELECT_REPO:
            return action.payload
    }
    return state
}