<template>
  <div class="gamedetails-section">
    <section>
      <bread-crumb />
    </section>
    <section class="gamedetails-section__profile">
      <div class="profile-main body-container">
        <div class="profile-main__header">
          <div class="profile-img">
            <img v-if="activity.company_profile" :src="activity.company_profile.profile_image.image" alt="" />
          </div>
          <div class="profile-description">
            <div class="description-info">
              <p v-if="activity.company_profile">{{activity.company_profile.city}},{{activity.company_profile.state}} </p>
              <h2 class="page-title" v-if="activity.company_profile">{{ activity.company_profile.title }}</h2>
            </div>
            <button>Book This Game</button>
          </div>
        </div>
        <div class="profile-header__overview">
          <div id="defaultselected" class="overview__button active">
            <p>overview</p>
            <div></div>
          </div>
          <div class="overview__button">
            <p><a href="#games">games</a></p>
            <div></div>
          </div>
        </div>
        <div class="game-gallery">
          <div class="game-gallery__header g-section-header--structure">
            <p class="title-top--gray">STORYLINE</p>
            <h2 class="page-title">{{ activity.title }}</h2>
            <p class="g-description--light">
              {{activity.short_description}}
            </p>
          </div>
          <gallery :activity="activity"/>
        </div>
        <div class="storyline-details">
          <div class="storyline-details__story">
            <h4>Story about {{ activity.title }}</h4>
            <p>{{ activity.storyline }}...</p>
          </div>
          <div class="storyline-details__details">
            <div class="details-list">
              <div class="details-list__item">
                <span class="material-symbols-outlined"> monetization_on </span>
                <p>
                  Starts at <span>${{ activity.price }}/Person</span>
                </p>
              </div>
              <div class="details-list__item">
                <span class="material-symbols-outlined"> group </span>
                <p>Game Team Size: {{ activity.minimum_participant }}-{{ activity.maximum_participant }} Person</p>
              </div>
              <div class="details-list__item">
                <span class="material-symbols-outlined"> schedule </span>
                <p>Game Duration: {{ activity.duration }} Minutes</p>
              </div>
              <div class="details-list__item">
                <span class="material-symbols-outlined"> directions_run </span>
                <p>Game Difficulty: Moderate</p>
              </div>
              <div class="details-list__item">
                <span class="material-symbols-outlined"> diversity_3 </span>
                <p>Age: {{ activity.mimimum_age }}+</p>
              </div>
              <div class="details-list__item">
                <span class="material-symbols-outlined"> escalator_warning </span>
                <p>Accompany: Under {{ activity.accompany_age }} Years</p>
              </div>
              <div class="details-list__item">
                <span class="material-symbols-outlined"> location_on </span>
                <p>{{ activity.address }}</p>
              </div>
            </div>
          </div>
          <button class="gamedetails-page-btn">Book This Game</button>
        </div>
      </div>
    </section>
    <section class="game-guideline g-section--structure">
      <div class="game-guidelain__main body-container">
        <div class="guideline-header g-section-header--structure">
          <p class="title-top--gray">GUIDELINE</p>
          <h2 class="page-title">Escape From Alcatraz</h2>
          <p class="g-description--light">
            Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
          </p>
        </div>
        <img src="@/assets/img/Mask_group.jpg" alt="" />
        <div class="guideline-details">
          <ul>
            <li>Players aged above 18 need not be accompanied by an adult / parent / guardian.</li>
            <li>Players aged from 12 to 17 years need to be accompanied by Any Adult</li>
            <li>Other Restrictions: Children under 12 years old are not permitted</li>
          </ul>
        </div>
        <div class="footer-btn-container">
          <a class="footer-btn" href="#" @click="myfunc">See less</a>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
      </div>
    </section>
    <section class="g-section--structure">
      <escapelly-advantages />
    </section>
    <section id="games" class="g-section--structure">
      <available-game :ownGames="ownGames" />
    </section>
    <section class="escape-companies1 g-section--structure">
      <div class="escape-companies__main-box1 body-container">
        <div class="escape-companies-header1 g-section-header--structure">
          <h2 class="page-title">More Escape Room Companies</h2>
          <p class="escape-companies-header__description1 g-description--light">
            Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
          </p>
        </div>

        <top-companies :companies="companies" :activity_profiles="activity_profiles" />
        <router-link :to="{name: 'company_list'}" class="footer-btn-container">
          <a class="footer-btn" href=""> View more escape rooms</a>
          <i class="fa-solid fa-chevron-right"></i>
        </router-link>
      </div>
      {{ this.myfunc() }}
    </section>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
import Gallery from "@/components/companydetailspage/Gallery.vue";
import EscapellyAdvantages from "@/components/companydetailspage/EscapellyAdvantages.vue";
import AvailableGame from "@/components/companydetailspage/AvailableGame.vue";
import TopCompanies from "../components/TopCompanies.vue";

export default {
  props: {
    companies: Array,
    activity_profiles: Array,
  },
  data() {
    return {
      ownGames: [],
      otherGames: [],
      activity: {},
      // ownCompany: {},
    };
  },
  methods: {
    getActivity() {
      fetch(`http://159.203.95.1/activity/viewset/custom-activity-profile-api/${this.$route.params.id}/`)
        .then((response) => response.json())
        .then((data) => (this.activity = data));
    },
    // getOwnCompany() {
    //   for (let i = 0; i < this.companies.length; i++) {
    //     if (this.activity.activity) {
    //       if (this.companies[i].id == this.activity.company_profile.id) {
    //         this.ownCompany = this.companies[i];
    //       }
    //     }
    //   }
    // },

    myfunc() {
      // this.getOwnCompany();
      this.getOwnGames;
      this.getOtherGames;
      console.log();
    },
  },
  components: {
    BreadCrumb,
    Gallery,
    EscapellyAdvantages,
    AvailableGame,
    TopCompanies,
  },
  computed: {
    getOwnGames() {
      for (let i = 0; i < this.activity_profiles.length; i++) {
        if (this.activity != null) {
          if (this.activity.company_profile) {
            if (this.activity_profiles[i].activity.company == this.activity.company_profile.id) {
              this.ownGames.push(this.activity_profiles[i]);
            }
          }
        }
      }
    },
    // getOtherGames(){
    //   for(let i=0; i< this.ownGames.length; i++){
    //     if(this.ownGames[i].activity.id != this.$route.params.id){
    //       this.otherGames.push(this.ownGames[i])
    //     }
    //   }
    // }
  },
  mounted() {
    this.getActivity();
  },
};
</script>

<style src="@/assets/css/views/GameDetailsPage.scss" lang="scss"></style>
