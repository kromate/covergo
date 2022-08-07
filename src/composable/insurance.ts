import { Ref } from 'vue'
import { getPercentageValue } from './utils'

type locationType =
	| Ref<{ name: 'Hong Kong'; id: 'HKD'; rate: 1 }>
	| Ref<{ name: 'USA'; id: 'USD'; rate: 2 }>
	| Ref<{ name: 'Australia'; id: 'AUD'; rate: 3 }>;
interface Insurance {
	name: Ref<string>;
	age: Ref<number>;
	location: locationType;
	packageType: 'standard' | 'safe' | 'super';
	premium: Ref<number>;
}

const formDetails: Insurance = {
	name: ref(''),
	age: ref(null),
	location: ref(null),
	packageType: ref(null),
	premium: ref(0)
}

export const packages = ref([
	{ name: 'Standard', value: 'standard' },
	{ name: 'Safe', value: 'safe', percent: 50 },
	{ name: 'Super Safe', value: 'super', percent: 75 }
])
export const locations = ref([
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
			)
				return 10 * formDetails.age.value * formDetails.location?.value?.rate
			else return null
		},
		set: () => {}
	})
	const premiumAmount = computed({
		get: () => {
			if (
				formDetails.age.value !== null &&
				formDetails.location?.value?.rate !== null
			)
				return 10 * formDetails.age.value * formDetails.location?.value?.rate
			else return null
		},
		set: () => {}
	})

	watch(formDetails.packageType as any, (value) => {
        if (value.percent) {
            formDetails.premium.value = baseAmount.value + getPercentageValue(baseAmount.value, value.percent)
        } else {
            formDetails.premium.value = baseAmount.value
        }
	})
	return { nextPage, formDetails, baseAmount, premiumAmount }
}
