export default {
  state: {
    userId: undefined,
    sessionId: undefined,
    profile: {}
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id;
    },
    setSessionId(state, id) {
      state.sessionId = id;
    },
    setProfile(state, profile) {
      state.profile = {...state.profile, ...profile};
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.sessionId !== undefined;
    },
    userProfile(state) {
      return state.profile;
    }
  },
  actions: {
    login: async function (context, {username, password}) {
      context.commit("setUserId", 1);
      context.commit("setSessionId", password);
      context.commit("setProfile", {
        username: username,
        realName: "Real name"
      });
      return true;
    }
  }
};
