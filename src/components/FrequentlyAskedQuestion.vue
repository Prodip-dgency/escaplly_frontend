<template>
   <div class="frequently-asked__main body-container">
				<div class="asked-main-header">
					<h2>Frequently Asked Questions</h2>
					<p>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
				</div>
				<div class="asked-question">
					<p @click="itemshow($event)" class="asked-question__question">
						What is Escaplly? <span class="material-symbols-outlined" v-show="active"> expand_more </span>
						<span class="material-symbols-outlined" v-show="!active"> expand_less </span>
					</p>
					<p v-show="show" class="asked-question__ans">
						We love photos for their ability to express emotions and meaning - that's why we deliver the best tools to bring them fully to life. We
						can achieve more through working collaboratively and leveraging each other's strengths.
					</p>
				</div>
				<div class="asked-question">
					<p @click="itemshow($event)" class="asked-question__question">How to get started as a new client? <span class="material-symbols-outlined" v-show="active"> expand_more </span>
						<span class="material-symbols-outlined" v-show="!active"> expand_less </span></p>
					<p v-show="show" class="asked-question__ans">
						We love photos for their ability to express emotions and meaning - that's why we deliver the best tools to bring them fully to life. We
						can achieve more through working collaboratively and leveraging each other's strengths.
					</p>
				</div>
				<div class="asked-question">
					<p @click="itemshow($event)" class="asked-question__question">How to get started as a new client? <span class="material-symbols-outlined" v-show="active"> expand_more </span>
						<span class="material-symbols-outlined" v-show="!active"> expand_less </span></p>
					<p v-show="show" class="asked-question__ans">
						We love photos for their ability to express emotions and meaning - that's why we deliver the best tools to bring them fully to life. We
						can achieve more through working collaboratively and leveraging each other's strengths.
					</p>
				</div>
				<div class="asked-question">
					<p @click="itemshow($event)" class="asked-question__question">How to get started as a new client? <span class="material-symbols-outlined" v-show="active"> expand_more </span>
						<span class="material-symbols-outlined" v-show="!active"> expand_less </span></p>
					<p v-show="show" class="asked-question__ans">
						We love photos for their ability to express emotions and meaning - that's why we deliver the best tools to bring them fully to life. We
						can achieve more through working collaboratively and leveraging each other's strengths.
					</p>
				</div>
				<div class="asked-question">
					<p @click="itemshow($event)" class="asked-question__question">How to get started as a new client? <span class="material-symbols-outlined" v-show="active"> expand_more </span>
						<span class="material-symbols-outlined" v-show="!active"> expand_less </span></p>
					<p v-show="show" class="asked-question__ans">
						We love photos for their ability to express emotions and meaning - that's why we deliver the best tools to bring them fully to life. We
						can achieve more through working collaboratively and leveraging each other's strengths.
					</p>
				</div>
			</div>
</template>
<script>
export default {
    data() {
		return {
			show: false,
			active: true,
		};
	},

	methods: {
		itemshow(e) {
			let x = e.target.parentElement.children[1];

			if (x.style.display == "block") {
				x.style.display = "none";
				this.active = true;
			} else {
				x.style.display = "block";
				this.active = false;	
			}
		},
	},
}
</script>
<style lang="scss" src="@/assets/css/components/FrequentlyAskedQuestion.scss">
    
</style>