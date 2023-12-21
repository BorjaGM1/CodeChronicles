const state = {
    isLoggedIn: false,
    user: null
}

const mutations = {
    setLoggedIn(state, isLoggedIn){
        state.isLoggedIn = isLoggedIn;
    },
    setUser(state, user){
        state.user = user;
    }
}