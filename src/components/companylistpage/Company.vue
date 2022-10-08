<template>
	<div class="company-game-card"  v-if="company">
		<div class="game-card__main" v-show="desktopshow()">
			<div class="header">
				<p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
				<p><i class="fa-solid fa-person-running"></i> In Person</p>
			</div>
			<router-link :to="{ name: 'company_details', params: { id: company.id } }">
				<img :src="company.profile_image.image" alt="" />
			</router-link>
			<div class="card-body">
				<div class="card-header">
					<router-link :to="{ name: 'company_details', params: { id: company.id } }">
						<h5 >{{ company.title }}</h5>
					</router-link>
					<div class="available-game">
						<p>Available escape game: {{ activityFunctions(company).activity_count }}</p>
					</div>
				</div>
				<div class="card-footer">
					<div class="location">
						<span class="material-symbols-outlined"> location_on </span>
						<p>{{ company.state }}, {{ company.city }}</p>
					</div>
					<div class="footer-text">
						<p>
							From <span class="game_price">${{ activityFunctions(company).lowest_price }}</span
							>/Person
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Mobile responsive section -->
		<div class="mobile-card" v-show="mobileshow()" >
			<div class="header">
				<p><i class="fa-regular fa-calendar-check"></i> Book Here</p>
				<p><i class="fa-solid fa-person-running"></i> In Person</p>
			</div>
			<div class="img-body">
				<img :src="company.profile_image.image" alt="" />
				<div class="card-body">
					<div class="card-header">
						<h5>{{ company.title }}</h5>
						<div class="available-game">
							<p>Available escape game: {{ activityFunctions(company).activity_count }}</p>
						</div>
					</div>

					<div class="card-footer">
						<div class="location">
							<span class="material-symbols-outlined"> location_on </span>
							<p>{{ company.state }}, {{ company.city }}</p>
						</div>
						<div class="footer-text">
							<p>
								From <span>${{ activityFunctions(company).lowest_price }}</span
								>/Person
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	props: {
		companies: Array,
		activity_profiles: Array,
		company:Object,
	},
	methods: {
		companyDetails() {
			console.log(this.companies);
		},

		activityFunctions(icompany) {
			let activity_list = [];
			for (let x = 0; x < this.activity_profiles.length; x++) {
				if (this.activity_profiles[x].activity.company.id == icompany.company.id) {
					activity_list.push(this.activity_profiles[x]);
				}
			}
			let lowest_price = null;
			for (let y = 0; y < activity_list.length; y++) {
				if (!lowest_price) {
					lowest_price = activity_list[y].price;
				} else {
					if (activity_list[y].price < lowest_price) {
						lowest_price = activity_list[y].price;
					}
				}
			}
			let activity_count = activity_list.length;
			return {
				activity_count: activity_count,
				lowest_price: lowest_price,
			};
		},
		mobileshow() {
			let w = screen.width;
			if (w <= 480) {
				return true;
			} else {
				return false;
			}
		},
		desktopshow(){
			let w = screen.width
			if(w>480){
				return true
			}else{
				return false
			}
		}
	},
};
</script>

<style src="@/assets/css/components/companylistpage/Company.scss" lang="scss"></style>
