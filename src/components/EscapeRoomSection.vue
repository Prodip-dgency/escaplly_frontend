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
								<h5 id="escape_game">{{ this.titleExcerpt(activityprofile.title, 23, '...') }}</h5>
							</router-link>
							<div class="company-name">
								<span>by </span>
								<router-link :to="{ name: 'company_details', params: { id: activityprofile.company_profile.id } }">
									<p>{{ activityprofile.company_profile.title }}</p>
								</router-link>
							</div>
						</div>

						<div class="card-footer">
							<div >
								<div class="location" v-if=" activityprofile.company_profile">
									<span class="material-symbols-outlined"> location_on </span>
									<p>{{ activityprofile.company_profile.city }}, {{  activityprofile.company_profile.state }}</p>
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
export default {
	props: {
		companyprofiles: Array,
		activityprofile: Object,
	},
	methods: {
		titleExcerpt(title, length, symbol) {
			let new_title = title
			if(title.length > length) {
				new_title =  title.slice(0, length-symbol.length) + symbol
			}	
			return new_title
		}
	},
};
</script>

<style src="@/assets/css/components/EscapeRoomSection.scss" lang="scss"></style>
