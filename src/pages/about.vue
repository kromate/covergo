<template>
	<div class="w-[500px] min-h-[250px] max-w-[95%] bg-white rounded-xl shadow flex flex-col items-center py-5 px-6">
		<h1 class="font-semibold">
			Tell Us about Yourself
		</h1>
		<form class="w-[25rem] mt-6" @submit.prevent="login">
			<div class="flex flex-col gap-3 items-center w-full">
				<div class="field">
					<label for="name" class="label"> Name </label>
					<input
						id="name"
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
						type="number"
						class="input"
						required
						placeholder="Enter Age"
					>
				</div>
				<div class="field">
					<label for="location" class="label"> Where do you live ? </label>
					<select id="location" name="location" class="input">
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

				<div class="flex items-center mr-4 mb-4">
					<input id="radio1" type="radio" name="radio" class="hidden" checked>
					<label for="radio1" class="flex items-center cursor-pointer">
						<span class="w-4 h-4 inline-block mr-1 border border-grey" />
						Best choice</label>
				</div>
			</div>

			<div class="flex items-center mt-10 w-full">
				<div class="flex flex-col gap-6  items-center justify-center w-full">
					<button
						class="btn-primary"
					>
						Sign in
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'default'
})

const packages = [
    {name:}
]
</script>
