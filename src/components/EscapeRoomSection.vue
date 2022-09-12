<template>
  <div>
    <div class="escape-container">
      <div class="body-container">
        <div class="container1">
          <div class="text">
            <h2>Top Escape Room And Fun Activities</h2>
            <h6>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</h6>
          </div>
          <div class="inner-container">
            <div class="game-card" v-for="activityprofile in activityprofiles" :key="activityprofile.id">
              <div class="header">
                <p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
                <p><i class="fa-solid fa-person-running"></i> In Person</p>
              </div>
              <div class="img-body">
                <router-link :to="{ name: 'game_details', params: { id: activityprofile.id } }">
                  <div v-if="activityprofile.main_image">
                    <img :src="activityprofile.main_image.image" alt="" />
                  </div>
                </router-link>
                <div class="card-body">
                  <div>
                    <router-link :to="{ name: 'game_details', params: { id: activityprofile.id } }">
                      <h5>{{ activityprofile.title }}</h5>
                    </router-link>
                    <div class="company-name">
                      <span>by </span>
                      <router-link :to="{ name: 'company_details', params: { id: activityprofile.activity.company.id } }">
                        <p>{{ activityprofile.activity.company.title }}</p>
                      </router-link>
                    </div>
                  </div>

                  <div class="card-footer">
                    <div v-for="companyprofile in companyprofiles" :key="companyprofile.id">
                      <div class="location" v-if="activityprofile.activity.company.id == companyprofile.company.id">
                        <span class="material-symbols-outlined"> location_on </span>
                        <p>{{ companyprofile.city }}, {{ companyprofile.state }}</p>
                      </div>
                    </div>
                    <p>
                      From <span>${{ activityprofile.price }}</span
                      >/Person
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-btn-container">
          <a class="footer-btn" href="#" @click="myfunc"> View more escape rooms</a>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["a", "b", "c", "d", "e", "f", "g", "h"],
      activityprofiles: [],
      companyprofiles: [],
    };
  },
  mounted() {
    fetch("http://159.203.95.1/activity/viewset/activityprofile/")
      .then((res) => res.json())
      .then((data) => (this.activityprofiles = data));

    fetch("http://159.203.95.1/company/viewset/company-profile/")
      .then((res) => res.json())
      .then((data) => (this.companyprofiles = data));
  },
  methods: {
    myfunc() {
      console.log(this.activityprofiles);
    },
  },
};
</script>

<style src="@/assets/css/components/EscapeRoomSection.scss" lang="scss">
//------------------------ Under this is shakil's css---------------------------

</style>
