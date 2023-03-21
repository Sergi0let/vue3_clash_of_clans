<template>
  <div class="wrapper">
    <div v-if="item" class="item">
      <img :src="item.img" :alt="item.desc" />
      <h1 class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <br />

      <CardStats :item="item" />

      <br />
      <div>
        <router-link to="/" class="btn btnPrimary">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from '@/components/UI/CardStats';
import items from '@/seeders/items.js';

// how to redirect to 404 page if item not found
// https://stackoverflow.com/questions/53123409/how-to-redirect-to-404-page-in-vue-router

export default {
  data() {
    return { item: null };
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((item) => item.alias === alias);
    if (!item) this.$router.push('/notFound');
    this.item = item;
  },
  components: {
    CardStats,
  },
};
</script>
