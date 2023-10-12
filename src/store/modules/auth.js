

const state = {
    user: null,
    token: null,
}


const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    LogOut(state) {
        state.user = null
    },
}


const actions = {
    async login({ commit }, userDetails) {
        try {
            const res = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userDetails.username,
                    password: userDetails.password,
                }),
            });
        
            const { user, token } = await res.json();
            await commit('setUser', user)
            await commit('setToken', token)
            localStorage.setItem('access_token', token)
            if(res.status !== 403) {
                return true
            }else return false

        } catch(err) {

            console.log(err)
        }
    },
    async LogOut({ commit }) {
        const user = null
        commit('LogOut', user)
    },
}


const getters = {
    isAuthenticated: (state) => !!state.user,
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}