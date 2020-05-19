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
      state.profile = profile;
    }
  },
  actions: {
    login: async function(context, { username, password }) {
      context.commit("setUserId", 1);
      context.commit("setSessionId", 1);
      context.commit("setProfile", {})
      username;
      password;
    }
  }
};
