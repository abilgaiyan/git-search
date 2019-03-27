import { SELECT_REPO } from "./actiontypes";

export function selectRepo(repo){
    console.log(repo)
    return {
        type: SELECT_REPO,
        payload: repo
    }
}