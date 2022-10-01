<template>
  <div class="gallery-tab">
    <div class="gallery-tab__button-wrapper">
      <button id="defaultOpen" class="gallery-tab__buttons" @click="openTab($event, 'photoTab')">Photo</button>
      <button class="gallery-tab__buttons" @click="openTab($event, 'videoTab')">Video</button>
      <button class="gallery-tab__buttons" @click="openTab($event, '360Tab')">360</button>
    </div>
    <div class="gallery-tab__content-wrapper">
      <div id="photoTab" class="gallery-tab__content">
        <image-gallery-slider />
      </div>
      <div id="videoTab" class="gallery-tab__content">
        <img src="../../assets/img/companycard2.jpg" alt="">
      </div>
      <div id="360Tab" class="gallery-tab__content">
        <img src="@/assets/img/companycard4.jpg" alt="">
      </div>
    </div>    
  </div>
</template>

<script>
import ImageGallerySlider from "./ImageGallerySlider.vue";
export default {
  components: {
    ImageGallerySlider,
  },
  methods: {
    openTab(e, tabname){
      let tabcontents = document.getElementsByClassName("gallery-tab__content")
      for(let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none"
      }
      document.getElementById(tabname).style.display = "block"
      let buttons = document.getElementsByClassName("gallery-tab__buttons")
      for(let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
      }
      e.currentTarget.className += " active"
    }
  },
  mounted() {
    document.getElementById("defaultOpen").click();
  }

};
</script>

<style lang="scss" src="../../assets/css/components/companylistpage/Gallery.scss"></style>
