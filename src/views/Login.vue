<template>
  <v-app class="bg-dark">
    <v-content>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs9 sm7 md5 lg4>
            <v-card light class="pa-10 text-center">
              <v-card-title class="text-wrap"
                >Log in to your account</v-card-title
              >
              <v-form class="mt-4">
                <v-text-field
                  light
                  label="Username"
                  prepend-icon="mdi-account"
                />
                <v-text-field
                  light
                  type="password"
                  label="Password"
                  prepend-icon="mdi-lock"
                />
                <v-btn large class="d-flex w-100 mt-6">Log in</v-btn>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
.bg-dark {
  background: #333;
}

.w-100 {
  width: 100%;
}
</style>

<script>
export default {
  name: "Login"
};
</script>
