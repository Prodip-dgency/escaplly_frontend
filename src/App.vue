<template>
	<div>
		<navsection />

		<router-view :companies="companies" :activity_profiles="activity_profiles" />

		<footer-section />
	</div>
</template>

<script>
import Navsection from "./components/Navsection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
	components: {
		Navsection,
		FooterSection,
	},

	data() {
		return {
			companies: [],
			activity_profiles: [],
		};
	},


	mounted() {
		fetch("http://159.203.95.1/company/viewset/company-profile/")
			.then((res) => res.json())
			.then((data) => (this.companies = data));

		fetch("http://159.203.95.1/activity/viewset/activityprofile/")
			.then((res) => res.json())
			.then((data) => (this.activity_profiles = data));
	},
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
