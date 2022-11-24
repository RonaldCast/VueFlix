
export const user={
    namespaced:true, 
    state: {
        user: {
            name:"Ronald Castillo",
            picture: "https://s.gravatar.com/avatar/2f122e0aa0c20f101c815305e763cf0b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fro.png"
        }
        
    }, 

    mutations:{
        SET_USER_DATA(state, user){
            //state.user = user;
        }
    }



}