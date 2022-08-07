<template>
	<div class="w-[500px] min-h-[250px] max-w-[95%] bg-white rounded-xl shadow flex flex-col items-center py-5 px-6">
		<h1 class="font-semibold">
			Oooops
		</h1>
		<p class="text-center">
			Your age is over our accepted Limit <br> We are sorry but we can not insure you
		</p>
		<nuxt-link to="/" class="btn-primary mt-6 ">
			Ok :(
		</nuxt-link>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default'
})
</script>
