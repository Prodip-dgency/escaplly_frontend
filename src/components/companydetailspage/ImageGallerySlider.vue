<template>
  <div class="gallery-image-slider">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
      
    >


      <swiper-slide v-for="item in this.activity.gallery"><img :src="item.image" /></swiper-slide>
      
      <!-- <swiper-slide><img src="@/assets/img/companycard1.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/companycard2.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/companycard4.jpg" /></swiper-slide> -->
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in this.activity.gallery"><img class="galler__img" :src="item.image" /></swiper-slide>
      <!-- <swiper-slide><img class="galler__img" src="@/assets/img/companycard1.jpg" /></swiper-slide>
      <swiper-slide><img class="galler__img" src="@/assets/img/companycard2.jpg" /></swiper-slide>
      <swiper-slide><img class="galler__img" src="@/assets/img/companycard4.jpg" /></swiper-slide> -->
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import {FreeMode,Navigation,Thumbs} from 'swiper';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props:{
    activity: Object
  },
  data() {
    return {
      thumbsSwiper: null
    }

  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },

  },
  setup() {
    
    return {
      modules: [FreeMode,Navigation,Thumbs],
    };
  }
}
</script>

<style lang="scss" src="../../assets/css/components/companydetailspage/ImageGallerySlider.scss"></style>

