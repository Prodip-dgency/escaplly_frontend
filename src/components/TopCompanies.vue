<template>
	<div>
		<div v-if="this.companies.length">
			<Carousel :settings="settings" v-show="desktopshow()">
				<Slide v-for="company in this.companies" :key="company.id">
					<div class="slider-container">
						<company :company="company" :companies="companies" :activity_profiles="activity_profiles"/>
					</div>
				</Slide>
				<template #addons>
					<!-- <Navigation /> -->
					<Pagination />
				</template>
			</Carousel>
			<!-- mobile-responsive -->
			<div  v-for="company in this.companies" :key="company.id" v-show="mobileshow()">
				<company :company="company" :companies="companies" :activity_profiles="activity_profiles"/>
			</div>
		</div>

	</div>

	<!-- This is {{ this.activity_profiles }} -->
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Company from "./companylistpage/Company.vue"

export default {
	// name: "Carousel",
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination,
		Company
	},
	props: {
		companies: Array,
		activity_profiles: Array,
	},
	data() {
		return {
			// items: ["a", "b", "c", "d", "e", "f", "g", "h"],
			settings: {
				itemsToShow: 4,
				itemsToScroll: 1,
				transition: 700,
				autoplay: 3000,
				wrapAround: true,
				itemToVisible:3
			},
		};
	},
	mounted() {
		let w = screen.width;
		if (w > 730 && w <= 1024) {
			this.settings.itemsToShow = 2.3;
		} else {
			if (w > 480 && w <= 730) {
				this.settings.itemsToShow = 1.5;
			}
		}
	},
	methods: {
		mobileshow() {
			let w = screen.width;
            console.log(w);
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

<style src="@/assets/css/components/TopCompanies.scss" lang="scss"></style>
