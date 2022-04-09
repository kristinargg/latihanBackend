<template>
  <v-app id="technology" class="text-center">
    <h1 class="primary--text mb-2">NEWS</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex v-for="(list, index) in newsList" :key="index" sm6 md9 lg12>
          <v-card class="mx-auto mb-12 mr-2 ml-2">
            <v-img :src="list.urlToImage" />
            <v-card-text class="primary--text d-flex justify-space-between">
              <div>{{ list.author }}</div>

              <div>{{ list.publishedAt }}</div>
            </v-card-text>
            <v-card-title>{{ list.title }}</v-card-title>
            <v-card-title>{{ list.category }}</v-card-title>

            <v-card-actions>
              <v-btn color="red" text outlined @click="readMore(index)">
                Read More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "TechnologyNews",
  computed: {
    newsList() {
      return this.$store.state.news.listNews;
    },
  },
  methods: {
    fetchNewsTechnology() {
      this.$store.dispatch("news/fetchNewsTechnology");
    },
    readMore(index) {
      this.$router.push({ name: "DetailsNews", params: { id: index } });
    },
  },
  mounted() {
    this.fetchNewsTechnology();
  },
};
</script>
<style scoped>
</style>