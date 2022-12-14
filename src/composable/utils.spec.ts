import { describe, test, expect } from 'vitest'
import { getPercentageValue } from './utils'

describe('getPercentageValue', () => {
	test('Check if the getPercentageValue works', () => {
        expect(getPercentageValue(1000, 10)).toBeTypeOf('number')
        expect(getPercentageValue(1000, 10)).toBe(100)
    })
	test('Checks for zero value', () => {
        expect(getPercentageValue(0, 0)).toBeTypeOf('number')
        expect(getPercentageValue(0, 0)).toBe(0)
    })
})
