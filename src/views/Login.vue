<template>
  <v-app>
    <v-content class="grey darken-4">
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs9 sm7 md5 lg4>
            <v-card light class="pa-10 text-center">
              <v-card-title>Log in to your account</v-card-title>
              <v-form class="mt-4">
                <v-text-field
                  light
                  label="Username"
                  prepend-icon="mdi-account"
                  v-model="username"
                />
                <v-text-field
                  light
                  type="password"
                  label="Password"
                  prepend-icon="mdi-lock"
                  v-model="password"
                />
                <v-btn large width="100%" class="mt-6" dark @click="login">
                  Log in
                </v-btn>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "Login",
    data: () => {
      return {
        username: undefined,
        password: undefined
      };
    },
    methods: {
      login: async function () {
        const {username, password} = this;
        const result = await this.$store.dispatch("login", {username, password});
        if (result === true) {
          await this.$router.push({name: "Dashboard"});
        } else {
          console.log("Login view: --Wrong credentials--");
        }
      }
    }
  };
</script>
