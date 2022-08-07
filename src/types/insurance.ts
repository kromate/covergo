import { Ref } from 'vue'

export type locationTypes = { name: string; id: string; rate: number }
export type packageTypes = { name: string; value: string; percent: null | number };
export type Insurance = {
	name: Ref<string>;
	age: Ref<number>;
	location: Ref<locationTypes>;
	packageType: Ref<packageTypes>;
}
