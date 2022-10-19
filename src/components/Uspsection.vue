<template>
  <div class="usp-container">
    <!-- <div class="container body-container"> -->
    <div class="usp-container__main">
      <div class="first-section text-section">
        <h3>{{ country_count() }}</h3>
        <h4>Countries</h4>
      </div>
      <div class="second-section text-section">
        <h3>{{ this.companies.length }}+</h3>
        <h4>Companies</h4>
      </div>
      <div class="third-section text-section">
        <h3>{{ this.activity_profiles.length }}+</h3>
        <h4>Games</h4>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    companies: Array,
    activity_profiles: Array,
  },

  methods: {
    country_count() {
      if (this.companies) {
        let countries = Array();
        for (let x = 0; x < (this.companies).length; x++) {
          if (!countries.length) {
            countries.push(this.companies[x].country);
          } else {
            if (countries.indexOf(this.companies[x].country) == -1) {
              countries.push(this.companies[x].country);
            }
          }
        }
        return countries.length
      }
    },
  },

};
</script>

<style src="@/assets/css/components/Uspsection.scss" lang="scss" scoped>

</style>
