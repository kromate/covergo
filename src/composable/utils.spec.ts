import { describe, test, expect } from 'vitest'
import { getPercentageValue } from './utils'

describe('getPercentageValue', () => {
	test('Check if the getPercentageValue works', () => {
        expect(getPercentageValue(1000, 10)).toBeTypeOf('number')
        expect(getPercentageValue(1000, 10)).toBe(100)
    })
	// test('Check for falsy or negatives', () => {
    //     expect(fromMinorUnit('s')).toBeTypeOf('string')
    //     expect(fromMinorUnit('')).toBe('A number is required')
    // })
})
