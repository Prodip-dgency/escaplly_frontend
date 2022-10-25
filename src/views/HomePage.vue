<template>
	<div>
		<herosection />
		<uspsection :companies="companies" :activity_profiles="activity_profiles" />
		<div>
			<div class="escape-container">
				<div class="body-container">
					<div class="container1">
						<div class="text">
							<h2 class="page-title">Top Escape Room And Fun Activities</h2>
							<h6>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</h6>
						</div>
						<div class="escapegame__main">
							<div v-for="activityprofile in activeactivity" :key="activityprofile.id">
								<escape-room-section :activityprofile="activityprofile" :activityprofiles="activity_profiles" :companyprofiles="companies" />
							</div>
						</div>
					</div>
					<router-link :to="{ name: 'game_list' }" class="footer-btn-container" @click="loadmorepage">
						<a class="footer-btn" href="#"> View more escape rooms</a>
						<i class="fa-solid fa-chevron-right"></i>
					</router-link>
				</div>
			</div>
		</div>

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
					<router-link :to="{ name: 'company_list' }">View more escape rooms</router-link>
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
	data() {
		return {
			limit: 12
		};
	},

	methods: {
		loadmorepage() {},
	},
	computed:{
		activeactivity(){
			return this.limit ? this.activity_profiles.slice(0,this.limit) : this.activity_profiles;
		}
	}
};
</script>

<style src="@/assets/css/views/HomePage.scss" lang="scss"></style>
