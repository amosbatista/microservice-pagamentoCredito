import validator from '../../src/validation/aboveZero'

describe('above zero validation', () => {

  it('it must return true when payment value is valid and is above zero', ()=>{
    const card = {
      totalCompra: 1.00
    }

    expect(validator(card)).toBe(true)
  })

  it('it must false true when payment value is not a number', ()=>{
    const cardWithoutValue = {}

    expect(validator(cardWithoutValue)).toBe(false)

    const cardWithoutValidValue = {
      totalCompra: "foo"
    }

    expect(validator(cardWithoutValidValue)).toBe(false)
  })

  it('it must return false when payment value is below or equal zero', ()=>{
    const cardWithZeroValue = {
      totalCompra: 0
    }

    expect(validator(cardWithZeroValue)).toBe(false)

    const cardWithBelowZeroValue = {
      totalCompra: -1.23
    }

    expect(validator(cardWithBelowZeroValue)).toBe(false)
  })
})