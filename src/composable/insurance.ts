import { Ref } from 'vue'

interface Insurance {
    name: Ref<string>,
    age: Ref<number>,
    currency: 'HKD' | 'USD' | 'AUD',
    packageType: 'standard'| 'safe' |'super',
    premium: Ref<number>,
}

const formDetails:Insurance = {
    name: ref(''),
    age: ref(0),
    currency: ref(null),
    packageType: ref(null),
    premium: ref(0)

}

export const packages = ref([
    { name: 'Standard', value: 'standard' },
    { name: 'Safe', value: 'safe' },
    { name: 'Super Safe', value: 'super' }
])
export const location = ref([
    { name: 'Hong Kong', value: 'HKD' },
    { name: 'USA', value: 'USD' },
    { name: 'Australia', value: 'AUD' }
])

export const useInsurance = () => {
    const nextPage = () => {
        console.log(formDetails)
        if (formDetails.age.value > 100) {
            return useRouter().push('/error')
        } else {
            return useRouter().push('/summary')
        }
    }
    return { nextPage, formDetails }
}
