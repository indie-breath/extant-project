<script setup lang="ts">
useHead({
	title: "ExTant",
});
</script>

<template>
	<div class="grid grid-cols-7">
		<!-- left panel for ads -->
		<div class="border-black border-solid border-2 col-span-1"></div>

		<!-- middle panel for main content -->
		<div id="middle" class="col-span-5 h-fit bg-[url('/Extant_background.jpg')]">
			<div class="relative mx-auto my-10 w-full">
				<img src="/Extant_logo.jpg" width="175" class="absolute -my-10">

				<!-- top text and website search function -->
				<div class="self-center mx-auto w-5/6 h-5/6 bg-white">
					<p class="text-center text-red-700 pt-10">SITE NOTICE ##/##/####. ExTant Services are indefinitely discontinued.</p>

					<div class="grid grid-cols-5 my-10">
						<div class="col-span-1"></div>
						<h1 class="col-span-2 text-center font-serif font-bold text-amber-500 text-3xl"> Against All Odds!</h1>
						<form action="" class="col-span-2 m-auto">
							<input type="text" placeholder="Search..." class="border-solid border-2 border-black mx-5"></input>
							<input type="submit" value="Search">
						</form>
					</div>

					<!-- navbar -->
					<ul class="list-none my-10 mx-0 p-0 overflow-hidden">
						<li class="float-right block mx-2 py-5 px-10 no-underline bg-[url('/image3.jpg')] bg-no-repeat hover:scale-105"><NuxtLink to="/knickknacks" class="text-center font-bold text-rose-500">Knick Knacks</NuxtLink></li>
						<li class="float-right block mx-2 py-5 px-8 no-underline bg-[url('/image2.jpg')] bg-no-repeat hover:scale-105"><NuxtLink to="/clothingandgear" class="text-center font-bold text-sky-600">Clothing & Gear</NuxtLink></li>
						<li class="float-right block mx-2 py-5 px-5 no-underline bg-[url('/image1.jpg')] bg-no-repeat hover:scale-105"><NuxtLink to="/sportsandactivities" class="text-center font-bold text-amber-500">Sports & Activities</NuxtLink></li>
						<li class="float-right block mx-2 py-5 px-7 no-underline bg-[url('/image0.jpg')] bg-no-repeat hover:scale-105"><NuxtLink to="/booksandcomics" class="text-center font-bold text-sky-600">Books & Comics</NuxtLink></li>
					</ul>

					<!-- the boxes for decoration -->
					<ul class="list-none my-10 mx-0 p-0 overflow-hidden">
						<li class="float-left block no-underline mr-5 ml-10"><img src="/image_row2.jpg" width=125></li>
						<li class="float-left block no-underline mx-5"><img src="/image_row1.jpg" width=125></li>
						<li class="float-left block no-underline mx-5"><img src="/image_row2.jpg" width=125></li>
						<li class="float-left block no-underline mx-5"><img src="/image_row1.jpg" width=125></li>
						<li class="float-left block no-underline mx-5"><img src="/image_row0.jpg" width=125></li>
					</ul>

					<!-- newsletter and sevice notice -->
					<div class="grid grid-cols-2">
						<p class="mx-10 float-left bg-[url('/image_bg1.jpg')] bg-contain bg-no-repeat p-5 text-cyan-400">
						SUBSCRIBE to ExTant's <br> BUMPIN' HOT newsletter to <br> get notified of our radical <br> sales, discounts and new <br> products EARLY! <br><br> - ExTant site news and updates <br> ##/##/#### We at ExTant are <br> very sorry to inform our loyal <br> customers that our EShopping <br> website and business will be <br> indefinitely closed. <br><br> Thank you for using our se...
						</p>

						<!-- middle ad -->
						<a href="/foog" class="float-right mx-10"><img src="/image4.jpg"></a>
						
					</div>

					<!-- bottom notice -->
					<a href="/terminal" class="text-center">Click here for more information of ExTant <br> inc. customer support, business line.</a>
				</div>
			</div>
		</div>

		<!-- right panel for ads -->
		<div class="border-black border-solid border-2 col-span-1">
			<img src="/Extant_Tasc_2.png" class="mr-auto">
		</div>
	</div>
</template>
