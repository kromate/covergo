
<template>
	<div class="w-[500px] min-h-[250px] max-w-[95%] bg-white rounded-xl shadow flex flex-col items-start py-5 px-14">
		<h1 class="font-semibold">
			Summary
		</h1>
		<div class="w-full mt-6" @submit.prevent="login">
			<div class="flex flex-col gap-3 items-start w-full">
				<div class="flex gap-2">
					<label for="name" class="label"> Name: </label>
					<p class="text-primary italic">
						{{ formDetails.name.value }}
					</p>
				</div>
				<div class="flex gap-2">
					<label for="name" class="label"> Age: </label>
					<p class="text-primary italic">
						{{ formDetails.name.value }}
					</p>
				</div>
				<div class="flex gap-2">
					<label for="name" class="label"> Where do you live: </label>
					<p class="text-primary italic">
						{{ formDetails.name.value }}
					</p>
				</div>

				<div class="flex gap-2">
					<label for="name" class="label"> Package: </label>
					<p class="text-primary italic">
						Standard
					</p>
				</div>
				<div class="flex gap-2">
					<label for="name" class="label"> Premium: </label>
					<p class="text-primary italic">
						24
					</p>
				</div>
			</div>

			<div class="flex items-center justify-between mt-10 w-full">
				<button
					class="btn-outline"
					@click="$router.back()"
				>
					back
				</button>
				<button
					class="btn-primary"
				>
					Buy
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useInsurance } from '@/composable/insurance'

const { formDetails } = useInsurance()
definePageMeta({
	layout: 'default'
})

const currency = ref('HKD')
</script>
