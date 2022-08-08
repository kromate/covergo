<template>
	<div class="w-[500px] min-h-[250px] max-w-[95%] bg-white rounded-xl shadow flex flex-col items-center py-5 px-6">
		<h1 class="font-semibold">
			Hello There !
		</h1>
		<p>Let's by some insurance it's going to take a few steps</p>
		<router-link to="/form" class="btn-primary mt-6 ">
			Get Started
		</router-link>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default'
})
</script>
