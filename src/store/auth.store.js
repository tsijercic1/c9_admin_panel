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
  getters: {
    isAuthenticated(state) {
      return state.sessionId !== undefined;
    }
  },
  actions: {
    login: async function(context, { username, password }) {
      try {
        const response = await fetch(`/services/auth.php`, {
          method: "post",
          body: `login=${encodeURIComponent(
              username
          )}&password=${encodeURIComponent(password)}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          }
        });
        const body = await response.json();
        if(body.success === true){
          context.commit("setUserId", 1);
          context.commit("setSessionId", body["sid"]);
          context.commit("setProfile", {});

        }
      } catch (e) {

      }
    }
  }
};
