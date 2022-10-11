<template>
	<div class="available-game">
		<div class="available-game__main body-container">
			<div class="header-box g-section-header--structure">
				<p class="title-top--gray">MYSTERY ROOM</p>
				<h2 class="page-title">4 Escape Game Available</h2>
				<p class="g-description--light">
					Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
				</p>
			</div>
			<div class="game-card">
				<game-carousel />
			</div>
		</div>
	</div>
</template>

<script>
import GameCarousel from "@/components/companydetailspage/GameCarousel.vue";
export default {
    components: {
        GameCarousel,
    }
};
</script>

<style></style>
