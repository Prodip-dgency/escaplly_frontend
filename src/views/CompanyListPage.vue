<template>
	<div class="company-list">
		<section class="bread-crumb body-container">
			<span class="bread-crumb__item">
				<a href="#"> Home </a>
				<i class="fa-solid fa-chevron-right"></i>
				<a href="#"> West Nyack, NY </a>
			</span>
			<span class="bread-crumb__item is-active">
				<a href="#"><i class="fa-solid fa-chevron-right"></i> Company List</a>
			</span>
			<!-- <span class="crumb">Home </span><span class="crumb">> West Nyack, NY </span><span>> Mystery Room</span> -->
		</section>
		<section class="all-companysection">
			<div class="all-companysection__container body-container">
				<div class="companysection-header">
					<h2>All Escape Room Companies</h2>
					<p>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
				</div>
				<div class="companysection-companylist" @click="myfunc" v-if="this.companies.length">
					<div v-for="company in companies" :key="company" class="companysection-companylist__card">
						<company :company="company" :companies="companies" :activity_profiles="activity_profiles" />
					</div>
				</div>
				<div class="footer-btn-container">
					<a class="footer-btn" href="#" @click="myfunc"> Load more escape room companies</a>
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Company from "../components/companylistpage/Company.vue";
export default {
	props: {
		companies: Array,
		activity_profiles: Array,
	},
	components: {
		Company,
	},
	methods: {
		myfunc() {
			console.log(this.companies);
		},
	},
};
</script>

<style src="@/assets/css/views/CompanyListPage.scss" lang="scss"></style>
