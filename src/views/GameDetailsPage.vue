<template>
	<div class="gamedetails-section">
		<section>
			<bread-crumb />
		</section>
		<section class="gamedetails-section__profile">
			<div class="profile-main body-container">
				<div class="profile-main__header">
					<div class="profile-img">
						<img src="@/assets/img/companycard1.jpg" alt="" />
					</div>
					<div class="profile-description">
						<div class="description-info">
							<p>WEST NYACK, NY</p>
							<h2 class="page-title">Mystery Room</h2>
						</div>
						<button>Book This Game</button>
					</div>
				</div>
        <div class="profile-header__overview">
          <div id="defaultselected" class="overview__button active">
            <p>overview</p>
            <div></div>
          </div>
          <div class="overview__button">
            <p><a href="#games">games</a></p>
            <div></div>
          </div>
        </div>
        <div class="game-gallery">
          <div class="game-gallery__header g-section-header--structure">
            <p class="title-top--gray">STORYLINE</p>
            <h2 class="page-title">Escape From Alcatraz</h2>
            <p class="g-description--light">Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
          </div>
          <gallery />
        </div>
			</div>
		</section>
	</div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
import Gallery from "@/components/companydetailspage/Gallery.vue"
export default {
	components: {
		BreadCrumb,
    Gallery
	},
};
</script>

<style src="@/assets/css/views/GameDetailsPage.scss" lang="scss"></style>
