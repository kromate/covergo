
<template>
	<div class="w-[500px] min-h-[250px] max-w-[95%] bg-white rounded-xl shadow flex flex-col items-center py-5 px-14">
		<h1 class="font-semibold">
			Tell Us about Yourself
		</h1>
		<form class="w-full mt-6" @submit.prevent="nextPage">
			<div class="flex flex-col gap-3 items-center w-full">
				<div class="field">
					<label for="name" class="label"> Name </label>
					<input
						id="name"
						v-model="formDetails.name.value"
						type="text"
						class="input"
						required
						placeholder="eg. John Valustik"
					>
				</div>
				<div class="field">
					<label for="age" class="label"> Age </label>
					<input
						id="age"
						v-model="formDetails.age.value"
						type="number"
						class="input"
						required
						placeholder="Enter Age"
					>
				</div>
				<div class="field">
					<label for="location" class="label"> Where do you live ? </label>
					<select id="location" v-model="formDetails.currency.value" name="location" class="input">
						<option value="HKD">
							Hong Kong
						</option>
						<option value="USD">
							USA
						</option>
						<option value="AUD">
							Australia
						</option>
					</select>
				</div>

				<div class="field">
					<label for="packageType" class="label">Select a Package</label>
					<div class="flex flex-col">
						<div v-for="p in packages" :key="p.name" class="flex items-center mr-4 mb-4">
							<input
								:id="p.name"
								v-model="formDetails.packageType.value"
								:value="p.value"
								type="radio"
								name="radio"
								class="hidden"
								required
							>
							<label :for="p.name" class="flex items-center cursor-pointer">
								<span class="w-4 h-4 inline-block mr-1 border border-grey" />
								{{ p.name }} {{ formDetails.currency.value }}</label>
						</div>
					</div>
				</div>

				<h2 v-if="formDetails.premium.value" class="font-medium bg-grey px-5 py-1.5 rounded">
					Your Premium Package is {{ formDetails.premium.value }} {{ formDetails.currency.value }}
				</h2>
			</div>

			<div class="flex items-center justify-between mt-10 w-full">
				<button
					class="btn-outline"
				>
					back
				</button>
				<button
					class="btn-primary"
				>
					Next
				</button>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { useInsurance, packages } from '@/composable/insurance'

const { formDetails, nextPage } = useInsurance()

definePageMeta({
	layout: 'default'
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currency = ref('HKD')
</script>
