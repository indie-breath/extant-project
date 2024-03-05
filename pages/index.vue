<script setup lang="ts">
useHead({
	title: "ExTant",
});
</script>

<template>
	<div id="full">
		<!-- left panel for ads -->
		<div id="left-panel"></div>

		<!-- middle panel for main content -->
		<div id="middle-panel">
			<div id="outer-panel">
				<img id="logo" src="/Extant_logo.jpg" width="175">

				<!-- top text and website search function -->
				<div id="inner-panel">
					<p id="site-notice">SITE NOTICE ##/##/####. ExTant Services are indefinitely discontinued.</p>

					<div id="search-panel">
						<div class="col-span-1"></div>
						<h1 id="title"> Against All Odds!</h1>
						<form id="search-form" action="">
							<input id="search-form-input" type="text" placeholder="Search...">
							<input id="search-form-submit" type="submit" value="Search">
						</form>
					</div>

					<!-- navbar -->
					<ul id="navbar">
						<li id="navbar-knicknacks" class="navbar-item"><a href="/knickknacks" class="text-center font-bold text-rose-500">Knick Knacks</a></li>
						<li id="navbar-clothingandgear" class="navbar-item"><a href="/clothingandgear" class="text-center font-bold text-sky-600">Clothing & Gear</a></li>
						<li id="navbar-sportsandactivities" class="navbar-item"><a href="/sportsandactivities" class="text-center font-bold text-amber-500">Sports & Activities</a></li>
						<li id="navbar-booksandcomics" class="navbar-item"><a href="/booksandcomics" class="text-center font-bold text-sky-600">Books & Comics</a></li>
					</ul>

					<!-- the boxes for decoration -->
					<ul id="decoration-list">
						<li id="decoration-list-item-one" class="decoration-list-item"><img src="/image_row2.jpg" width=125></li>
						<li class="decoration-list-item"><img src="/image_row1.jpg" width=125></li>
						<li class="decoration-list-item"><img src="/image_row2.jpg" width=125></li>
						<li class="decoration-list-item"><img src="/image_row1.jpg" width=125></li>
						<li class="decoration-list-item"><img src="/image_row0.jpg" width=125></li>
					</ul>

					<!-- newsletter and sevice notice -->
					<div id="newsletter-panel">
						<p id="newsletter-notice">
            SUBSCRIBE to ExTant's <br> BUMPIN' HOT newsletter <br> to get notified of our <br> radical sales, discounts <br> and new products EARLY! <br><br> - ExTant site news <br> and updates ##/##/#### <br> We at ExTant are very sorry <br> to inform our loyal customers <br> that our EShopping website <br> and business will be <br> indefinitely closed. <br><br> Thank you for using our se...
						</p>

						<!-- middle ad -->
						<a id="newsletter-ad" href="/foog"><img src="/image4.jpg"></a>

					</div>

					<!-- bottom notice -->
					<a id="bottom-notice" href="/terminal">Click here for more information of ExTant <br> inc. customer support, business line.</a>
				</div>
			</div>
		</div>

		<!-- right panel for ads -->
		<div class="border-black border-solid border-2 col-span-1">
			<img src="/Extant_Tasc_2.png" class="mr-auto">
		</div>
	</div>
</template>

<style>
#full {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

#left-panel {
  border-color: black;
  border-style: solid;
  border-width: 2px;
}

#middle-panel {
  grid-column: span 5 / span 5;
  height: fit-content;
  background-image: url('/Extant_background.jpg');
}

#outer-panel {
  position: relative;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}

#logo {
  position: absolute;
  margin-top: -20px;
  margin-bottom: -20px;
}

#inner-panel {
  align-self: center;
  margin: auto;
  width: 83%;
  height: 83%;
  background-color: white;
}

#site-notice {
  text-align: center;
  color: rgb(185 28 28);
  padding-top: 20px;
}

#search-panel {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 20px;
  margin-bottom: 20px;
}

#title {
  grid-column: span 2 / span 2;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  color: rgb(245 158 11);
  font-size: 1.875rem;
  line-height: 2.25rem;
}

#search-form {
  grid-column: span 2 / span 2;
  margin: auto;
}

#search-form-input {
  margin-left: 10px;
  margin-right: 10px;
  border-style: solid;
  border-color: black;
  border-width: 2px;
}

#navbar {
  list-style-type: none;
  margin-left: 0px;
  margin-right: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  overflow: hidden;
}

#navbar-knicknacks {
  background-image: url('/image3.jpg');
  padding-top: 15px;
}

#navbar-clothingandgear {
  background-image: url('/image2.jpg');
}

#navbar-sportsandactivities {
  background-image: url('/image1.jpg');
  padding-left: 12px !important;
}

#navbar-booksandcomics {
  background-image: url('/image0.jpg');
}

.navbar-item {
  float: right;
  display: block;
  margin-left: 10px;
  margin-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  background-size: contain;
  background-repeat: no-repeat;
}

.navbar-item:hover {
  transform: scale(1.05);
}

#decoration-list {
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 0;
  overflow: hidden;
}

#decoration-list-item-one {
  margin-left: 50px !important;
}

.decoration-list-item {
  float: left;
  display: block;
  text-decoration: none;
  margin-left: 20px;
  margin-right: 10px;
}

#newsletter-panel {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

#newsletter-notice {
  margin-left: 70px;
  float: left;
  background-image: url('/image_bg1.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
  color: rgb(34 211 238);
}

#newsletter-ad {
  float: right;
  margin-right: 50px;
}

#bottom-notice {
  display: block;
  margin: 10px;
  text-align: center;
}
</style>
