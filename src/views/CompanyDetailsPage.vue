<template>
  <div class="company-detail">
    <section >
      <bread-crumb />
      <!-- <span class="crumb">Home </span><span class="crumb">> West Nyack, NY </span><span>> Mystery Room</span> -->
    </section>
    <section class="profile-detail">
      <div v-if="companyDetails.cover_image">
        <img :src="companyDetails.cover_image.image" alt="" />
      </div>
      <div class="profile-header body-container">
        <div class="profile-header__img">
          <div v-if="companyDetails.profile_image">
            <img :src="companyDetails.profile_image.image" alt="" />
          </div>
        </div>
        <div class="profile-header__details">
          <div class="profile-header-info">
            <p class="profile-header-info__location">{{ companyDetails.city }}, {{ companyDetails.state }}</p>
            <h2>{{ companyDetails.title }}</h2>
            <p>Available escape game: 9</p>
          </div>
          <button>Book Now</button>
        </div>
        <div class="profile-header__overview">
          <div id="defaultselected" class="overview__button" @click="selectButton($event)">
            <p>overview</p>
            <div></div>
          </div>
          <div class="overview__button" @click="selectButton($event)">
            <p><a href="#games">games</a></p>
            <div></div>
          </div>
        </div>
        <div class="profile-header__derection-call">
          <div class="profile-header-cta">
            <div class="cta__location"><i class="fa-solid fa-location-dot"></i></div>
            <p>DERECTION</p>
          </div>
          <div class="profile-header-cta">
            <div class="cta__location"><i class="fa-solid fa-phone"></i></div>
            <p>CALL</p>
          </div>
        </div>
      </div>
    </section>
    <section class="company-info">
      <div class="body-container">
        <div class="company-info__about">
          <p class="title-top--gray">MYSTERY ROOM</p>
          <h2>About</h2>
          <h4>What is Mystery Room?</h4>
          <p class="about-text">
            Is simply dummy text of the printing and is the typesetti Jum has been the industry's standard dummy tex ever since the 150s. Has been the
            industry's standard dummy tex ever since the 150s... Has been the industry's standard dummy tex ever since the 150s. simply dummy text of
            the printing and is the typesetti Jum has been the industry's standard dummy tex ever since the 150s. Has been the industry's...
          </p>
        </div>
        <div class="company-info__details">
          <p class="title-top--gray local-g--structure">MYSTERY ROOM</p>
          <h2 class="local-g--structure">Details</h2>
          <img src="" alt="" />
          <div class="location-web details-item">
            <div class="location-web__location details-item__single item--display">
              <span class="material-symbols-outlined"> location_on </span>
              <p>{{companyDetails.address_line}}</p>
            </div>
            <div class="location-web__web details-item__single item--display">
              <span class="material-symbols-outlined"> language </span>
              <p>{{companyDetails.website_url}}</p>
            </div>
          </div>
          <div class="time-contact details-item">
            <div class="time-contact__time details-item__single item--display">
              <span class="material-symbols-outlined"> schedule </span>
              <p>Closed ⋅ Opens 10AM</p>
            </div>
            <div class="time-contact__contact details-item__single item--display">
              <i class="fa-solid fa-phone"></i>
              <p>{{companyDetails.phone_number}}</p>
            </div>
          </div>
        </div>
        <div class="company-info__highlights">
          <p class="title-top--gray local-g--structure">MYSTERY ROOM</p>
          <h2 class="local-g--structure">Highlights</h2>
          <div class="games-age highlights-item">
            <div class="games-age__games highlights-item__single item--display">
              <span class="material-symbols-outlined"> directions_run </span>
              <p>Games Available: 8 Escape Rooms</p>
            </div>
            <div class="games-age__age highlights-item__single item--display">
              <span class="material-symbols-outlined"> diversity_3 </span>
              <p>Age: 16+</p>
            </div>
          </div>
          <div class="team-accompany highlights-item">
            <div class="team-accompany__team highlights-item__single item--display">
              <span class="material-symbols-outlined"> group </span>
              <p>Game Team Size: 2-10 Person</p>
            </div>
            <div class="team-accompany__accompany highlights-item__single item--display">
              <span class="material-symbols-outlined"> escalator_warning </span>
              <p>Accompany: 8+</p>
            </div>
          </div>
          <div class="game-duration highlights-item">
            <div class="game-duration__duration highlights-item__single item--display">
              <span class="material-symbols-outlined"> schedule </span>
              <p>Game Duration: 60 Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="escapelly-advantages g-section--structure">
      <div class="escapelly-advantages__main body-container">
        <div class="advantages-innerbox">
          <h2>Escaplly Advantages</h2>
          <p class="g-description--light">
            Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
          </p>
          <div class="advantages-innerbox__iconbox">
            <div class="find-easily iconbox--center">
              <span class="material-symbols-outlined"> travel_explore </span>
              <h5>Find Easily</h5>
            </div>
            <div class="get-deals iconbox--center">
              <i class="fa-solid fa-handshake"></i>
              <h5>Get Deals</h5>
            </div>
            <div class="book-fast iconbox--center">
              <i class="fa-regular fa-calendar-days"></i>
              <h5>Book Fast</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="games" class="available-game g-section--structure">
      <div class="available-game__main body-container">
        <div class="header-box g-section-header--structure">
          <p class="title-top--gray">MYSTERY ROOM</p>
          <h2>4 Escape Game Available</h2>
          <p class="g-description--light">
            Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
          </p>
        </div>
        <div class="game-card">
          <company-carousel />
        </div>
      </div>
    </section>
    <section class="gallery g-section--structure">
      <div class="gallery__main-box body-container">
        <div class="gallery-header g-section-header--structure">
          <p class="title-top--gray">MYSTERY ROOM</p>
          <h2>Gallery</h2>
          <p class="g-description--light">
            Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
          </p>
        </div>
        <gallery />
      </div>
    </section>
    <section class="escape-companies g-section--structure">
      <div class="escape-companies__main-box body-container">
        <div class="escape-companies-header g-section-header--structure">
          <h2>More Escape Room Companies</h2>
          <p class="escape-companies-header__description g-description--light">
            Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
          </p>
        </div>

        <top-companies :companies="companies" :activity_profiles="activity_profiles" />
        <div class="footer-btn-container">
          <a class="footer-btn" href="#" @click="myfunc"> View more escape rooms</a>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from "../components/companydetailspage/Gallery.vue";
import TopCompanies from "../components/TopCompanies.vue";
import CompanyCarousel from "@/components/companydetailspage/GameCarousel.vue";
import BreadCrumb from "@/components/BreadCrumb.vue"

export default {
  props: {
    companies: Array,
    activity_profiles: Array,
  },
  components: {
    Gallery,
    TopCompanies,
    CompanyCarousel,
    BreadCrumb
  },

  data() {
    return {
      companyDetails: [],
      companyProfileId: this.$route.params.id,
    };
  },

  methods: {
    selectButton(e) {
      let buttons = document.getElementsByClassName("overview__button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace("active", "");
      }
      e.currentTarget.className += " active";
      console.log(this.companyDetails);
    },

    getCompanyDetails() {
      fetch("http://159.203.95.1/company/viewset/company-profile/" + this.companyProfileId + "/")
        .then((result) => result.json())
        .then((data) => (this.companyDetails = data));
    },
  },

  mounted() {
    this.getCompanyDetails();
    document.getElementById("defaultselected").click();
  },
};
</script>

<style src="@/assets/css/views/CompanyDetailsPage.scss" lang="scss"></style>
