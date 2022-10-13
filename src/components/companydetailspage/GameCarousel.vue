<template>
	<div class="company-game-card">
		<swiper
			:slidesPerView="3.05"
			:spaceBetween="30"
			:pagination="{
				clickable: true,
			}"
			:modules="modules"
			class=""
		>
			<swiper-slide v-for="game in ownGame" :key="game.id" v-show="desktopshow()">
				<div class="game-card__inner-container">
					<div class="card-img">
						<img v-if="game.main_image" :src="game.main_image.image" alt="" />
						<div class="card-img__footer">
							<div>
								<span class="material-symbols-outlined"> group </span>
								<p>{{ game.minimum_participant }}-{{ game.maximum_participant }}</p>
							</div>
							<div>
								<span class="material-symbols-outlined"> schedule </span>
								<p>{{ game.duration }} min</p>
							</div>
							<div>
								<span class="material-symbols-outlined"> directions_run </span>
								<p v-if="game.difficulty">{{ game.difficulty.title }}</p>
							</div>
							<div>
								<span class="material-symbols-outlined"> diversity_3 </span>
								<p>{{ game.mimimum_age }}+</p>
							</div>
						</div>
					</div>
					<div class="card-body">
						<div class="card-body__header">
							<p>ESCAPE ROOM</p>
							<h4>{{ game.title }}</h4>
							<p class="header-description" :class="active_class"><span id="storyline">{{ game.storyline.slice(0,100) }}</span> <span @click="textCollaps(game.storyline)">...{{ this.more_btn }}</span></p>
						</div>
						<div class="card-body__footer">
							<div class="footer-header">
								<div class="footer-header__suspence footer-header__list">
									<span class="material-symbols-outlined"> tips_and_updates </span>
									<p>Suspense/ Detective</p>
								</div>
								<div class="footer-header__person footer-header__list">
									<span class="material-symbols-outlined"> directions_run </span>
									<p>In Person</p>
								</div>
								<div class="footer-header__price footer-header__list">
									<span class="material-symbols-outlined"> monetization_on </span>
									<p>
										Starts at <span class="list-price--color">${{ game.price }}/Person</span>
									</p>
								</div>
							</div>
							<div class="footer-btn">
								<button>Book Now</button>
								<a href="#">Learn more <span class="material-symbols-outlined"> keyboard_arrow_right </span></a>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<!-- <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide> -->
		</swiper>

		<!-- mobile-responsive -->
		<div class="game-carousel-mobileresponsive" v-for="item in 6" :key="item">
			<div class="game-card__inner-container" v-show="mobileshow()">
				<div class="card-img">
					<img src="@/assets/img/cardimg1.jpg" alt="" />
					<div class="card-img__footer">
						<div>
							<span class="material-symbols-outlined"> group </span>
							<p>2-8</p>
						</div>
						<div>
							<span class="material-symbols-outlined"> schedule </span>
							<p>60 min</p>
						</div>
						<div>
							<span class="material-symbols-outlined"> directions_run </span>
							<p>Medium</p>
						</div>
						<div>
							<span class="material-symbols-outlined"> diversity_3 </span>
							<p>18+</p>
						</div>
					</div>
				</div>
				<div class="card-body">
					<div class="card-body__header">
						<p>ESCAPE ROOM</p>
						<h4>Zombi Apocalypse</h4>
						<p class="header-description">
							Escape room events and parties are perfect for is an birthday parties,building lorem... <span>more</span>
						</p>
					</div>
					<div class="card-body__footer">
						<div class="footer-header">
							<div class="footer-header__suspence footer-header__list">
								<span class="material-symbols-outlined"> tips_and_updates </span>
								<p>Suspense/ Detective</p>
							</div>
							<div class="footer-header__person footer-header__list">
								<span class="material-symbols-outlined"> directions_run </span>
								<p>In Person</p>
							</div>
							<div class="footer-header__price footer-header__list">
								<span class="material-symbols-outlined"> monetization_on </span>
								<p>Starts at <span class="list-price--color">$29/Person</span></p>
							</div>
						</div>
						<div class="footer-btn">
							<button>Book Now</button>
							<a href="#">Learn more <span class="material-symbols-outlined"> keyboard_arrow_right </span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default {
	data() {
		return {
			more_btn: 'more' ,
			active_class: ''
		}
	},	
	props: {
		ownGame: Array,
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination],
		};
	},

	methods: {
		textCollaps(storyline) {
			let text = document.getElementById('storyline').innerHTML
			console.log(text.length)

			if(text.length > 100) {
				document.getElementById('storyline').innerHTML = text.slice(0,100)
				this.more_btn = 'more'
				this.active_class = ''
			} else {
				document.getElementById('storyline').innerHTML = storyline
				this.more_btn = 'less';
				this.active_class = 'active'

			}

		},
		mobileshow() {
			let w = screen.width;

			if (w < 480) {
				return true;
			} else {
				return false;
			}
		},
		desktopshow() {
			let w = screen.width;
			if (w > 480) {
				return true;
			} else {
				return false;
			}
		},
	},
	mounted() {
	}
};
</script>

<style src="@/assets/css/components/companydetailspage/GameCard.scss" lang="scss"></style>
