<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> News </v-list-item-title>
          <v-list-item-subtitle> Category News </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="expanding-search mt-5"
        filled
        dense
        placeholder="Search"
      >
      </v-text-field>
      <v-btn icon><v-icon>mdi-magnify</v-icon> </v-btn>

      <v-btn class="ml-3" @click="switchTheme">
        <v-icon depressed small fab>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Business",
        icon: "mdi-drag-horizontal-variant",
        to: "/",
      },
      {
        title: "Entertainment",
        icon: "mdi-drag-horizontal-variant",
        to: "/entertainment",
      },
      { title: "Health", icon: "mdi-drag-horizontal-variant", to: "/health" },
      { title: "Sports", icon: "mdi-drag-horizontal-variant", to: "/sports" },
      {
        title: "Technology",
        icon: "mdi-drag-horizontal-variant",
        to: "/technology",
      },
      { title: "Science", icon: "mdi-drag-horizontal-variant", to: "/science" },
    ],
  }),
  methods: {
    switchTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary =
          this.$vuetify.theme.themes.dark.primary;
      } else {
        this.$vuetify.theme.themes.dark.primary =
          this.$vuetify.theme.themes.light.primary;
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
<style scoped>
</style>
