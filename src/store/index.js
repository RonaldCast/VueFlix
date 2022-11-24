import { createStore } from 'vuex'
import {user} from "./modules/user"
import {movie} from "./modules/movie"
export const store = createStore({
    modules:{
        user, 
        movie
    }, 
})

