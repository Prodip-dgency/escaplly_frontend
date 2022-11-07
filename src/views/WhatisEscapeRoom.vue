<template>
	<div class="whatis-escaperoom">
		<section>
			<BreadCrumb />
		</section>
		<section class="whatis-escaperoom__headersection g-section--structure">
			<div class="headsection-main body-container">
				<div class="headsection-main__text">
					<h2>Fun, Activities, Games, Escape The Real Life Through Fun!</h2>
					<p>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text.</p>
					<button>View All Escape Games <span class="material-symbols-outlined"> arrow_right_alt </span></button>
				</div>
				<div class="headsection-main__image">
					<img src="@/assets/img/Mask_group.jpg" alt="" />
				</div>
			</div>
		</section>
		<section class="whatis-escaperoom__about g-section--structure">
			<div class="aboutsection-main body-container">
				<div class="aboutsection-main__header">
					<h2>What is an Escape Room?</h2>
					<p>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
				</div>
				<div class="aboutsection-main__body">
					<div class="main-body-item">
						<h5><span>1</span>Choose a escape game</h5>
						<p>
							First, you'll pick which epic, themed escape room you want to play! Themes range from exciting and action-packed to silly and
							light-hearted. Popular themes include bank heists, prison breaks, and zombies.
						</p>
					</div>
					<div class="main-body-item">
						<h5><span>2</span>Meet Your Game Guide</h5>
						<p>
							After choosing a room, you'll meet your Game Guide. The Game Guide takes you to your room, explains the rules, and answers any questions
							before you begin your adventure.
						</p>
					</div>
					<div class="main-body-item">
						<h5><span>3</span>Enter The Game And Watch A Mission Video</h5>
						<p>
							Once you're ready to start the game, your team will watch a mission video. This video explains the world your team is now a part of,
							what you're trying to accomplish, and why you only have 60 minutes to do so!
						</p>
					</div>
					<div class="main-body-item">
						<h5><span>4</span>Escape The Room!</h5>
						<p>
							To escape, start by searching the room! Look for patterns or connections and communicate with your teammates! Together you can find
							solutions. You'll solve puzzles, uncover clues, and crack codes to progress through the game!
						</p>
					</div>
				</div>
			</div>
		</section>
    <section class="whatis-escaperoom__playinstruction g-section--structure">
      <div class="playinstruction-mainsection body-container">
        <div class="playinstruction-mainsection__header">
          <p class="header-title">HOW TO PLAY</p>
          <h2>Escape Room</h2>
          <p class="header-description">Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
        </div>
        <div class="playinstruction-mainsection__body">
           <div class="body-item">
            <img src="" alt="">
            <p class="body-item__title">Team Up</p>
            <p class="body-item__description">Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy.</p>
           </div>
           <div class="body-item">
            <img src="" alt="">
            <p class="body-item__title">Team Up</p>
            <p class="body-item__description">Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy.</p>
           </div>
           <div class="body-item">
            <img src="" alt="">
            <p class="body-item__title">Team Up</p>
            <p class="body-item__description">Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy.</p>
           </div>
           <div class="body-item">
            <img src="" alt="">
            <p class="body-item__title">Team Up</p>
            <p class="body-item__description">Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy.</p>
           </div>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
export default {
	components: {
		BreadCrumb,
	},
};
</script>

<style lang="scss" src="@/assets/css/views/WhatisEscapeRoom.scss"></style>
