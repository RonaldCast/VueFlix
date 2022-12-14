import axios from "axios"

export const movie = {
  namespaced: true,
  state: {
    bannerMovie: {
      title: "Breaking Bad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url: "https://resizing.flixster.com/-M4e4XTWyjshdtfPAvavHDxwrhg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRNVUxUSVVTRTIyNzk2MDIud2VicA==",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2016,
    },
    dataMovie:{
      total: 0,
      listMovies: [], 

    }

  },

  mutations:{
    SET_DATA_MOVIE(state, payload) {
      state.dataMovie.total = payload.total; 
      state.dataMovie.listMovies = payload.entries; 

    }
  }, 

  actions:{
    async getListMovies({commit}) {
      try{
        const resp = await axios.get("http://127.0.0.1:5173/moves.json");
        commit("SET_DATA_MOVIE", resp.data)
        console.log(resp.data)
      }catch(e) {
        console.error(e)
      }
    }
  }


};
