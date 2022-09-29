<template>
	<div class="company-game-card">
		<Carousel :settings="settings">
			<Slide v-for="item in 6" :key="item">
				<div class="game-card__inner-container" >
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
			</Slide>
			<template #addons>
				<!-- <Navigation /> -->
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
	name: 'slider',
	components: {
		Carousel,
		Slide,
		Pagination,
	},
	data() {
		return {
			// items: [a""",b,c]
			settings: {
				itemsToShow: 3.3,
				itemsToScroll: 1,
				transition: 700,
			},
		};
	},
};
</script>

<style src="@/assets/css/components/companylistpage/GameCard.scss" lang="scss"></style>
