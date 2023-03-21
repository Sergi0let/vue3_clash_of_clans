<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.level} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
      >
        <template v-slot:body>{{ item.descr }}</template>
        <template v-slot:footer>
          <CardStats :item="item" />
        </template>
      </Card>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import CardStats from '@/components/UI/CardStats';
import items from '@/seeders/items.js';
import TheCard from '@/components/UI/TheCard';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  components: {
    Card: TheCard,
    Carousel,
    Slide,
    CardStats,
    Navigation,
  },
  data() {
    return {
      items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center',
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        768: {
          itemsToShow: 2,
        },
        1024: {
          itemsToShow: 3,
        },
      },
    };
  },
};
</script>
