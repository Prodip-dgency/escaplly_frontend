<template>
	<div>
		<herosection />
		<uspsection :companies="companies" :activity_profiles="activity_profiles" />
		<escape-room-section />
		<curious-section />
		<div class="companies-container">
			<div class="container body-container">
				<div class="header-text">
					<h2 class="page-title">Top Escape Room Companies</h2>
					<h6 class="page-description">
						Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
					</h6>
				</div>

				<top-companies :companies="companies" :activity_profiles="activity_profiles" />

				<div class="footer-btn-container">
					<a class="footer-btn" href="#" @click="myfunc"> View more escape rooms</a>
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
		</div>
		<mission-vision />
	</div>
</template>

<script>
import Herosection from "@/components/Herosection.vue";
import Uspsection from "../components/Uspsection.vue";
import EscapeRoomSection from "../components/EscapeRoomSection.vue";
import CuriousSection from "../components/CuriousSection.vue";
import TopCompanies from "../components/TopCompanies.vue";
import MissionVision from "../components/MissionVision.vue";

export default {
	props: {
		companies: Array,
		activity_profiles: Array,
	},
	components: {
		Herosection,
		Uspsection,
		EscapeRoomSection,
		CuriousSection,
		TopCompanies,
		MissionVision,
	},

	methods: {},

};
</script>

<style src="@/assets/css/views/HomePage.scss" lang="scss"></style>
