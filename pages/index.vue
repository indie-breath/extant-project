<template>
	<header>
		<h1 class="text-2xl text-center p-5">Shopping ARG</h1>
			<ul id="navbar" class="list-non m-0 p-0 overflow-hidden bg-slate-700">
			<li class="float-left"><NuxtLink class="block text-white text-center px-5 py-3 no-underline hover:bg-slate-600" to="/">Home</NuxtLink></li>
			<li class="float-left"><NuxtLink class="block text-white text-center px-5 py-3 no-underline hover:bg-slate-600" to="/about">About</NuxtLink></li>
			<li class="float-left"><NuxtLink class="block text-white text-center px-5 py-3 no-underline hover:bg-slate-600" to="/other">Other</NuxtLink></li>
		</ul>
	</header>

	<main class="grid grid-cols-5">
		<div class="border-black border-solid border-2 h-screen col-span-1"></div>
		<div class="border-black border-solid border-2 h-screen col-span-3"></div>
		<div class="border-black border-solid border-2 h-screen col-span-1"></div>
	</main>

	<footer>
		<p class="text-center">Copyright [Company Name] 2024</p>
	</footer>
</template>
