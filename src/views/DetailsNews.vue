<template>
  <v-container id="detail">
    <v-layout class="ma-2" row wrap>
      <h2 class="secondary--text mb-1">Details News</h2>
      <v-flex sm12 md12 lg12>
        <div>
          <img
            class="text-center rounded"
            width="100%"
            :src="this.$store.state.news.listNews[$route.params.id].urlToImage"
          />
        </div>
        <div class="text-center">
          <h3>
            {{ this.$store.state.news.listNews[$route.params.id].title }}
          </h3>
        </div>
        <div class="red--text d-flex justify-space-between">
          <p>
            {{ this.$store.state.news.listNews[$route.params.id].author }}
          </p>
          <p>
            {{ this.$store.state.news.listNews[$route.params.id].publishedAt }}
          </p>
        </div>
        <div>
          <p>
            {{ this.$store.state.news.listNews[$route.params.id].content }}
          </p>
        </div>
        <div>
          <span
            >lanjutkan membaca
            <a :href="this.$store.state.news.listNews[$route.params.id].url"
              >disini</a
            ></span
          >
        </div>
        <router-link to="/">
          <v-btn class="mt-3" color="primary">Kembali</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "DetailsNews",
};
</script>
<style>
</style>