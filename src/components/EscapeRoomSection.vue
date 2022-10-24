<template>
	<div>
		<div class="inner-container">
			<router-link :to="{ name: 'game_details', params: { id: activityprofile.id } }" class="game-card">
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
								<h5 id="escape_game">{{ activityprofile.title.slice(0,23) }}</h5>
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
			</router-link>
		</div>
	</div>
</template>

<script>
import { title } from "process";

export default {
	props: {
		companyprofiles: Array,
		activityprofile: Object,
		activityprofiles: Array,
	},
	data() {
		return {
			items: ["a", "b", "c", "d", "e", "f", "g", "h"],
		};
	},

	methods: {
		// titleshort(title) {
		// 	if (title) {
		// 		let text = title.slice(0, 23);
		// 		let x = document.querySelector("#escape_game");

		// 		if (title.length > 23) {
		// 			for (let i = 0; i < this.activityprofiles.length; i++) {
		// 			x.classList.add("hi" + i);
		// 			console.log(title.length, x);
					
		// 			}
		// 		} else {
		// 			console.log(title.length);
		// 		}
		// 	} else {
		// 		console.log("hi");
		// 	}

			// if(title){

			// 	for(let i= 0; i< this.activityprofiles.length;i++){

			// 	 document.getElementById('escape-game').classList.add("game1")

			// 	}
		// 	// }
		// },
	},
	mounted() {},
};
</script>

<style src="@/assets/css/components/EscapeRoomSection.scss" lang="scss">
//------------------------ Under this is shakil's css---------------------------
</style>
