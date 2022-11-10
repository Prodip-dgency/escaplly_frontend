<template>
	<div class="about-escaplly">
		<section>
			<BreadCrumbVue />
		</section>
		<section class="about-escaplly__aboutsection">
			<div class="aboutsection-main body-container">
				<div class="g-section-header--structure">
					<h1 class="page-title">About Escaplly</h1>
					<p class="about-description">
						Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
					</p>
					<div class="g-about-btn">
						<button>Become our partner <span class="material-symbols-outlined"> arrow_right_alt </span></button>
					</div>
				</div>
			</div>
		</section>
		<section class="g-section--structure">
			<div class="escapelly-journey body-container">
				<div class="escapelly-journey__text-img">
					<div class="journey-text">
						<h4>As Escaplly Our Journey Start With Amazing Idea...</h4>
						<p>
							Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. Lorem
							Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. Lorem Ipsum is
							simply dummy text of the text a Lorem Ipsum is simply.
						</p>
					</div>
					<img src="@/assets/img/mask_group.png" alt="" />
				</div>
				<div class="escapelly-journey__text-img">
					<div class="journey-text">
						<h4>Leadership And Thought Processing For Escaplly</h4>
						<p>
							Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. simply
							dummy text of the text a lpsum simply text for dummy only. Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy
							text of the text a lpsum simply text for dummy only. Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of
							the text.
						</p>
					</div>
					<img src="@/assets/img/Mask_group_2.png" alt="" />
				</div>
			</div>
		</section>
		<section class="mission-section g-section--structure">
			<div class="mission-section__main body-container">
				<div class="main-section-header">
					<h2>Our Mission And Vision</h2>
					<p>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
				</div>
				<div class="main-section-body">
					<div class="main-section-body__card">
						<div class="card-firstchild">
							<img src="@/assets/img/destination.gif" alt="" />
							<h4>Destination</h4>
							<p>
								Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. lpsum
								simply text for dummy
							</p>
						</div>
						<div class="card-firstchild">
							<img src="@/assets/img/destination.gif" alt="" />
							<h4>Work for Escape Room</h4>
							<p>
								Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. lpsum
								simply text for dummy
							</p>
						</div>
						<div class="card-firstchild">
							<img src="@/assets/img/destination.gif" alt="" />
							<h4>Work For Players</h4>
							<p>
								Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. lpsum
								simply text for dummy
							</p>
						</div>
					</div>
					<div class="main-section-body__card">
						<div class="card-firstchild">
							<img src="@/assets/img/shield.gif" alt="" />
							<h4>Best Value For Owners</h4>
							<p>
								Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. lpsum
								simply text for dummy
							</p>
						</div>
						<div class="card-firstchild">
							<img src="@/assets/img/darts.gif" alt="" />
							<h4>Best Value For Gamers</h4>
							<p>
								Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only. lpsum
								simply text for dummy
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="escapelly-worksection g-section--structure">
			<div class="escapelly-worksection__main body-container">
				<div class="main-content-inside">
					<div class="main-content-inside__text">
						<h3>Escaplly Work For...</h3>
						<p>
							escape room owners and players all over the world. A Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
						</p>
						<div class="g-about-btn">
							<button>Become our partner <span class="material-symbols-outlined"> arrow_right_alt </span></button>
						</div>
					</div>
					<img src="@/assets/img/CTA-Section.png" alt="" />
				</div>
			</div>
		</section>
		<section class="frequently-asked g-section--structure">
			<FrequentlyAskedQuestion />
		</section>
	</div>
</template>

<script>
import BreadCrumbVue from "@/components/BreadCrumb.vue";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestion.vue";
export default {
	components: {
		BreadCrumbVue,
		FrequentlyAskedQuestion
	},


};
</script>

<style lang="scss" src="@/assets/css/views/AboutPage.scss"></style>
