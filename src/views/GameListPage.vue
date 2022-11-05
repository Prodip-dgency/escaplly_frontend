<template>
	<div class="game-list">
		<section>
			<bread-crumb />
		</section>
		<section class="all-gamesection">
			<div class="all-gamesection__wrapper body-container">
				<div class="gamelist-header">
					<h2 class="page-title">All Escape games</h2>
					<p class="page-description">
						Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
					</p>
				</div>
				<div class="gamelist-allgame">
					<div class="gamelist-allgame__card" v-for="activityprofile in computedactivity" :key="activityprofile.id">
						<escape-room-section :activityprofile="activityprofile" :companyprofiles="companies" />
					</div>
				</div>
				<div class="footer-btn-container" @click.prevent="limited()">
					<a class="footer-btn" href=""> View more escape rooms</a>
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
import EscapeRoomSection from "@/components/EscapeRoomSection.vue";

export default {
	props: {
		companies: Array,
		custom_activities: Array
	},
	components: {
		BreadCrumb,
		EscapeRoomSection,
	},
  data(){
    return{
      limit: 8 ,
    }
  },
  methods:{
    limited(){
     this.limit = this.limit+4;
	 
     
    }
  },
  computed:{
    computedactivity(){
      return this.limit ? this.custom_activities.slice(0,this.limit) : this.custom_activities
    }
  }
};
</script>

<style src="@/assets/css/views/GameListPage.scss" lang="scss"></style>
