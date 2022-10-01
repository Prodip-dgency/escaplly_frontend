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
      <swiper-slide><img src="@/assets/img/companycard3.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/companycard1.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/companycard2.jpg" /></swiper-slide>
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
      <swiper-slide><img src="@/assets/img/companycard3.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/companycard1.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/companycard2.jpg" /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {FreeMode,Navigation,Thumbs} from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let thumbsSwiper = null;

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper = swiper;
    };

    return {

      modules: [FreeMode,Navigation,Thumbs],
    };
  }
};
</script>

<style></style>
<style lang="scss" src="../../assets/css/components/companylistpage/ImageGallerySlider.scss"></style>
