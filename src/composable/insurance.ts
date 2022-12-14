import { Ref } from 'vue'
import { getPercentageValue } from './utils'
import { Insurance, locationTypes, packageTypes } from '@/types/insurance'

const formDetails: Insurance = {
	name: ref(''),
	age: ref(null),
	location: ref(null),
	packageType: ref(null)
}

export const packages = ref<packageTypes[]>([
	{ name: 'Standard', value: 'standard', percent: null },
	{ name: 'Safe', value: 'safe', percent: 50 },
	{ name: 'Super Safe', value: 'super', percent: 75 }
])
export const locations = ref<locationTypes[]>([
	{ name: 'Hong Kong', id: 'HKD', rate: 1 },
	{ name: 'USA', id: 'USD', rate: 2 },
	{ name: 'Australia', id: 'AUD', rate: 3 }
])

export const useInsurance = () => {
	const nextPage = () => {
		if (formDetails.age.value > 100) {
			return useRouter().push('/error')
		} else {
			return useRouter().push('/summary')
		}
	}

	const baseAmount = computed({
		get: () => {
			if (
				formDetails.age.value !== null &&
				formDetails.location?.value?.rate !== null
			) {
				return 10 * formDetails.age.value * formDetails.location?.value?.rate
			} else return null
		},
		set: () => {}
	})

	const premiumAmount = computed({
		get: () => {
			if (
				formDetails.age.value !== null &&
				formDetails.location?.value?.rate !== null &&
				formDetails.packageType?.value !== null
			) {
				if (formDetails.packageType.value.percent) {
					return (
						baseAmount.value +
						getPercentageValue(
							baseAmount.value,
							formDetails.packageType.value.percent
						)
					)
				} else {
					return baseAmount.value
				}
			} else return null
		},
		set: () => {}
	})

	return { nextPage, formDetails, baseAmount, premiumAmount }
}
