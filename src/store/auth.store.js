import { API_BASE_URL } from "@/app.config";
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
      try{
        const response = await fetch(
          `${API_BASE_URL}/services/auth.php`,
          {
            method: "post",
            body: `login=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "mode":"cors"
            }
          }
        );
        response;
      }catch(e){
        console.log(e);
      }
      context.commit("setUserId", 1);
      context.commit("setSessionId", 1);
      context.commit("setProfile", {});
      console.log("Logged in!");
    }
  }
};
