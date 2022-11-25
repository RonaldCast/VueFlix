
export const user={
    namespaced:true, 
    state: {
        user: {
            name:"",
            picture: ""
        }
        
    }, 

    mutations:{
        SET_USER_DATA(state, user){
            state.user = user;
        }
    }



}