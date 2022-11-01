<template>
	<div class="contact-page">
		<section class="bread-crumb">
			<div class="bread-crumb-section">
				<div class="bread-crumb-section__main body-container">
					<span class="bread-crumb__item">
						<a href=""> Home </a>
					</span>
					<span class="bread-crumb__item is-active">
						<a href=""> <i class="fa-solid fa-chevron-right"></i> Contact</a>
					</span>
				</div>
			</div>
		</section>
		<section class="contact-page__headersection g-section--structure">
			<div class="headsection-main body-container">
				<div class="headsection-main__text">
					<h2>Contact The Biggest Escape Room Platform</h2>
					<p>Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.</p>
					<button>Contact Us <span class="material-symbols-outlined"> arrow_right_alt </span></button>
				</div>
				<div class="headsection-main__image">
					<img src="@/assets/img/Mask_group.jpg" alt="" />
				</div>
			</div>
		</section>
		<section class="contact-page__bodysection g-section--structure">
			<div class="bodysection-main body-container">
				<div class="bodysection-main__header g-section-header--structure">
					<h1 class="page-title">Contact Us</h1>
					<p class="g-description--light">
						Lorem Ipsum is simply dummy text of the text a Lorem Ipsum is simply dummy text of the text a lpsum simply text for dummy only.
					</p>
				</div>
				<div class="bodysection-main__formsection">
					<form action="">
						<div class="combained-input">
							<div class="text-field first-name">
								<label for="">What’s your first name? *</label>
								<input type="text" placeholder="Your first name" class="input-area"/>
							</div>
							<div class="text-field last-name">
								<label for="">What’s your last name? *</label>
								<input type="text" placeholder="Your last name" class="input-area"/>
							</div>
						</div>
						<div class="combained-input">
							<div class="text-field">
								<label for="">What’s your email? *</label>
								<input type="text" placeholder="Your email address" class="input-area"/>
							</div>
							<div class="text-field">
								<label for="">What's your phone number? *</label>
								<input type="text" placeholder="Your phone number" class="input-area"/>
							</div>
						</div>
						<div class="text-field">
							<label for="">Subject of your communications? *</label>
							<!-- <input type="text" placeholder="I am communicating because..."/> -->
							<select id="cars">
								<option value="" disabled selected hidden>I am communicating because...</option>
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="opel">Opel</option>
								<option value="audi">Audi</option>
							</select>
						</div>
						<div class="text-field">
							<label for="">Enter the company name, city or remote *</label>
							<input type="text" placeholder="Type here" class="input-area"/>
						</div>
						<div class="text-field">
							<label for="">What’s your message?</label>
							<textarea name="" id="" cols="30" rows="6" placeholder="Write your message here" class="input-area"></textarea>
						</div>
						<div class="form-btn">
							<button>Submit</button>
						</div>

						
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/views/ContactPage.scss" lang="scss"></style>
